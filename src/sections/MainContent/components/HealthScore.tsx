import { useEffect, useRef, useState } from "react";

export const HealthScore = () => {
  const [count, setCount] = useState(0);
  const [barVisible, setBarVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          setBarVisible(true);
          let start = 0;
          const target = 78;
          const duration = 1200;
          const step = Math.ceil(duration / target);
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= target) clearInterval(timer);
          }, step);
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="shadow-[rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] mb-5 p-5 rounded-2xl"
    >
      <div className="items-center flex justify-between">
        <div>
          <p className="text-black text-xs leading-4">
            <span className="font-bold">Weekly Health Score</span>
          </p>
          <p className="text-black text-4xl font-extrabold leading-10 mt-1">
            {count}
            <span className="text-lg leading-7 opacity-60">/100</span>
          </p>
          <div className="mt-2 h-1.5 w-32 bg-black/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-teal-500 to-green-400 rounded-full transition-all duration-[1200ms] ease-out"
              style={{ width: barVisible ? `${count}%` : "0%" }}
            />
          </div>
          <div className="items-center gap-x-1 flex gap-y-1 mt-2">
            <img
              src="https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-6.svg"
              alt="Trend"
              className="h-3 w-3"
            />
            <span className="text-black text-xs font-semibold block leading-4">
              +5 from last week
            </span>
          </div>
        </div>
        <div className="items-center flex h-20 justify-center w-20 rounded-full border-4 border-solid border-white/40">
          <div className="items-center bg-white/20 flex h-16 justify-center w-16 rounded-full animate-[float_3s_ease-in-out_infinite]">
            <span className="text-2xl block leading-8">🌿</span>
          </div>
        </div>
      </div>
    </div>
  );
};
import { useEffect, useRef, useState } from "react";

export const HealthScore = () => {
  const [count, setCount] = useState(0);
  const [barVisible, setBarVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          setBarVisible(true);
          // Count from 0 → 78
          let start = 0;
          const target = 78;
          const duration = 1200;
          const step = Math.ceil(duration / target);
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= target) clearInterval(timer);
          }, step);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="shadow-[rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] mb-5 p-5 rounded-2xl"
    >
      <div className="items-center flex justify-between">
        <div>
          <p className="text-black text-xs leading-4">
            <span className="font-bold">Weekly Health Score</span>
          </p>
          <p className="text-black text-4xl font-extrabold leading-10 mt-1">
            {count}
            <span className="text-lg leading-7 opacity-60">/100</span>
          </p>

          {/* Progress bar */}
          <div className="mt-2 h-1.5 w-32 bg-black/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-teal-500 to-green-400 rounded-full transition-all duration-[1200ms] ease-out"
              style={{ width: barVisible ? `${count}%` : "0%" }}
            />
          </div>

          <div className="items-center gap-x-1 flex gap-y-1 mt-2">
            <img
              src="https://c.animaapp.com/mnonxa6z2eGB3g/assets/icon-6.svg"
              alt="Trend"
              className="h-3 w-3"
            />
            <span className="text-black text-xs font-semibold block leading-4">
              +5 from last week
            </span>
          </div>
        </div>

        <div className="items-center flex h-20 justify-center w-20 rounded-full border-4 border-solid border-white/40">
          <div className="items-center bg-white/20 flex h-16 justify-center w-16 rounded-full animate-[float_3s_ease-in-out_infinite]">
            <span className="text-2xl block leading-8">🌿</span>
          </div>
        </div>
      </div>
    </div>
  );
};
