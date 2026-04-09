# NutriSnap

NutriSnap for Techno

## Local dev (Wi‑Fi, live reload)

1. `npm run dev -- --host`
2. `npx cap run android -l --host YOUR_PC_IP --port 5173`  
   Use your LAN IP from `ipconfig` (PC and phone on the same Wi‑Fi).

## Deploy (APK for sharing / QR)

1. `npm run android:build`
2. Android Studio → **Build → Build Bundle(s) / APK(s) → Build APK(s)**
3. APK path: `android/app/build/outputs/apk/debug/NutriSnap.apk`
4. Upload that `.apk` somewhere with a direct download link → put that URL in your QR code

Optional icons after changing `resources/logo.png`: `npm run android:icons`, then rebuild the APK.
