import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Spark Consulting 835 906 272",
    template: "%s | Spark Consulting 835 906 272",
  },
  description: "Practical consulting for modern teams.",
  openGraph: {
    title: "Spark Consulting 835 906 272",
    description: "Practical consulting for modern teams.",
    type: "website",
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg%20xmlns='http%3A//www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='%232563eb'%3E%3Cpath%20d='M12%202%209.5%208.5%203%2011l6.5%202.5L12%2020l2.5-6.5L21%2011l-6.5-2.5z'/%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className="min-h-screen antialiased text-foreground bg-gradient-to-b from-purple-100 to-white dark:from-purple-900 dark:to-black"
      >
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch{}",
          }}
        />
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
