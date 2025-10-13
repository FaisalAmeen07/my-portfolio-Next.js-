import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Faisal Amin",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full relative bg-black text-white overflow-x-hidden`}
      >
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 5px,  rgba(244, 98, 58, 0.15) 5px,
  rgba(244, 98, 58, 0.15) 6px, transparent 6px, transparent 15px),
              repeating-linear-gradient(90deg, transparent, transparent 5px,  rgba(244, 98, 58, 0.15) 5px,
  rgba(244, 98, 58, 0.15) 6px, transparent 6px, transparent 15px),
              repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(244, 98, 58, 0.15) 5px,
  rgba(244, 98, 58, 0.15) 6px, transparent 11px, transparent 30px),
              repeating-linear-gradient(90deg, transparent, transparent 10px,  rgba(244, 98, 58, 0.15) 5px, transparent 11px, transparent 30px)
            `,
          }}
        />

        <Header />
        <main className="relative z-10 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
