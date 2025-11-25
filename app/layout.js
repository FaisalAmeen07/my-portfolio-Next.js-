import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer";
import { ThemeProvider } from "./component/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Faisal Amin Portfolio",
  description: "My portfolio",
   icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/logo.svg" sizes={25} />
      </head>
      <body
        className={`${inter.className} w-full relative overflow-x-hidden bg-[#faf9fb]`}
      >
         <ThemeProvider>
        <Header />
        <main className="relative z-10 pt-20">{children}</main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
