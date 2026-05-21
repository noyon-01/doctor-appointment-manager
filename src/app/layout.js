import { Outfit } from "next/font/google";
import Navber from "@/components/Navber";
import Footer from "@/components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "DocAppoint | Find Trusted Doctors Near You",
  description:
    "Easily book doctor appointments online with trusted healthcare professionals. Find specialists, schedule visits, and manage your healthcare anytime, anywhere.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-theme="light"
      className={`h-full antialiased`}
    >
      <body className={`${outfit.className} min-h-full flex flex-col`}>
        <Navber />
        <main className="">{children}</main>
        <ToastContainer position="top-center" />
        <Footer />
      </body>
    </html>
  );
}
