import { Alice, Open_Sans } from "next/font/google";
import "@/sass/all.scss";
import SmoothScrolling from "@/components/scroll/smoothScrolling";
import JsonldMetaData from "@/components/metaData/jsonldmetadata";
import meta from "../../public/data/meta-home.json";
import Nav from "@/components/mainLayoutComponents/nav/nav";
import CookieConsentBanner from "@/components/cookieConsent/cookieConsent";
import Script from "next/script";
import ScrollTop from "@/components/scroll/scrollToTop";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Alice({
  weight: "400",
  variable: "--font-main",
  subsets: ["latin"],
});

const paragraph = Open_Sans({
  weight: ["300", "400"],
  variable: "--font-paragraph",
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
      <body className={`${inter.variable} ${paragraph.variable}`}>
        <CookieConsentBanner />
        <Nav />
        <SmoothScrolling>{children}</SmoothScrolling>

        <ScrollTop />
      </body>

      <Script
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "d99e7b32f58e46ac954a5c9f23899a18"}'
      />
    </html>
  );
}
