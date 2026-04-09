export type NavButtonProps = {
  iconSrc: string;
  label: string;
  iconClassName?: string;
  labelClassName?: string;
  showIndicator?: boolean;
};

export const NavButton = (props: NavButtonProps) => {
  return (
    <button className="font-medium items-center bg-transparent caret-transparent flex flex-col min-h-[auto] min-w-14 outline-[oklab(0.708_0_0_/_0.5)] text-center px-3 py-2">
      <img
        src={props.iconSrc}
        alt="Icon"
        className={`box-border caret-transparent h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5 ${props.iconClassName ?? ""}`}
      />
      <span
        className={`text-[10px] box-border caret-transparent block leading-[15px] min-h-[auto] min-w-[auto] outline-[oklab(0.708_0_0_/_0.5)] mt-1 ${props.labelClassName ?? ""}`}
      >
        {props.label}
      </span>
      {props.showIndicator && (
        <div className="box-border caret-transparent h-1 min-h-[auto] min-w-[auto] outline-[oklab(0.708_0_0_/_0.5)] w-1 mt-0.5 rounded-[3.35544e+07px]" />
      )}
    </button>
  );
};
export type NavButtonProps = {
    iconSrc: string;
    label: string;
    iconClassName?: string;
    labelClassName?: string;
    showIndicator?: boolean;
  };
  
  export const NavButton = (props: NavButtonProps) => {
    return (
      <button className="font-medium items-center bg-transparent caret-transparent flex flex-col min-h-[auto] min-w-14 outline-[oklab(0.708_0_0_/_0.5)] text-center px-3 py-2">
        <img
          src={props.iconSrc}
          alt="Icon"
          className={`box-border caret-transparent h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5 ${props.iconClassName ?? ""}`}
        />
        <span
          className={`text-[10px] box-border caret-transparent block leading-[15px] min-h-[auto] min-w-[auto] outline-[oklab(0.708_0_0_/_0.5)] mt-1 ${props.labelClassName ?? ""}`}
        >
          {props.label}
        </span>
        {props.showIndicator && (
          <div className="box-border caret-transparent h-1 min-h-[auto] min-w-[auto] outline-[oklab(0.708_0_0_/_0.5)] w-1 mt-0.5 rounded-[3.35544e+07px]"></div>
        )}
      </button>
    );
  };