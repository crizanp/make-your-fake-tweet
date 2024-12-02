const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center bg-gray-800 p-6 text-white">
      <div className="mb-2 flex items-center gap-2">
        <span className="text-lg font-bold text-cyan-500">Cizan</span>
        <span className="text-sm text-gray-400">© 2023</span>
      </div>
      <p className="text-xs text-gray-400">
        Crafted with 💖 by
        <a
          target="_blank"
          href="https://github.com/crizanp"
          rel="noopener noreferrer"
          className="ml-1 text-cyan-400 hover:text-cyan-300 hover:underline"
        >
          @crizanp
        </a>
      </p>
    </footer>
  );
};

export default Footer;
