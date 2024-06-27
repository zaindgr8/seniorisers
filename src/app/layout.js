import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

import { Inter_Tight } from "next/font/google";
import { AOSInit } from "./aoshook/aoshook";
import ImportBs from "./importBs";

const inter = Inter_Tight({ subsets: ["latin"] });
export const metadata = {
  title: "Senioriser",
  description: "Connects Communities with Real Estate Agents",
  icons: {
    icon: ["/home.png?v=4"],
    apple: ["/home.png?v4"],
    shortcut: ["/home.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>
        <ImportBs />
        <div>{children}</div>
      </body>
    </html>
  );
}
