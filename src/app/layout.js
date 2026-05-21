import { Outfit } from "next/font/google";
import Navber from "@/components/Navber";
import Footer from "@/components/Footer";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
        <Toaster position="top-center" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}
