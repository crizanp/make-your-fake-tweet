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
  const { tweet } = useTweet();
  const { body, image, viewsCount, publishTime, publishDate }: TweetBodyProps =
    tweet;

  const formattedViewsCount = nFormatter(viewsCount!);

  return (
    <div className="flex flex-col">
      {/* Tweet Text */}
      <div className="mb-3 text-lg font-normal text-white">
        {body || tweetBodyDefaults.body}
      </div>

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
