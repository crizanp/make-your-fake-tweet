import React from "react";
import { cn } from "@/utils";

interface InputFieldProps extends React.ComponentProps<"input"> {
  label?: string;
  tooltip?: string;
  containerClass?: string;
  labelClass?: string;
  inputClass?: string;
  tooltipClass?: string;
  children?: React.ReactNode;
}

const InputField = (props: InputFieldProps) => {
  const {
    id,
    label,
    tooltip,
    containerClass,
    labelClass,
    inputClass,
    tooltipClass,
    className = "",
    children,
    ...otherProps
  } = props;

  return (
    <div className={cn("flex w-full flex-col gap-2", containerClass)}>
      {label && (
        <label htmlFor={id} className={cn("text-sm text-gray-300", labelClass)}>
          {label}
        </label>
      )}
      <input
        id={id}
        {...otherProps}
        className={cn(
          "rounded-md bg-gray-800 p-2 text-gray-100 outline-none focus:ring-2 focus:ring-cyan-500",
          inputClass
        )}
      />
      {children}
      {tooltip && (
        <span className={cn("text-xs text-gray-400", tooltipClass)}>
          {tooltip}
        </span>
      )}
    </div>
  );
};

export default InputField;
