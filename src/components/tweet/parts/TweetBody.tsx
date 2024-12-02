import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useTweet } from "@/hooks/useTweet";

import { nFormatter } from "@/utils";
import { tweetBodyDefaults } from "@/utils/constants";

export interface TweetBodyProps {
  body?: string;
  image?: string;
  viewsCount?: number;
  publishTime?: string;
  publishDate?: string;
}

const TweetBody = () => {
  const { tweet, updateTweet } = useTweet();
  const { body, image, viewsCount, publishTime, publishDate }: TweetBodyProps =
    tweet;

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isEditing, setIsEditing] = useState(false); // Toggle edit mode

  const formattedViewsCount = nFormatter(viewsCount!);

  // Handle new lines and auto-expand height
  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height to auto
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Adjust height to content
    }
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateTweet({ body: e.target.value });
    adjustTextareaHeight();
  };

  // Adjust height when editing mode starts
  useEffect(() => {
    if (isEditing) {
      adjustTextareaHeight();
    }
  }, [isEditing]);

  // Auto-expand on component mount for existing content
  useEffect(() => {
    if (textareaRef.current) {
      adjustTextareaHeight();
    }
  }, [body]);

  // Highlight hashtags
  const highlightHashtags = (text: string) => {
    return text.replace(/#(\w+)/g, '<span class="text-blue-500">#$1</span>');
  };

  return (
    <div className="flex flex-col">
      {/* Toggle between edit mode and display mode */}
      {isEditing ? (
        <textarea
          ref={textareaRef}
          value={body || tweetBodyDefaults.body}
          onChange={handleBodyChange}
          onBlur={() => setIsEditing(false)} // Exit edit mode on blur
          placeholder="What's happening?"
          rows={1}
          className="mb-3 w-full resize-none overflow-hidden border-none bg-transparent text-lg font-normal text-white outline-none focus:ring-0"
        />
      ) : (
        <div
          onClick={() => setIsEditing(true)} // Enter edit mode on click
          className="mb-3 w-full cursor-pointer whitespace-pre-wrap bg-transparent text-lg font-normal text-white outline-none"
          dangerouslySetInnerHTML={{
            __html: highlightHashtags(body || tweetBodyDefaults.body),
          }}
        ></div>
      )}

      {/* Optional Image */}
      {image && (
        <div className="max-h-[500px] overflow-hidden rounded-xl">
          <Image
            src={image}
            alt="Tweet Image"
            width={0}
            height={0}
            sizes="100%"
            className="w-full object-cover"
          />
        </div>
      )}

      {/* Timestamp and Views */}
      <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
        <time>
          {publishTime || tweetBodyDefaults.publishTime}
          {` · `}
          {publishDate || tweetBodyDefaults.publishDate}
        </time>
        {viewsCount !== undefined && (
          <>
            <span>·</span>
            <span>
              <span className="font-bold text-white">
                {formattedViewsCount}
              </span>
              <span className="ml-1 text-gray-400">
                {` View${viewsCount > 1 ? "s" : ""}`}
              </span>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default TweetBody;
