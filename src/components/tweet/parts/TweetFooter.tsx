import { useTweet } from "@/hooks/useTweet";

import {
  CommentIcon,
  RepostIcon,
  LikeIcon,
  BookmarkIcon,
  ShareIcon,
} from "@/components/Icons";
import TweetStat from "@/components/tweet/ui/TweetStat";

export interface TweetFooterProps {
  repliesCount?: number;
  repostsCount?: number;
  likesCount?: number;
  bookmarksCount?: number;
}

const TweetFooter = () => {
  const { tweet } = useTweet();
  const {
    repliesCount = 0,
    repostsCount = 0,
    likesCount = 0,
    bookmarksCount = 0,
  }: TweetFooterProps = tweet;

  return (
    <div className="mt-4 flex justify-between text-gray-400">
      <TweetStat
        icon={
          <div className="h-5 w-5">
            <CommentIcon height={20} width={20} color="#71767b" />
          </div>
        }
        count={repliesCount}
      />
      <TweetStat
        icon={
          <div className="h-5 w-5">
            <RepostIcon height={20} width={20} color="#71767b" />
          </div>
        }
        count={repostsCount}
      />
      <TweetStat
        icon={
          <div className="h-5 w-5">
            <LikeIcon height={20} width={20} color="#71767b" />
          </div>
        }
        count={likesCount}
      />
      <TweetStat
        icon={
          <div className="h-5 w-5">
            <BookmarkIcon height={20} width={20} color="#71767b" />
          </div>
        }
        count={bookmarksCount}
      />
      <div className="h-5 w-5">
        <ShareIcon height={20} width={20} color="#71767b" />
      </div>
    </div>
  );
};

export default TweetFooter;
