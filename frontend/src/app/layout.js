import { Inter } from "next/font/google";
import "./globals.css";
import MuiThemeProvider from "../components/MuiThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", 
  variable: "--font-inter", 
});

export const metadata = {
  title: "The Services",
  description: "Offering a wide range of services to meet your needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}
