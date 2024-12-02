import Image from "next/image";
import { useTweet } from "@/hooks/useTweet";

import { BsThreeDots } from "react-icons/bs";
import { VerifiedIcon } from "@/components/Icons";

import { tweetHeaderDefaults } from "@/utils/constants";

export interface TweetHeaderProps {
  avatar?: string;
  name?: string;
  username?: string;
  verified?: boolean;
}

const TweetHeader = () => {
  const { tweet } = useTweet();
  const { avatar, name, username, verified }: TweetHeaderProps = tweet;

  return (
    <div className="mb-3 flex justify-between">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={avatar ? avatar : tweetHeaderDefaults.avatar}
            alt="avatar"
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-base font-bold text-white">
              {name ? name : tweetHeaderDefaults.name}
            </span>
            {verified && (
              <span className="h-5 w-5 text-blue-500">
                <VerifiedIcon height={20} width={20} color="#1da1f2" />
              </span>
            )}
          </div>
          <span className="text-sm text-gray-400">
            @{username ? username : tweetHeaderDefaults.username}
          </span>
        </div>
      </div>
      <BsThreeDots className="cursor-pointer text-gray-400 hover:text-gray-300" />
    </div>
  );
};

export default TweetHeader;
