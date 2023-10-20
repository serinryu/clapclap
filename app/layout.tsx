import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clapclap - AI-Powered Self-Inventing Platform",
  openGraph: {
    title: "Clapclap - AI-Powered Self-Inventing Platform",
    description:
      "Clapclap is an AI-powered Self-Inventing platform that helps you visualize your dream future.",
    images: [
      {
        url: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clapclap - AI-Powered Self-Inventing Platform",
    description:
      "Clapclap is an AI-powered Self-Inventing platform that helps you visualize your dream future.",
    images: [""],
    creator: "@serinryu",
  },
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
