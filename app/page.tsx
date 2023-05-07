import Image from "next/image";
import Header from "../components/Header";

export const metadata = {
  title: "Cody Lambert: Software Engineer",
  description:
    "Cody Lambert is a software engineer based in the United States.",
};

export default function Home() {
  return (
    <main>
      <div className="grow grid grid-cols-1 md:grid-cols-6">
        <div className="md:col-span-5 flex flex-col justify-center md:border-r-2 border-b-2 p-4 p-8 md:p-12 lg:p-16 xl:p-24 border-black dark:border-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Full Stack Web Developer
          </h1>
          <p className="text-xl md:text-xl mt-4">
            I&apos;m a software engineer based in the United States. I
            specialize in building high-quality websites and applications with
            tools like React.js, TypeScript, and Next.js.
          </p>
        </div>
        <div className="md:col-span-1 hidden md:block border-b-2 border-black dark:border-white bg-accent dark:bg-secondary"></div>
      </div>
    </main>
  );
}
