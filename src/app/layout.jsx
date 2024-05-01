import { Public_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const public_sans = Public_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Project Pulse - Streamlining Projects, Simplifying Success",
  description: "A streamlined platform for managing projects and tasks, designed to simplify success.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={public_sans.className}>
        <ReactQueryProvider>
          <Toaster />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
