import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNavbar from "./components/HeaderNavbar";
import NavbarWeb from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI FASHION | AI-Powered Fashion Designer Platform in Australia",
  description:
    "AI FASHION specializes in Generative Design, AI Size & Style Engine,Demand Forecasting, Funds Management, Virtual Try-On and 3D Body Scanning across Australia.",
  keywords:
    "Generative Design, AI Size & Style Engine,Demand Forecasting, Funds Management, Virtual Try-On and 3D Body Scanning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderNavbar />
        <NavbarWeb />
        {children}
        <Footer />
      </body>
    </html>
  );
}
