import { Inter } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
=======
import Navbar from "../components/Navbar";
>>>>>>> 35a076a97dba18968b00963ba025be6d7e90b0aa

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Film List",
<<<<<<< HEAD
  description: "Generated by create next app",
=======
  description: "Nonton Anime lah kuy..",
>>>>>>> 35a076a97dba18968b00963ba025be6d7e90b0aa
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={inter.className}>
        <div>
          <h1>Ini ada di Layout, bisa di jadikan untuk navbar</h1>
        </div>
=======
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
>>>>>>> 35a076a97dba18968b00963ba025be6d7e90b0aa
        {children}
      </body>
    </html>
  );
}
