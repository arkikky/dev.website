import "@styles/globals.css";

export const metadata = {
  metadataBase: new URL("https://acme.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images: "/og-image.png",
  },
};

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
