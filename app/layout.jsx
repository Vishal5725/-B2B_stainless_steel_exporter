import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const webUrl = process.env.WEB_URL || "https://your-domain.com";

export const metadata = {
  metadataBase: new URL(webUrl),

  title: {
    default:
      "Stainless Steel Flanges Exporter | Saudi Arabia, UAE & Middle East",
    template: "%s | Bhansali Stainless",
  },

  description:
    "Stainless steel flanges in 304, 316 and 316L grades for industrial buyers in Saudi Arabia, UAE and the Middle East.",

  keywords: [
    "stainless steel flanges",
    "stainless steel flange supplier",
    "SS flanges exporter",
    "304 stainless steel flanges",
    "316 stainless steel flanges",
    "316L stainless steel flanges",
    "stainless steel flanges Saudi Arabia",
    "stainless steel flanges UAE",
    "stainless steel flanges Middle East",
  ],

  authors: [
    {
      name: "Bhansali Stainless",
    },
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Stainless Steel Flanges Exporter | Saudi Arabia, UAE & Middle East",
    description:
      "304, 316 and 316L stainless steel flanges for industrial buyers across Saudi Arabia, UAE and the Middle East.",
    type: "website",
    locale: "en_US",
    siteName: "Bhansali Stainless",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Stainless Steel Flanges Exporter | Saudi Arabia, UAE & Middle East",
    description:
      "304, 316 and 316L stainless steel flanges for industrial buyers across the Middle East.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>

      {process.env.GTM_ID && (
        <GoogleTagManager gtmId={process.env.GTM_ID} />
      )}
    </html>
  );
}