import { useTheme } from "next-themes";
import Image from "next/image";

export default function Header() {
  const { theme, setTheme } = useTheme();
  let modeSrc = theme === "dark" ? "/sun.svg" : "/moon.svg";

  return (
    <header className="grid grid-cols-3 md:grid-cols-6 grid-rows-2 md:grid-rows-1 sticky top-0 z-50">
      <div className="col-span-2 md:col-span-1 row-span-1 flex items-center justify-center border-r border-b border-black dark:border-white p-2 md:p-4">
        <p className="text-lg">Cody Lambert</p>
      </div>
      <div className="hidden md:block col-span-4 row-span-1 flex items-center justify-center border-b border-r border-black dark:border-white p-2 md:p-4">
        <div className="flex flex-row justify-center">
          <p className="text-lg mx-6 hover:underline">About</p>
          <p className="text-lg mx-6 hover:underline">Blog</p>
          <p className="text-lg mx-6 hover:underline">Contact</p>
        </div>
      </div>
      <div
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="col-span-1 row-span-1 flex items-center justify-center border-b border-black dark:border-white p-2 md:p-4 hover:cursor-pointer"
      >
        <Image src={modeSrc} width={32} height={32} alt={"mode"} />
      </div>
      <div className="md:hidden col-span-1 flex items-center justify-center border-r border-b border-black dark:border-white p-2 md:p-4">
        <p className="text-lg">About</p>
      </div>
      <div className="md:hidden col-span-1 flex items-center justify-center border-b border-r border-black dark:border-white p-2 md:p-4">
        <p className="text-lg">Blog</p>
      </div>
      <div className="md:hidden col-span-1 flex items-center justify-center border-b p-2 border-black dark:border-white md:p-4">
        <p className="text-lg">Contact</p>
      </div>
    </header>
  );
}
