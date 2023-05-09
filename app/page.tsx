import { getProjects } from "../sanity/lib/projects";
import { getRecentPosts } from "../sanity/lib/posts";
import Link from "next/link";
import { Project } from "./typing";
import { Post } from "./typing";

export const metadata = {
  title: "Cody Lambert: Software Engineer",
  description:
    "Cody Lambert is a software engineer based in the United States.",
};

export default async function Home() {
  const projects: Project[] = await getProjects();
  const recentPosts: Post[] = await getRecentPosts();
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
      <div className="md:flex-1 grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 md:col-span-5 border-black dark:border-white border-b-2 md:border-b-0 md:border-r-2">
          <div className="flex flex-col p-4 p-8 md:p-12 lg:p-16 xl:p-24 border-black dark:border-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Projects
            </h1>
            {projects.map((project) => (
              <Link
                href={`/project/${project.slug.current}`}
                key={project.slug.current}
                className="flex items-center group w-fit justify-between"
              >
                <p className="text-lg cursor-pointer underline group-hover:text-accent mr-4 mt-4">
                  {project.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex-1 col-span-1 md:col-span-7 border-black dark:border-white">
          <div className="flex flex-col p-4 border-black dark:border-white p-4 p-8 md:p-12 lg:p-16 xl:p-24">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Recent Thoughts
            </h1>
            {recentPosts.map((post) => (
              <Link
                href={`/post/${post.slug.current}`}
                key={post.slug.current}
                className="flex items-center group w-fit justify-between"
              >
                <p className="text-lg cursor-pointer underline group-hover:text-accent mr-4 mt-4">
                  {post.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
