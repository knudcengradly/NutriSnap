export type SummaryItemProps = {
  containerClassName: string;
  iconSrc: string;
  iconClassName: string;
  value: string;
  label: string;
  showOverlay?: boolean;
  valueClassName?: string;
  labelClassName?: string;
};

export const SummaryItem = (props: SummaryItemProps) => {
  return (
    <div
      className={`min-h-[auto] min-w-[auto] text-center border p-3 rounded-[14px] border-solid transition-all duration-200 hover:scale-[1.03] hover:shadow-md cursor-default ${props.containerClassName}`}
    >
      {props.showOverlay && (
        <div className="absolute bg-white blur h-8 opacity-20 w-8 -mr-4 -mt-4 rounded-full right-0 top-0" />
      )}
      <img
        src={props.iconSrc}
        alt="Icon"
        className={`h-5 w-5 mb-1 mx-auto ${props.iconClassName}`}
      />
      <p className={`text-[oklch(0.278_0.033_256.848)] text-lg font-extrabold leading-7 ${props.valueClassName ?? ""}`}>
        {props.value}
      </p>
      <p className={`text-black text-[10px] leading-[15px] ${props.labelClassName ?? ""}`}>
        {props.label}
      </p>
    </div>
  );
};
export type SummaryItemProps = {
    containerClassName: string;
    iconSrc: string;
    iconClassName: string;
    value: string;
    label: string;
    showOverlay?: boolean;
    valueClassName?: string;
    labelClassName?: string;
  };
  
  export const SummaryItem = (props: SummaryItemProps) => {
    return (
      <div
        className={`min-h-[auto] min-w-[auto] text-center border p-3 rounded-[14px] border-solid transition-all duration-200 hover:scale-[1.03] hover:shadow-md cursor-default ${props.containerClassName}`}
      >
        {props.showOverlay && (
          <div className="absolute bg-white blur h-8 opacity-20 w-8 -mr-4 -mt-4 rounded-full right-0 top-0" />
        )}
        <img
          src={props.iconSrc}
          alt="Icon"
          className={`h-5 w-5 mb-1 mx-auto ${props.iconClassName}`}
        />
        <p className={`text-[oklch(0.278_0.033_256.848)] text-lg font-extrabold leading-7 ${props.valueClassName ?? ""}`}>
          {props.value}
        </p>
        <p className={`text-black text-[10px] leading-[15px] ${props.labelClassName ?? ""}`}>
          {props.label}
        </p>
      </div>
    );
  };