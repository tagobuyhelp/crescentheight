import { Inter, Playfair_Display } from "next/font/google";
import "material-symbols/outlined.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Crescent Heights by Hospice Property Pvt. Ltd. — thoughtfully designed 1 BHK, 2 BHK and 3 BHK residences in Kolkata.",
  description:
    "Crescent Heights by Hospice Property Pvt. Ltd. — thoughtfully designed 1 BHK, 2 BHK and 3 BHK residences in Kolkata.",
  icons: {
    icon: "/assets/images/logos/CrescentHeightLogo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
