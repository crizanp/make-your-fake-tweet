import { useTweet } from "@/hooks/useTweet";

import {
  CommentIcon,
  RepostIcon,
  LikeIcon,
  BookmarkIcon,
  ShareIcon,
} from "@/components/Icons";
import TweetStat from "@/components/tweet/ui/TweetStat";

import { cn } from "@/utils";

export interface TweetFooterProps {
  repliesCount?: number;
  repostsCount?: number;
  likesCount?: number;
  bookmarksCount?: number;
}

const TweetFooter = () => {
  const { tweet, theme } = useTweet();
  const {
    repliesCount,
    repostsCount,
    likesCount,
    bookmarksCount,
  }: TweetFooterProps = tweet;

  return (
    <div className="mt-4 flex justify-between text-gray-400">
      <TweetStat
        icon={<CommentIcon className="h-5 w-5" />}
        count={repliesCount}
      />
      <TweetStat
        icon={<RepostIcon className="h-5 w-5" />}
        count={repostsCount}
      />
      <TweetStat icon={<LikeIcon className="h-5 w-5" />} count={likesCount} />
      <TweetStat
        icon={<BookmarkIcon className="h-5 w-5" />}
        count={bookmarksCount}
      />
      <ShareIcon className="h-5 w-5" />
    </div>
  );
};

export default TweetFooter;
