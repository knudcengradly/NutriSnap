export type ScanItemProps = {
  emoji: string;
  name: string;
  time: string;
  score: number;
  variant?: string;
  delay?: number;
};

const scoreColor = (score: number) => {
  if (score >= 85) return "text-green-600";
  if (score >= 70) return "text-teal-700";
  return "text-yellow-600";
};

export const ScanItem = (props: ScanItemProps) => {
  return (
    <div
      className={`items-center gap-x-3 flex gap-y-3 py-3 transition-all duration-200 hover:bg-teal-50/50 hover:px-2 hover:rounded-xl -mx-0 cursor-pointer ${props.variant ?? ""}`}
      style={{ animationDelay: `${props.delay ?? 0}ms` }}
    >
      <div className="text-lg items-center bg-teal-700/10 flex h-10 justify-center leading-7 w-10 rounded-full transition-transform duration-200 hover:scale-110 flex-shrink-0">
        {props.emoji}
      </div>
      <div className="basis-0 grow min-w-0">
        <p className="text-[oklch(0.278_0.033_256.848)] text-sm font-semibold leading-5 truncate">
          {props.name}
        </p>
        <p className="text-[oklch(0.707_0.022_261.325)] text-xs leading-4">
          {props.time}
        </p>
      </div>
      <div className="items-center gap-x-2 flex flex-shrink-0">
        <span className={`text-sm font-bold block leading-5 ${scoreColor(props.score)}`}>
          {props.score}
        </span>
        <img
          src="https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-7.svg"
          alt="Score"
          className="h-4 w-4"
        />
      </div>
    </div>
  );
};
export type ScanItemProps = {
    emoji: string;
    name: string;
    time: string;
    score: number;
    variant?: string;
    delay?: number;
  };
  
  const scoreColor = (score: number) => {
    if (score >= 85) return "text-green-600";
    if (score >= 70) return "text-teal-700";
    return "text-yellow-600";
  };
  
  export const ScanItem = (props: ScanItemProps) => {
    return (
      <div
        className={`items-center gap-x-3 flex gap-y-3 py-3 transition-all duration-200 hover:bg-teal-50/50 hover:px-2 hover:rounded-xl -mx-0 cursor-pointer ${props.variant ?? ""}`}
        style={{ animationDelay: `${props.delay ?? 0}ms` }}
      >
        <div className="text-lg items-center bg-teal-700/10 flex h-10 justify-center leading-7 w-10 rounded-full transition-transform duration-200 hover:scale-110 flex-shrink-0">
          {props.emoji}
        </div>
        <div className="basis-0 grow min-w-0">
          <p className="text-[oklch(0.278_0.033_256.848)] text-sm font-semibold leading-5 truncate">
            {props.name}
          </p>
          <p className="text-[oklch(0.707_0.022_261.325)] text-xs leading-4">
            {props.time}
          </p>
        </div>
        <div className="items-center gap-x-2 flex flex-shrink-0">
          <span className={`text-sm font-bold block leading-5 ${scoreColor(props.score)}`}>
            {props.score}
          </span>
          <img
            src="https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-7.svg"
            alt="Score"
            className="h-4 w-4"
          />
        </div>
      </div>
    );
  };