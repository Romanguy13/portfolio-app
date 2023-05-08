import Link from "next/link";
import { getProject } from "../../../sanity/lib/projects";
import { Project } from "../../typing";
import { GrLinkNext } from "react-icons/gr";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project: Project = await getProject(params.slug);
  return (
    <main>
      <div className="grow grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-10 flex flex-col justify-center md:border-r-2 border-b-2 p-4 p-8 md:p-10 lg:p-12 xl:p-16 border-black dark:border-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            {project.title}
          </h1>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-2 hidden md:block border-b-2 border-black dark:border-white bg-accent dark:bg-secondary group hover:cursor-pointer"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Live Demo
          </h1>
          <GrLinkNext className="text-4xl md:text-5xl lg:text-6xl font-bold group-hover:translate-x-4 transition-all duration-500 ease-in-out" />
        </a>
      </div>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden flex bg-accent dark:bg-secondary border-b-2 border-black dark:border-white justify-between items-center p-8"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold col-span-1 flex justify-center items-center">
          Live Demo
        </h1>
        <GrLinkNext className="text-4xl md:text-5xl lg:text-6xl font-bold col-span-1 flex justify-center items-center dark:text-white" />
      </a>

      <div className="flex-1">
        <div className="flex flex-col max-w-3xl mx-auto md:mt-8">
          <Image
            src={urlForImage(project.mainImage).url()!}
            alt={project.title}
            width={1600}
            height={1400}
            className="w-full overflow-hidden"
          />
        </div>
      </div>
    </main>
  );
}
