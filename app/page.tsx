import Image from "next/image";
import Header from "../components/Header";
import { getProjects } from "../sanity/lib/projects";
import Link from "next/link";
import { Project } from "./typing";
import { BiLinkExternal } from "react-icons/bi";

export const metadata = {
  title: "Cody Lambert: Software Engineer",
  description:
    "Cody Lambert is a software engineer based in the United States.",
};

export default async function Home() {
  const projects: Project[] = await getProjects();
  return (
    <main className="flex flex-col flex-1">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-10 flex flex-col justify-center md:border-r-2 border-b-2 p-4 p-8 md:p-12 lg:p-16 xl:p-24 border-black dark:border-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Full Stack Web Developer
          </h1>
          <p className="text-xl md:text-2xl mt-4">
            I&apos;m a software engineer based in the California. I specialize
            in building high-quality websites and applications with tools like
            React.js, TypeScript, and Next.js.
          </p>
        </div>
        <div className="md:col-span-2 hidden md:block border-b-2 border-black dark:border-white bg-accent dark:bg-secondary"></div>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-6">
        <div className="md:col-span-3 col-span-1 flex flex-col md:border-r-2 p-4 p-8 md:p-12 lg:p-16 xl:p-24 border-black dark:border-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Projects
          </h1>
          {projects.map((project) => (
            <Link
              href={`/project/${project.slug.current}`}
              key={project.slug.current}
              className="flex items-center group w-fit justify-between"
            >
              <p className="text-md md:text-lg cursor-pointer underline group-hover:text-accent mr-4 mt-4">
                {project.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
