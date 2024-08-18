import React from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// @components
import PromoCodeCard from "@components/UI/Card/PromoCodeCard";

// @layout
import GuideLayout from "@layouts/GuideLayout";

// @get .config
const { publicRuntimeConfig } = getConfig();

const WeatherAttire = () => {

  return (
    <>
      <Head>
        <title>{`Getting to Coinfest Asia | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta name="title" content={`Getting to Coinfest Asia | ${publicRuntimeConfig.siteTitle}`} />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta property="og:title" content={`Getting to Coinfest Asia | ${publicRuntimeConfig.siteTitle}`} />
        <meta property="og:description" content={publicRuntimeConfig.siteDesc} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="twitter:title"
          content={`Page Not Found! | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="twitter:description"
          content={publicRuntimeConfig.siteDesc}
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
      </Head>

      <GuideLayout title="Getting to Coinfest Asia" className="px-6 lg:px-14 flex flex-col md:flex-row gap-4 text-[#303030] pb-28">
        <div className="flex flex-col flex-1">
          <div className="w-full flex flex-col gap-4 p-6 border border-[#CBCBCB] rounded-xl">
            <h2 className="font-bold">
              Locations
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.644827466359!2d115.099108!3d-8.6300542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23971eba79d3d%3A0x50e2893ce20d985b!2sNuanu!5e0!3m2!1sen!2sid!4v1723720349742!5m2!1sen!2sid"
              width="524"
              height="310"
              loading="lazy"
              className="w-full rounded-lg"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <div className="flex flex-col gap-2">
              <h3>Beraban, Kediri, Tabanan Regency, Bali 82121</h3>
              <p className="line-clamp-2 text-[#979797]">Situated in Seseh, just north of Canggu, our venue is subject to the heavy traffic that often occurs in Canggu and Bali during August. We recommend finding alternate routes or preparing for extended travel time.</p>
            </div>
            <Link target="_blank" href={"https://www.google.com/maps?ll=-8.630054,115.099108&z=16&t=m&hl=en&gl=ID&mapclient=embed&cid=5828371762354427995"} className="w-full rounded-xl text-white bg-[url('/assets/images/backdrop/background/ca2024BgNavGuide.jpg')] bg-cover bg-left flex items-center justify-center gap-2 py-4">
              Get Directions
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1654 3.33594H12.1654M17.1654 3.33594V8.33594M17.1654 3.33594L12.9987 7.5026L8.83203 11.6693M8.83203 5.0026H5.4987C4.57822 5.0026 3.83203 5.7488 3.83203 6.66927V15.0026C3.83203 15.9231 4.57822 16.6693 5.4987 16.6693H13.832C14.7525 16.6693 15.4987 15.9231 15.4987 15.0026V11.6693" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Link>
          </div>
          <div className="hidden md:block flex-1 rounded-xl h-full w-full bg-black-900 mt-4 bg-[url('/assets/images/backdrop/background/ca2024BgLineBlack.jpg')] bg-cover bg-left">
          </div>
        </div>

        <div className="md:w-[327px] flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">
                Travel safely to the venue with Gojek
              </h2>
              <div className="flex gap-1 opacity-[56%]">
                <span className="text-[11.38px]">Powered by</span>
                <Image src={"/assets/images/icons/ca2024-Gojek.svg"}
                  width={52}
                  height={15}
                  alt="Coinfest Asia 2024 (Gojek Logo)"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <PromoCodeCard
                description="Use code to get 5k off to Nuanu City"
                promoCode="GOCOINFESTCAR"
                size="sm"
              />
              <PromoCodeCard
                description="Use code to get 100k off from Ngurah Rai Airport"
                promoCode="GOBANDARA"
                size="sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">
                Prepare your mobile connection with DENT eSIM
              </h2>
              <div className="flex gap-1 opacity-[56%]">
                <span className="text-[11.38px]">Powered by</span>
                <Image src={"/assets/images/icons/ca2024-Dent.svg"}
                  width={58}
                  height={16}
                  alt="Coinfest Asia 2024 (Dent Logo)"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-full text-base p-4 rounded-[10px] border border-[#D3D3D3]">
                DENT offers 10GB mobile internet
              </div>
              <PromoCodeCard
                customDesc={<p className="text-base">Enter the voucher code <span className="text-[#2458F1] font-bold">COINFEST24</span> during the onboarding or in the account section after you sign up to claim your data.</p>}
                promoCode="COINFEST24"
              />
              <div className="grid grid-cols-2 gap-2 mt-1">
                <Link href="https://apps.apple.com/us/app/dent-esim-phone-internet/id1325019276" target="_blank" className="w-full">
                  <Image
                    className="mx-auto aspect-auto h-[49px] w-auto"
                    src={"/assets/images/ca2024Download_AppStore.svg"}
                    alt={`Coinfest Asia 2024 (Download Button App Store)`}
                    height={59}
                    width={177}
                    quality="87"
                  />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.dentwireless.dentapp&hl=id" target="_blank" className="w-full">
                  <Image
                    className="mx-auto aspect-auto h-[49px] w-auto"
                    src={"/assets/images/ca2024Download_PlayStore.svg"}
                    alt={`Coinfest Asia 2024 (Download Button Play Store)`}
                    height={59}
                    width={177}
                    quality="87"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </GuideLayout>
    </>
  );
};

export default WeatherAttire;

WeatherAttire.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
