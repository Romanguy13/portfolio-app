"use client";
import Link from "next/link";
import { getProject } from "../../../sanity/lib/projects";
import { Project } from "../../typing";
import { GrLinkNext } from "react-icons/gr";
import PortableText from "react-portable-text";
import Image from "next/image";
import { GrGithub } from "react-icons/gr";
import { urlForImage } from "../../../sanity/lib/image";
import { use, useEffect, useState } from "react";

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

export default async function ProjectPage({ params }: any) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const slug = params.slug;
  const project: Project = await getProject(slug);
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
        className="md:hidden flex bg-accent dark:bg-secondary border-b-2 border-black dark:border-white justify-between items-center p-8 group hover:cursor-pointer"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold col-span-1 flex justify-center items-center">
          Live Demo
        </h1>
        <GrLinkNext className="text-5xl md:text-6xl lg:text-4xl font-bold col-span-1 flex justify-center items-center dark:text-white group-hover:translate-x-4 transition-all duration-500 ease-in-out" />
      </a>

      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col max-w-3xl lg:w-1/2 mx-auto md:p-8">
          <Image
            src={urlForImage(project.mainImage).url() || ""}
            alt={project.title}
            width={1600}
            height={1400}
            className="w-full overflow-hidden pb-4"
            priority
          />
          <div className="flex flex-col px-4 md:p-0">
            <h2 className="text-2xl font-bold">Resources</h2>
            <div className="flex flex-col">
              {project.github && (
                <GrGithub className="text-4xl md:text-5xl lg:text-6xl font-bold col-span-1 flex justify-center items-center dark:text-white hover:cursor-pointer hover:text-gray-500 transition-all duration-200 ease-in-out mt-4" />
              )}
              <PortableText
                content={project.resources}
                serializers={serializers}
                className="prose dark:prose-dark"
              />
            </div>
          </div>
        </div>
        {/* <a
          href={project.github}
          className="flex max-w-3xl mx-auto px-4 md:px-8 lg:px-10 xl:px-12"
        >
          <GrGithub className="text-4xl md:text-5xl lg:text-6xl font-bold col-span-1 flex justify-center items-center dark:text-white" />
        </a> */}
        <div className="flex flex-col max-w-3xl mx-auto p-4 md:p-8 lg:w-1/2">
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
      </div>
    </main>
  );
}
