import { getProject, getProjects } from "../../../sanity/lib/projects";
import { Project } from "../../typing";
import { BsArrowRight } from "react-icons/bs";
import PortableText from "react-portable-text";
import Image from "next/image";
import { GrGithub } from "react-icons/gr";
import { urlForImage } from "../../../sanity/lib/image";
import Arrow from "../../../components/Arrow";

const serializers = {
  h1: (props: any) => (
    <h1 className="my-5 text-2xl font-bold sm:text-3xl" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="my-5 text-xl font-bold sm:text-2xl" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="my-5 text-lg font-bold sm:text-xl" {...props} />
  ),
  normal: (props: any) => <p className="my-5 text-lg" {...props} />,
  link: (props: any) => (
    <a className="text-blue-500 underline hover:text-accent" {...props} />
  ),
  underline: (props: any) => (
    <span className="border-b-2 border-gray-800" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 text-lg italic"
      {...props}
    />
  ),
};

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project: { slug: any }) => ({
    slug: project.slug.current,
  }));
}

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
        <div className="md:col-span-10 flex flex-col justify-center md:border-r-2 border-b-2 p-4 md:p-10 lg:p-12 xl:p-16 border-black dark:border-white">
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
          <BsArrowRight className="text-4xl md:text-5xl lg:text-6xl font-bold group-hover:translate-x-4 transition-all duration-200 ease-in-out" />
        </a>
      </div>
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden flex bg-accent dark:bg-secondary border-b-2 border-black dark:border-white justify-between items-center p-4 group hover:cursor-pointer"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold col-span-1 flex justify-center items-center">
            Live Demo
          </h1>
          <BsArrowRight className="text-4xl md:text-5xl lg:text-6xl font-bold col-span-1 flex justify-center items-center group-hover:translate-x-2 transition-all duration-200 ease-in-out" />
        </a>
      )}
      <Image
        src={urlForImage(project.mainImage).url() || ""}
        alt={project.title}
        width={1600}
        height={1400}
        className="w-full overflow-hidden max-w-4xl mx-auto md:px-10 md:pt-10"
        priority
      />

      <div className="flex flex-col max-w-4xl mx-auto px-4 md:px-10 ">
        <div className="flex flex-col pt-4 md:pt-10">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Description</h2>
            <div className="flex flex-col">
              <PortableText
                content={project.body}
                serializers={serializers}
                className="prose dark:prose-dark"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto py-4 md:py-10">
          <h2 className="text-2xl font-bold">Resources</h2>
          <div className="flex flex-col">
            <PortableText
              content={project.resources}
              serializers={serializers}
              className="prose dark:prose-dark"
            />
            {project.github && (
              <GrGithub className="text-4xl md:text-5xl lg:text-6xl font-bold col-span-1 flex justify-center items-center dark:text-white hover:cursor-pointer hover:text-gray-500 transition-all duration-200 ease-in-out dark:hover:text-gray-400 mt-4 mb-8" />
            )}
          </div>
        </div>
      </div>
      {/* <a
          href={project.github}
          className="flex max-w-3xl mx-auto px-4 md:px-8 lg:px-10 xl:px-12"
        >
          <GrGithub className="text-4xl md:text-5xl lg:text-6xl font-bold col-span-1 flex justify-center items-center dark:text-white" />
        </a> */}
    </main>
  );
}
