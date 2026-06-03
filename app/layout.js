import { Geist, Geist_Mono ,Orbitron,Rajdhani} from "next/font/google";
import FirstBridgeChatbot from "@/component/FirstBridgeChatbot";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["400","500","600","700"],
});
export const metadata = {
  title: "FirstBridge US | Professional Truck Dispatch Services Across USA",
  description: "FirstBridge US provides reliable truck dispatch services for owner-operators and fleets across the USA. Get high-paying loads, rate negotiation, broker communication, and 24/7 dispatch support to keep your trucks moving.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={orbitron.className} >
        <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />

        </head>
      <body className="min-h-full flex flex-col">{children}
      <FirstBridgeChatbot /> </body>
    </html>
  );
}
