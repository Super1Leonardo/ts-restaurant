import type { Metadata } from "next";
import { Comfortaa, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Savory Delights",
  description: "Luxury restaurant with dark-theme interior",
  icons: {
    icon: "https://i.imgur.com/CkTF2DP.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={comfortaa.className + ' h-dvh' + ' items-stretch flex flex-col justify-between'}>
        <header className=" hidden lg:flex items-center justify-center ">
          <div className=" bg-slate-800  lg:flex mt-[2dvh] rounded-2xl w-[90dvw] flex items-center px-[2dvw] gap-[2dvw] h-[10dvh] ">
            <a href="/" className="font-semibold hover:underline text-3xl">
              <img alt="Home page" src="https://i.imgur.com/CkTF2DP.png" className=" hover-scale-130 rounded-xl " width={70}></img>
            </a>
            <a href="/bar" className="font-semibold hover:underline hover-scale-125 text-3xl">Bar</a> 
            <a href="/menu" className="font-semibold hover:underline hover-scale-125 text-3xl">Menu</a>  
            <a href="/about" className="font-semibold hover:underline hover-scale-125 text-3xl">About us</a> 
          </div>  
        </header>
        {children}

      </body>
    </html>
  );
}
