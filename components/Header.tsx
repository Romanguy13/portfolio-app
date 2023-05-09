import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="grid grid-cols-3 md:grid-cols-6 grid-rows-2 md:grid-rows-1 sticky top-0 z-50 bg-highlight dark:bg-primary">
      <Link
        href="/"
        className="col-span-2 md:col-span-2 lg:col-span-1 row-span-1 flex items-center justify-center border-r-2 border-b-2 border-black dark:border-white p-2 md:p-4 hover:bg-primary dark:hover:bg-highlight hover:text-highlight dark:hover:text-primary"
      >
        <p className="text-lg md:text-xl">Cody Lambert</p>
      </Link>
      <div className="hidden md:block col-span-3 lg:col-span-4 row-span-1 flex items-center justify-center border-b-2 border-r-2 border-black dark:border-white p-2 md:p-4">
        <div className="flex flex-row justify-center">
          <p className="text-lg md:text-xl mx-6 hover:underline hover:cursor-pointer">
            About
          </p>
          <p className="text-lg md:text-xl mx-6 hover:underline hover:cursor-pointer">
            Blog
          </p>
          <p className="text-lg md:text-xl mx-6 hover:underline hover:cursor-pointer">
            Resume
          </p>
        </div>
      </div>
      <div
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="col-span-1 row-span-1 flex items-center justify-center border-b-2 border-black dark:border-white p-2 md:p-4 hover:cursor-pointer"
      >
        {theme === "dark" ? (
          <FiSun className="text-2xl text-highlight" />
        ) : (
          <FiMoon className="text-2xl text-secondary" />
        )}
      </div>
      <div className="md:hidden col-span-1 flex items-center justify-center border-r-2 border-b-2 border-black dark:border-white p-2 md:p-4 hover:cursor-pointer">
        <p className="text-lg md:text-xl">About</p>
      </div>
      <div className="md:hidden col-span-1 flex items-center justify-center border-b-2 border-r-2 border-black dark:border-white p-2 md:p-4 hover:cursor-pointer">
        <p className="text-lg md:text-xl">Blog</p>
      </div>
      <div className="md:hidden col-span-1 flex items-center justify-center border-b-2 p-2 border-black dark:border-white md:p-4 hover:cursor-pointer">
        <p className="text-lg md:text-xl">Resume</p>
      </div>
    </header>
  );
}
