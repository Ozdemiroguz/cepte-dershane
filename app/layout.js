// ** Nextjs Imports
import { Gemunu_Libre } from "next/font/google";

// ** CSS Imports
import "./globals.css";

const inter = Gemunu_Libre({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
