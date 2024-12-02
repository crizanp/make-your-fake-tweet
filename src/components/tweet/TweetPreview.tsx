"use client";

import React from "react";
import { useTweet } from "@/hooks/useTweet";
import { useScreenshot } from "@/hooks/useScreenshot";

import TweetBody from "./parts/TweetBody";
import TweetHeader from "./parts/TweetHeader";
import TweetFooter from "./parts/TweetFooter";
import TweetDisclaimer from "./ui/TweetDisclaimer";

import RadioInput from "@/components/ui/RadioInput";
import DownloadButton from "@/components/ui/DownloadButton";

import { TweetTheme } from "@/types/tweet";
import { cn } from "@/utils";
import { twitterThemes, twitterThemeOptions } from "@/utils/constants";

const TweetPreview = () => {
  const { theme, updateTheme, resetTweet } = useTweet();
  const currentTheme = twitterThemes[theme];

  const { componentRef, isCapturing, captureScreenshot } =
    useScreenshot(currentTheme);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = event.target.value as TweetTheme;
    updateTheme(newTheme);
  };

  return (
    <div className="order-1 mx-auto w-full lg:order-2">
      <div
        className={cn(
          "mx-auto flex w-full max-w-2xl flex-col items-center gap-4 rounded border border-black bg-white py-4",
          "lg:px-4"
        )}
      >
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold text-gray-800">Tweet Preview</h2>
          <p className="text-sm text-gray-500">
            Customize your tweet and see how it looks.
          </p>
        </div>

        {/* Theme Selector */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm font-medium text-gray-500">
            Select a Theme:
          </span>
          <RadioInput
            selected={theme}
            options={twitterThemeOptions}
            onChange={handleThemeChange}
            className="gap-6"
          />
        </div>

        {/* Tweet Preview Section */}
        <div
          ref={componentRef}
          className={cn("mx-auto w-full border p-4", {
            // "border-gray-300 bg-gray-100 text-gray-900": theme === "light",
            "border-gray-700 bg-black text-white": theme === "dark",
            "border-gray-600 bg-gray-800 text-gray-200": theme === "dim",
          })}
        >
          {/* Tweet header */}
          <TweetHeader />
          {/* Tweet body */}
          <TweetBody />
          {/* Tweet Footer */}
          <TweetFooter />
        </div>
        <div className="flex w-full items-center justify-between gap-4 px-2 lg:px-0">
          {/* Tweet use disclaimer */}
          <TweetDisclaimer />
          <div className="flex w-full items-center justify-end gap-4">
            <button
              type="button"
              className={cn(
                "w-fit rounded-lg bg-red-500 px-4 py-2 text-center text-white",
                "hover:cursor-pointer hover:bg-red-600"
              )}
              onClick={resetTweet}
            >
              Reset
            </button>
            <DownloadButton
              label="Download"
              loadingLabel="Processing"
              isLoading={isCapturing}
              onClick={captureScreenshot}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetPreview;
