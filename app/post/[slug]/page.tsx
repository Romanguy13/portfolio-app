import PortableText from "react-portable-text";
import Image from "next/image";
import { getPost, getPosts } from "../../../sanity/lib/posts";
import { urlForImage } from "../../../sanity/lib/image";

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
  const posts = await getPosts();

  return posts.map((post: { slug: any }) => ({
    slug: post.slug.current,
  }));
}

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug);
  return (
    <main>
      <div className="flex flex-col max-w-4xl mx-auto pt-4 md:pt-10 lg:pt-12 xl:pt-16 px-4 md:px-0">
        {post.categories && (
          <div className="flex flex-row flex-wrap">
            {post.categories.map((category: string) => (
              <div
                key={category}
                className="bg-highlight dark:bg-secondary text-black dark:text-white px-4 py-2 mr-2 rounded-full border-2 border-black dark:border-white"
              >
                {category}
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-row flex-wrap justify-between items-end">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold py-4">
            {post.title}
          </h1>
          <p className="text-xl py-4">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      <Image
        src={urlForImage(post.mainImage).url() || ""}
        alt={post.title}
        width={1600}
        height={1400}
        className="w-full overflow-hidden max-w-4xl mx-auto"
        priority
      />
      <div className="flex flex-col max-w-4xl mx-auto pb-4 md:pb-10 lg:pb-12 xl:pb-16 px-4 md:px-0">
        <div className="flex flex-col pt-4 md:pt-10">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <PortableText
                content={post.body}
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
