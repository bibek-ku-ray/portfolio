import { Zain} from "next/font/google";
import "./globals.css";

const zain = Zain({
  variable: "--font-zain",
  weight: ["200", "300", "400", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Bibek Ray",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${zain.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
