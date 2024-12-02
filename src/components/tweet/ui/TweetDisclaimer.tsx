import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const TweetDisclaimer = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const toggleDisclaimer = () => {
    setShowDisclaimer(!showDisclaimer);
  };

  return (
    <div className="relative flex items-center">
      {/* Icon with hover/click functionality */}
      <span
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white"
        onClick={toggleDisclaimer}
        onMouseEnter={() => setShowDisclaimer(true)}
        onMouseLeave={() => setShowDisclaimer(false)}
      >
        <AiOutlineInfoCircle size={20} />
      </span>

      {/* Tooltip-style Disclaimer */}
      {showDisclaimer && (
        <div className="absolute left-12 top-0 z-10 w-64 rounded-lg bg-gray-800 p-4 text-gray-300 shadow-md">
          <p className="text-sm">
            <strong className="text-white">Note:</strong> This tool is designed
            for creative expression and mock-up generation. Avoid sharing
            generated tweets in ways that could mislead, harm, or violate
            policies. Your use of this tool should adhere to ethical and legal
            standards.
          </p>
        </div>
      )}
    </div>
  );
};

export default TweetDisclaimer;
