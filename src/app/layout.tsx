"use client";



import "normalize.css/normalize.css";
import "./globals.scss";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
import AOS from 'aos';
import { useEffect } from "react";

import "aos/dist/aos.css";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-montserrat',
});

const opensans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-opensans',
});




export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
      <html
        lang="en"
        className={`${montserrat.variable} ${opensans.variable}`}
      >
        <body>
          <div>{children}</div>
        </body>
      </html>
    </>
  );
}
