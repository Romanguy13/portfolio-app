import Image from "next/image";
import Header from "../components/Header";

export const metadata = {
  title: "Cody Lambert: Software Engineer",
  description:
    "Cody Lambert is a software engineer based in the United States.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4 sm:p-8 md:p-12 lg:p-16"></main>
  );
}
