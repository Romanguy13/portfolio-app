"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GrLinkNext } from "react-icons/gr";

export default function Arrow() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <>
      {theme === "dark" ? (
        <GrLinkNext className="text-4xl md:text-5xl lg:text-4xl font-bold col-span-1 flex justify-center items-center group-hover:translate-x-4 transition-all duration-500 ease-in-out dark:text-white" />
      ) : (
        <GrLinkNext className="text-4xl md:text-5xl lg:text-4xl font-bold col-span-1 flex justify-center items-center group-hover:translate-x-4 transition-all duration-500 ease-in-out text-black" />
      )}
    </>
  );
}
