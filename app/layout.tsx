"use client";
import Header from "../components/Header";
import { Providers } from "./providers";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Cody Lambert",
//   description:
//     "Cody Lambert is a software engineer based in the United States.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
