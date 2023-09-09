import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "./components/Common/Navbar";
import MobileNavbar from "./components/Common/MobileNavbar";
import Footer from "./components/Common/Footer";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Qube Next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth scroll-p-10">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <MobileNavbar />
        <Footer />
      </body>
    </html>
  );
}
