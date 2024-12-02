import { cn } from "@/utils";

const Navbar = () => {
  return (
    <nav
      className={cn(
        "flex h-14 w-full items-center justify-between bg-gray-900 px-4 shadow-lg"
      )}
    >
      {/* Logo */}
      <div
        className={cn(
          "select-none text-center text-2xl font-extrabold md:text-3xl",
          "bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent",
          "transition-transform duration-300 ease-in-out hover:scale-105"
        )}
      >
        <span>Fake Tweet :) </span>
      </div>
      {/* Contact Button */}
      <div className="flex items-center gap-4">
        <a
          target="_blank"
          href="https://linkedin.com/in/srijanpokhrel"
          rel="noopener noreferrer"
          className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-lg transition duration-300 ease-in-out hover:bg-gray-700 hover:underline"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
