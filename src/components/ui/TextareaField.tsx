import React from "react";
import { cn } from "@/utils";

interface TextareaFieldProps extends React.ComponentProps<"textarea"> {
  label?: string;
  tooltip?: string;
  containerClass?: string;
  labelClass?: string;
  textareaClass?: string;
  tooltipClass?: string;
}

const TextareaField = (props: TextareaFieldProps) => {
  const {
    id,
    label,
    tooltip,
    containerClass,
    labelClass,
    textareaClass,
    tooltipClass,
    className = "",
    ...otherProps
  } = props;

  return (
    <div className={cn("flex w-full flex-col gap-2", containerClass)}>
      {label && (
        <label htmlFor={id} className={cn("text-sm text-gray-300", labelClass)}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        {...otherProps}
        className={cn(
          "rounded-md bg-gray-800 p-2 text-gray-100 outline-none focus:ring-2 focus:ring-cyan-500",
          textareaClass
        )}
      />
      {tooltip && (
        <span className={cn("text-xs text-gray-400", tooltipClass)}>
          {tooltip}
        </span>
      )}
    </div>
  );
};

export default TextareaField;
