export type IconProps = {
  color?: string;
  height?: number;
  width?: number;
  className?: string; // Added className for styling flexibility
};

const VerifiedIcon = (props: IconProps) => {
  const { color = "#1da1f2", height = 18, width = 18, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width={width}
      height={height}
      className={className}
    >
      <g>
        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6..."></path>
      </g>
    </svg>
  );
};

const CommentIcon = (props: IconProps) => {
  const { color = "#71767b", height = 22.5, width = 22.5, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width={width}
      height={height}
      className={className}
    >
      <g>
        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c..."></path>
      </g>
    </svg>
  );
};

const RepostIcon = (props: IconProps) => {
  const { color = "#71767b", height = 22.5, width = 22.5, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width={width}
      height={height}
      className={className}
    >
      <g>
        <path d="M4.5 3.88l4.432 4.14-1.364 1.46..."></path>
      </g>
    </svg>
  );
};

const LikeIcon = (props: IconProps) => {
  const { color = "#71767b", height = 22.5, width = 22.5, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width={width}
      height={height}
      className={className}
    >
      <g>
        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16..."></path>
      </g>
    </svg>
  );
};

const BookmarkIcon = (props: IconProps) => {
  const { color = "#71767b", height = 22.5, width = 22.5, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width={width}
      height={height}
      className={className}
    >
      <g>
        <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20..."></path>
      </g>
    </svg>
  );
};

const ShareIcon = (props: IconProps) => {
  const { color = "#71767b", height = 22.5, width = 22.5, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width={width}
      height={height}
      className={className}
    >
      <g>
        <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V..."></path>
      </g>
    </svg>
  );
};

export {
  VerifiedIcon,
  CommentIcon,
  RepostIcon,
  LikeIcon,
  BookmarkIcon,
  ShareIcon,
};
