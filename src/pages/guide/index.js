import React from "react";
import getConfig from "next/config";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

// @lib
import guideNav from '@lib/json/guide-nav.json';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @layouts
import GuideLayout from "@layouts/GuideLayout";

const Guide = () => {
  const router = useRouter();
  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Guide | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Guide | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* @open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Guide | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="og:description"
          content={publicRuntimeConfig.siteDesc}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />

        {/* @twitter */}
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

      {/* @main */}
      <GuideLayout
        title="General Information"
        description="Coinfest Asia is an industry event, not price-forecasting event. All content and material shared in Coinfest Asia are not financial advice."
        isDescFull
        className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-6 sm:px-14 text-[#303030] pb-24"
      >
        {guideNav.map(nav => (
          <div className={`${(nav.id === 10 || nav.children) && "col-span-1 sm:col-span-2"} `}>
            <Link href={nav.url} className={`w-full flex justify-between items-center p-4 border border-[#D3D3D3] rounded-[10px] hover:bg-[#E9E9E9] ${nav.id == 0 && "bg-[#E9E9E9]"}`}>
              {nav.name}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7 7H17V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Link>
            {nav.children && nav.children.length > 0 && (
              <div className='pt-2 pl-4'>
                <div className='flex flex-col gap-2 border-l pl-4 border-[#2458F1]'>
                  {nav.children.map(child => {
                    return child?.url ? (
                      <Link href={child?.url} key={child.id}>
                        <div
                          className={`p-4 border border-[#D3D3D3] rounded-[10px] hover:bg-[#E9E9E9]`}
                        >
                          {child.name}
                        </div>
                      </Link>
                    ) : (
                      <div
                        key={child.id}
                        className='p-4 border border-[#D3D3D3] rounded-[10px] cursor-pointer hover:bg-[#E9E9E9]'
                        onClick={() => router.push('/guide/getting-to-coinfest-asia')}
                      >
                        {child.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </GuideLayout>
    </>
  );
};

export default Guide;

Guide.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
