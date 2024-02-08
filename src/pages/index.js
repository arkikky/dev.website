import getConfig from "next/config";
import Head from "next/head";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @layout
import NavbarTop from "@layouts/Navbar/NavbarTop";
import Header from "@layouts/Header";
import StartSpeakers from "@layouts/Speakers/start";
import EndSpeakers from "@layouts/Speakers/end";
import StartPartners from "@layouts/Partners/start";
import FAQ from "@layouts/FAQ";
import FooterBanner from "@layouts/Banner/FooterBanner";
import Footer from "@layouts/Footer";

const App = () => {
  return (
    <>
      {/* @head */}
      <Head>
        <title>{`${publicRuntimeConfig.siteTitle}`}</title>
        <meta name="title" content={`${publicRuntimeConfig.siteTitle}`} />
        <meta
          name="description"
          content={
            "Coinfest immerses you directly into adoption, innovation, and emerging markets in Asia. Join the immersive Web3 festival! Bali - August 2024"
          }
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="og:description"
          content={
            "Coinfest immerses you directly into adoption, innovation, and emerging markets in Asia. Join the immersive Web3 festival! Bali - August 2024"
          }
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="twitter:title"
          content={`${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="twitter:description"
          content={
            "Coinfest immerses you directly into adoption, innovation, and emerging markets in Asia. Join the immersive Web3 festival! Bali - August 2024"
          }
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
      </Head>

      {/* @navbar-top */}
      <NavbarTop />

      <main className="ca2024Main ca2024MainMandatory approved overflow-x-hidden">
        {/* @header */}
        {/* <Header /> */}

        <section className="snap-start snap-always h-fixScreen min-h-fixScreen">
          <h1>awdawdaw</h1>
        </section>

        {/* @speakers (Start) */}
        <StartSpeakers />

        {/* @speakers (End) */}
        <EndSpeakers />

        {/* @partners (Start) */}
        <StartPartners />

        <section className="snap-start snap-always h-auto min-h-fixScreen">
          {/* @faq */}
          <FAQ />

          {/* @footer (banner) */}
          <FooterBanner />

          {/* @footer */}
          <Footer />
        </section>
      </main>
    </>
  );
};

export default App;
