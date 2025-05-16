import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNavbar from "./components/HeaderNavbar";
import NavbarWeb from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI FASHION | Expert Property Development & Management in Australia",
  description:
    "AI FASHION specializes in town planning, project management, and construction, delivering high-performance commercial and residential spaces across Australia.",
  keywords:
    "Property Development, Project Management, Town Planning, Real Estate Sales, Construction, Investment, Melbourne, Thornhill Park, Craigieburn, Clyde Square, Wollert, Orrong Tower, Iramoo Waters",
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
