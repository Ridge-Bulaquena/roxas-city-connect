import { Header } from "./header";
import { Footer } from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-blue-50 to-white">
      <Header />
      <main className="flex-1 fade-in">
        {children}
      </main>
      <Footer />
    </div>
  );
}
