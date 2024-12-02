"use client";

import React, { useState } from "react";
import { useTweet } from "@/hooks/useTweet";

import InputField from "@/components/ui/InputField";
import TextareaField from "@/components/ui/TextareaField";

import { cn } from "@/utils";
import { tweetHeaderDefaults, tweetBodyDefaults } from "@/utils/constants";

const TweetForm = () => {
  const { tweet, updateTweet } = useTweet();
  const [activeTab, setActiveTab] = useState("details");

  const handleImageChange = (
    field: keyof typeof tweet, // Type `field` as a key of the Tweet type
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          updateTweet({
            [field]: event.target.result,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={cn(
        "w-full max-w-lg rounded-lg bg-gray-900 p-6 text-white shadow-lg"
      )}
    >
      <div className="mb-4 flex items-center gap-4 border-b border-gray-700 pb-2">
        <button
          className={cn(
            "px-4 py-2 font-medium",
            activeTab === "details"
              ? "border-b-2 border-cyan-500 text-cyan-500"
              : "text-gray-400"
          )}
          onClick={() => setActiveTab("details")}
        >
          Details
        </button>
        <button
          className={cn(
            "px-4 py-2 font-medium",
            activeTab === "stats"
              ? "border-b-2 border-cyan-500 text-cyan-500"
              : "text-gray-400"
          )}
          onClick={() => setActiveTab("stats")}
        >
          Stats
        </button>
      </div>

      {activeTab === "details" && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <InputField
              id="avatar"
              type="file"
              accept="image/*"
              placeholder="Upload Profile Picture"
              inputClass="hidden"
              onChange={(e) => handleImageChange("avatar", e)}
            >
              <label
                htmlFor="avatar"
                className="cursor-pointer rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-cyan-400"
              >
                Profile Picture
              </label>
            </InputField>
            {tweet.avatar && (
              <button
                className="text-xs text-red-500 hover:underline"
                onClick={() => updateTweet({ avatar: "" })}
              >
                Remove
              </button>
            )}
          </div>
          <InputField
            type="text"
            label="Name"
            placeholder={tweetHeaderDefaults.name}
            tooltip={`${tweet.name ? tweet.name.length : 0}/50 characters`}
            value={tweet.name}
            onChange={(e) =>
              updateTweet({
                name: e.target.value,
              })
            }
            inputClass="text-white" // Set text color to white
          />
          <InputField
            type="text"
            label="Username"
            placeholder={tweetHeaderDefaults.username}
            tooltip={`${
              tweet.username ? tweet.username.length : 0
            }/15 characters`}
            value={tweet.username}
            onChange={(e) =>
              updateTweet({
                username: e.target.value,
              })
            }
            inputClass="text-white" // Set text color to white
          />
          <label className="flex items-center gap-2">
            <InputField
              type="checkbox"
              checked={tweet.verified}
              onChange={() => updateTweet({ verified: !tweet.verified })}
            />
            <span>Show Verified Badge</span>
          </label>
          <div className="custom-textarea-wrapper">
            <TextareaField
              label="What's happening?"
              placeholder={tweetBodyDefaults.body}
              tooltip={`${tweet.body ? tweet.body.length : 0}/280 characters`}
              value={tweet.body}
              onChange={(e) =>
                updateTweet({
                  body: e.target.value,
                })
              }
            />
          </div>

          <div className="flex items-center gap-4">
            <InputField
              id="tweet-image"
              type="file"
              accept="image/*"
              inputClass="hidden"
              onChange={(e) => handleImageChange("image", e)}
            >
              <label
                htmlFor="tweet-image"
                className="cursor-pointer rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-cyan-400"
              >
                Tweet Image
              </label>
            </InputField>
            {tweet.image && (
              <button
                className="text-xs text-red-500 hover:underline"
                onClick={() => updateTweet({ image: "" })}
              >
                Remove
              </button>
            )}
          </div>
          <InputField
            type="text"
            label="Publish Time"
            placeholder={tweetBodyDefaults.publishTime}
            tooltip="hh:mm AM/PM format"
            value={tweet.publishTime}
            onChange={(e) =>
              updateTweet({
                publishTime: e.target.value,
              })
            }
            inputClass="text-white" // Set text color to white
          />
          <InputField
            type="text"
            label="Publish Date"
            placeholder={tweetBodyDefaults.publishDate}
            tooltip="mmm dd, yyyy format"
            value={tweet.publishDate}
            onChange={(e) =>
              updateTweet({
                publishDate: e.target.value,
              })
            }
            inputClass="text-white" // Set text color to white
          />
        </div>
      )}

      {activeTab === "stats" && (
        <div className="flex flex-wrap gap-4">
          {(
            [
              "repliesCount",
              "repostsCount",
              "likesCount",
              "bookmarksCount",
            ] as const
          ).map((field) => (
            <InputField
              key={field}
              type="number"
              label={field.replace("Count", "")}
              placeholder="0"
              containerClass="w-1/2"
              value={tweet[field]}
              onChange={(e) =>
                updateTweet({
                  [field]: parseInt(e.target.value),
                })
              }
              inputClass="text-white" // Set text color to white
              min={0}
            />
          ))}
          <InputField
            type="number"
            label="Views Count"
            placeholder="0"
            containerClass="w-full"
            value={tweet.viewsCount}
            onChange={(e) =>
              updateTweet({
                viewsCount: parseInt(e.target.value),
              })
            }
            inputClass="text-white" // Set text color to white
            min={0}
          />
        </div>
      )}
    </div>
  );
};

export default TweetForm;
