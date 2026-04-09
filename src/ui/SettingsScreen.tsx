import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  Bell,
  ChevronRight,
  HelpCircle,
  LogOut,
  Mail,
  Moon,
  Shield,
  Sun,
  User,
  UserCircle,
} from "lucide-react";
import { useEffect, useRef, useState, type ChangeEvent } from "react";

import dalanginImg from "@/assets/equivalents/Dalangin.jpg";
import deVillaImg from "@/assets/equivalents/DeVilla.png";
import lingalImg from "@/assets/equivalents/Lingal.jpg";
import puriImg from "@/assets/equivalents/Puri.png";
import singhImg from "@/assets/equivalents/Singh.jpg";

type SettingsPage = "root" | "profile" | "notifications" | "privacy" | "help";

type SettingsRow = {
  id: Exclude<SettingsPage, "root">;
  title: string;
  subtitle: string;
  Icon: LucideIcon;
};

type SettingsScreenProps = {
  darkMode: boolean;
  onDarkModeChange: (enabled: boolean) => void;
};

type Developer = {
  name: string;
  email: string;
  imageSrc: string;
};

const rows: SettingsRow[] = [
  { id: "profile", title: "Profile", subtitle: "Edit your information", Icon: User },
  { id: "notifications", title: "Notifications", subtitle: "Manage alerts", Icon: Bell },
  { id: "privacy", title: "Privacy", subtitle: "Data use and policy", Icon: Shield },
  { id: "help", title: "Help & Support", subtitle: "Developers and contact", Icon: HelpCircle },
];

const developers: Developer[] = [
  {
    imageSrc: dalanginImg,
    name: "Kyle Dranmay Dalangin",
    email: "22-02642@g.batstate-u.edu.ph",
  },
  {
    imageSrc: deVillaImg,
    name: "Knudcen Gradly C. De Villa",
    email: "22-05272@g.batstate-u.edu.ph",
  },
  {
    imageSrc: lingalImg,
    name: "Richmond S. Lingal",
    email: "22-07529@g.batstate-u.edu.ph",
  },
  {
    imageSrc: puriImg,
    name: "Neal Justine N. Puri",
    email: "22-02316@g.batstate-u.edu.ph",
  },
  {
    imageSrc: singhImg,
    name: "Joriel Laurence S. Singh",
    email: "22-07120@g.batstate-u.edu.ph",
  },
];

