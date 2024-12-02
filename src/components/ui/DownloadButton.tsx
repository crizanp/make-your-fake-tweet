import React from "react";
import { ImSpinner2 } from "react-icons/im";
import { BiDownload } from "react-icons/bi";

import { cn } from "@/utils";

export interface DownloadButtonProps extends React.ComponentProps<"button"> {
  label: string;
  loadingLabel: string;
  isLoading: boolean;
}

const DownloadButton = (props: DownloadButtonProps) => {
  const { label, loadingLabel, isLoading, className, ...otherProps } = props;
  return (
    <button
      className={cn(
        "flex w-[200px] items-center justify-center rounded-lg bg-gray-700 px-4 py-2 text-white shadow-md",
        "hover:bg-gray-600 disabled:cursor-not-allowed disabled:bg-gray-500",
        className
      )}
      {...otherProps}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <span className="animate-spin text-xl">
            <ImSpinner2 />
          </span>
          <span className="text-sm">{loadingLabel}</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <span className="text-xl">
            <BiDownload />
          </span>
          <span className="text-sm">{label}</span>
        </div>
      )}
    </button>
  );
};

export default DownloadButton;
