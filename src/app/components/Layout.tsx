import Head from "next/head";
// Header from "./Header";
import Footer from "./Footer";

import Navbar from "./Navbar";


interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title = "School of Satoshi", description = "Empowering local Bitcoin education" }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {/* <Header /> */}
      <Navbar/>
    
      <main className="min-h-screen bg-gray-100">{children}</main>
      <Footer />
    </div>
  );
}