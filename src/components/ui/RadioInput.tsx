import React from "react";
import { cn } from "@/utils";

export interface RadioOption {
  id: any;
  label: string;
  value: string;
}

export interface RadioInputProps {
  selected: string;
  options: RadioOption[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const RadioInput = (props: RadioInputProps) => {
  const { selected, options, onChange, className } = props;

  return (
    <div className={cn("flex w-full flex-wrap gap-4", className)}>
      {options.map((option) => (
        <label
          key={option.id}
          htmlFor={option.value}
          className="flex items-center gap-2 text-gray-600"
        >
          <input
            id={option.value}
            type="radio"
            value={option.value}
            checked={selected === option.value}
            onChange={onChange}
            className="h-4 w-4 cursor-pointer accent-cyan-500"
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioInput;
