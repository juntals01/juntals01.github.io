import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title:
    "FreeVPSsetup offers tutorial on Free Virtual Private server offered by Oracle.",
  description:
    "FreeVPSsetup is a content driven website that offers tutorial mainly on Free Virtual Private server offered by Oracle.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <GoogleAnalytics gaId="G-ZQ6ZBR71CQ" />
      </head>

      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
