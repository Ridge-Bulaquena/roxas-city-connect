import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import Chatbot from "./chatbot";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>{children}</main>
      <Footer />
      <Chatbot />
    </div>
  );
}