export const SettingsScreen = ({ darkMode, onDarkModeChange }: SettingsScreenProps) => {
  const profileImageInputRef = useRef<HTMLInputElement>(null);
  const profileImageObjectUrlRef = useRef<string | null>(null);
  const [page, setPage] = useState<SettingsPage>("root");
  const [name, setName] = useState("NutriSnap User");
  const [email, setEmail] = useState("user@nutrisnap.app");
  const [profileImageSrc, setProfileImageSrc] = useState<string | null>(null);

  const [pushEnabled, setPushEnabled] = useState(true);
  const [waterReminderEnabled, setWaterReminderEnabled] = useState(true);
  const [waterTimesPerDay, setWaterTimesPerDay] = useState(8);
  const [mealReminderEnabled, setMealReminderEnabled] = useState(true);

  const waterEveryHours = Math.max(1, Math.round(24 / waterTimesPerDay));

  const pageTitle = page === "root" ? "Settings" : rows.find((r) => r.id === page)?.title ?? "Settings";
  const pageSubtitle =
    page === "root"
      ? "Account and preferences"
      : rows.find((r) => r.id === page)?.subtitle ?? "Manage your preferences";

  useEffect(() => {
    return () => {
      if (profileImageObjectUrlRef.current) URL.revokeObjectURL(profileImageObjectUrlRef.current);
    };
  }, []);

  const onProfileImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) {
      e.target.value = "";
      return;
    }
    if (profileImageObjectUrlRef.current) URL.revokeObjectURL(profileImageObjectUrlRef.current);
    const url = URL.createObjectURL(file);
    profileImageObjectUrlRef.current = url;
    setProfileImageSrc(url);
    e.target.value = "";
  };

  return (
    <div className="px-3 pt-4 pb-4">
      <input
        ref={profileImageInputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        aria-hidden
        tabIndex={-1}
        onChange={onProfileImageChange}
      />
      <div className="mb-3 flex items-center gap-2 animate-[fade-up_0.4s_ease-out_both]">
        {page === "root" ? (
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-100 text-teal-700 dark:bg-slate-800 dark:text-slate-100">
            <UserCircle className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
          </span>
        ) : (
          <button
            type="button"
            onClick={() => setPage("root")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200 active:scale-[0.98]"
            aria-label="Back to settings"
          >
            <ArrowLeft className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
          </button>
        )}
        <div className="min-w-0">
          <h1 className="settings-page-title text-lg font-bold tracking-tight text-slate-800">{pageTitle}</h1>
          <p className="settings-page-subtitle text-xs text-slate-500">{pageSubtitle}</p>
        </div>
        <button
          type="button"
          onClick={() => onDarkModeChange(!darkMode)}
          className={`ml-auto inline-flex rounded-full border p-1 transition ${
            darkMode ? "border-teal-500/70 bg-teal-700/30" : "border-slate-300 bg-white"
          }`}
          aria-label="Toggle light and dark mode"
        >
          <span
            className={`relative h-6 w-11 rounded-full p-0.5 transition ${
              darkMode ? "bg-teal-600" : "bg-slate-300"
            }`}
          >
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-full bg-white transition ${
                darkMode ? "translate-x-5" : ""
              }`}
            >
              {darkMode ? (
                <Moon className="h-3.5 w-3.5 fill-emerald-800 text-emerald-800" aria-hidden />
              ) : (
                <Sun className="h-3.5 w-3.5 fill-amber-400 text-amber-500" aria-hidden />
              )}
            </span>
          </span>
        </button>
      </div>

      {page === "root" && (
        <>
          <button
            type="button"
            onClick={() => setPage("profile")}
            className="mb-4 flex w-full items-center gap-3 rounded-2xl border border-black/5 bg-white p-4 text-left shadow-[0_4px_10px_rgba(15,23,42,0.08)] transition-colors hover:border-teal-100 hover:bg-teal-50"
          >
            {profileImageSrc ? (
              <img
                src={profileImageSrc}
                alt=""
                className="h-11 w-11 shrink-0 rounded-full object-cover object-center ring-2 ring-white shadow-sm"
              />
            ) : (
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 ring-2 ring-white shadow-sm">
                <UserCircle className="h-6 w-6" strokeWidth={2} aria-hidden />
              </span>
            )}
            <div className="min-w-0 flex-1">
              <p className="truncate text-base font-bold text-slate-800">{name}</p>
              <p className="truncate text-xs text-slate-500">{email}</p>
            </div>
            <ChevronRight className="h-5 w-5 shrink-0 text-slate-400" aria-hidden />
          </button>

          <div className="mb-5 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_4px_10px_rgba(15,23,42,0.08)]">
            {rows.map((row, i) => (
              <button
                key={row.id}
                type="button"
                onClick={() => setPage(row.id)}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-all duration-200 hover:bg-teal-50/50 active:scale-[0.995] ${
                  i !== rows.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <row.Icon className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-base font-semibold text-slate-800">{row.title}</p>
                  <p className="text-xs leading-snug text-slate-500">{row.subtitle}</p>
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-slate-400" aria-hidden />
              </button>
            ))}
          </div>

          <button
            type="button"
             className="flex w-full items-center justify-center gap-2 rounded-2xl border border-black/5 bg-white px-4 py-3.5 text-base font-semibold text-red-500 shadow-[0_4px_10px_rgba(15,23,42,0.08)] transition-all hover:bg-red-50 dark:hover:!bg-red-950 dark:hover:!border-red-600/60 active:scale-[0.99]"
          >
            <LogOut className="h-5 w-5 shrink-0" aria-hidden />
            Log out
          </button>
        </>
      )}

      {page === "profile" && (
        <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-[0_4px_10px_rgba(15,23,42,0.08)]">
          <p className="mb-3 text-sm font-semibold text-slate-700">Profile picture</p>
          <div className="mb-4 flex items-center gap-3">
            {profileImageSrc ? (
              <img
                src={profileImageSrc}
                alt=""
                className="h-14 w-14 rounded-full object-cover object-center ring-1 ring-slate-200"
              />
            ) : (
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-600 ring-1 ring-slate-200">
                <UserCircle className="h-8 w-8" strokeWidth={2} aria-hidden />
              </span>
            )}
            <button
              type="button"
              onClick={() => profileImageInputRef.current?.click()}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Upload photo
            </button>
          </div>

          <label className="mb-3 block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
            />
          </label>
          <label className="mb-4 block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
            />
          </label>

          <button
            type="button"
            className="w-full rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(45,125,111,0.28)] transition hover:from-teal-700 hover:to-emerald-700"
          >
            Save profile changes
          </button>
        </div>
      )}

      {page === "notifications" && (
        <div className="space-y-3">
          <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-[0_4px_10px_rgba(15,23,42,0.08)]">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-800">Push notifications</p>
                <p className="text-xs text-slate-500">General app alerts and reminders</p>
              </div>
              <button
                type="button"
                onClick={() => setPushEnabled((v) => !v)}
                className={`h-7 w-12 rounded-full p-1 transition ${pushEnabled ? "bg-teal-600" : "bg-slate-300"}`}
                aria-label="Toggle push notifications"
              >
                <span className={`block h-5 w-5 rounded-full bg-white transition ${pushEnabled ? "translate-x-5" : ""}`} />
              </button>
            </div>

            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-800">Water intake reminders</p>
                <p className="text-xs text-slate-500">Nudges to keep your hydration on track</p>
              </div>
              <button
                type="button"
                onClick={() => setWaterReminderEnabled((v) => !v)}
                className={`h-7 w-12 rounded-full p-1 transition ${waterReminderEnabled ? "bg-teal-600" : "bg-slate-300"}`}
                aria-label="Toggle water reminders"
              >
                <span
                  className={`block h-5 w-5 rounded-full bg-white transition ${waterReminderEnabled ? "translate-x-5" : ""}`}
                />
              </button>
            </div>

            <label className={`${!waterReminderEnabled ? "opacity-60" : ""}`}>
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                Water reminders per day: {waterTimesPerDay}
              </span>
              <input
                type="range"
                min={2}
                max={12}
                value={waterTimesPerDay}
                onChange={(e) => setWaterTimesPerDay(Number(e.target.value))}
                disabled={!waterReminderEnabled}
                className="w-full accent-teal-600"
              />
              <p className="mt-1 text-xs text-slate-500">Approx. every {waterEveryHours} hour(s)</p>
            </label>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-[0_4px_10px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-800">Meal check-in reminder</p>
                <p className="text-xs text-slate-500">Prompts after breakfast, lunch, and dinner</p>
              </div>
              <button
                type="button"
                onClick={() => setMealReminderEnabled((v) => !v)}
                className={`h-7 w-12 rounded-full p-1 transition ${mealReminderEnabled ? "bg-teal-600" : "bg-slate-300"}`}
                aria-label="Toggle meal reminders"
              >
                <span
                  className={`block h-5 w-5 rounded-full bg-white transition ${mealReminderEnabled ? "translate-x-5" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>
      )}

      {page === "privacy" && (
        <div className="space-y-3">
          <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-[0_4px_10px_rgba(15,23,42,0.08)]">
            <h3 className="mb-2 text-sm font-bold text-slate-800">Data use</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              NutriSnap stores your scan history, profile preferences, and reminder settings so your experience stays
              personalized. Nutrition images are processed only to extract food-label details and improve your insights.
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-[0_4px_10px_rgba(15,23,42,0.08)]">
            <h3 className="mb-2 text-sm font-bold text-slate-800">Privacy policy</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              We do not sell your personal data. Access is restricted to authorized app services, and all records are
              encrypted in transit and at rest. You can request account data export or deletion through Help & Support.
            </p>
          </div>
        </div>
      )}

      {page === "help" && (
        <div className="space-y-3">
          <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-[0_4px_10px_rgba(15,23,42,0.08)]">
            <h3 className="mb-3 text-sm font-bold text-slate-800">Developers</h3>
            <div className="space-y-3">
              {developers.map((dev) => (
                <div key={dev.email} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-2.5">
                  <img src={dev.imageSrc} alt={`${dev.name} profile`} className="h-12 w-12 shrink-0 rounded-full object-cover object-center" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-800">{dev.name}</p>
                    <p className="mt-0.5 flex items-center gap-1.5 truncate text-xs text-slate-600">
                      <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      {dev.email}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
