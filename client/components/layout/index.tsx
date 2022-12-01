import NextNProgress from "nextjs-progressbar";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container mx-auto font-sans">
      <NextNProgress color="#53BD95" />
      <Navbar />
      <main className="pb-32">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
