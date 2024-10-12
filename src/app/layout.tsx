import { Alice } from "next/font/google";
import "@/sass/all.scss";
import SmoothScrolling from "@/components/scroll/smoothScrolling";
import JsonldMetaData from "@/components/metaData/jsonldmetadata";
import meta from "../../public/data/meta-home.json";
import Nav from "@/components/mainLayoutComponents/nav/nav";
import CookieConsentBanner from "@/components/cookieConsent/cookieConsent";

import ScrollTop from "@/components/scroll/scrollToTop";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Alice({
  weight: "400",
  variable: "--font-main",
  subsets: ["latin"],
});

/** FUNZIONE NEXT PER INSERIRE I METADATA NELL' HEAD */
export async function generateMetadata() {
  const data = meta["it"].metaHtml;
  return data;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        {/* COMPONENTE PER INSERIRE I META JSONLD PER GOOGLE  */}
        <JsonldMetaData metadata={meta} />
        <link rel="icon" href="/image/favicon.ico" />
      </head>
      <body className={inter.variable}>
        <CookieConsentBanner />
        <Nav />
        <SmoothScrolling>{children}</SmoothScrolling>

        <ScrollTop />
      </body>
      <GoogleAnalytics gaId="UA-77301206-1" />
    </html>
  );
}
