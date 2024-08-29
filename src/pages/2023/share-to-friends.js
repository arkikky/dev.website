import React, { useState, useEffect } from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Icons (Heroicons : https://unpkg.com/browse/@heroicons/react@2.0.14/20/solid/)
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

// Css
import Modal from "@styles23/components/Modal.module.css";

// Ui - Components
import Main from "@components23/Main";
import Buttons from "@components23/UI/Buttons";

const ShareToFriends = () => {
  const [isShowing, setIsShowing] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(true);

  function closeModalDefi() {
    setIsOpenModal(false);
  }

  function openModalDefi() {
    setIsOpenModal(true);
  }

  useEffect(() => {
    const setElmnt = document.getElementById("shreToFriends");

    if (setElmnt) {
      setElmnt.click();
    }
  }, []);

  return (
    <>
      {/* Head (Share To Friends) */}
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <title>Share To Friend | ASIA’S IMMERSIVE WEB3 FESTIVAL IS BACK</title>
        <meta
          name="title"
          content="Share To Friend | ASIA’S IMMERSIVE WEB3 FESTIVAL IS BACK"
        />
        <meta
          name="description"
          content="Coinfest Asia 📍 Bali, 24-25 August 2023 | Explore real-world insights and valuable connections in Web2.5 where web2 and web3 industries converge through an immersive festival experience."
        />
        <meta name="author" content={`${publicRuntimeConfig.author}`} />
        <link rel="mask-icon" href="/favicon.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#1E1E1E" />
        <meta name="msapplication-navbutton-color" content="#1E1E1E" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#1E1E1E" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coinfest.asia/" />
        <meta
          property="og:title"
          content="ASIA’S IMMERSIVE WEB3 FESTIVAL IS BACK"
        />
        <meta
          property="og:description"
          content="Coinfest Asia 📍 Bali, 24-25 August 2023 | Explore real-world insights and valuable connections in Web2.5 where web2 and web3 industries converge through an immersive festival experience."
        />
        <meta
          property="og:image"
          content="/assets/thumbnail-share/ca23-share-to-friends.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://coinfest.asia/" />
        <meta
          property="twitter:title"
          content="ASIA’S IMMERSIVE WEB3 FESTIVAL IS BACK"
        />
        <meta
          property="twitter:description"
          content="Coinfest Asia 📍 Bali, 24-25 August 2023 | Explore real-world insights and valuable connections in Web2.5 where web2 and web3 industries converge through an immersive festival experience."
        />
        <meta
          property="twitter:image"
          content="/assets/thumbnail-share/ca23-share-to-friends.jpg"
        />
      </Head>

      <Main className="">
        <div className="opacity-0">
          <a
            id="shreToFriends"
            href="/assets/thumbnail-share/ca23-share-to-friends.jpg"
            download="Coinfest Asia 2023- Share To Friends"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              Download Assets (Coinfest Asia 2023- Share To Friends)
            </button>
          </a>
        </div>

        <div className="fixed inset-y-0 inset-x-0 bg-black-900/50 z-[1613]" />
        <div className="fixed inset-0 overflow-y-auto z-[2145]">
          <div className="flex min-h-full items-end sm:items-center justify-center py-0 px-0">
            <div className="w-full sm:max-w-[598px] transform overflow-hidden rounded-t-xl sm:rounded-xl bg-[#2D2D2D] transition-all">
              <div className="flex flex-col lg:flex-row border-none relative overflow-hidden outline-none text-current">
                <div className="flex-1 bg-white py-6 sm:py-8 px-6 sm:px-12">
                  <div className="flex items-center justify-center">
                    <Image
                      className="object-cover h-20 w-20"
                      src={`/2023/assets/images/party-popper.png`}
                      alt={`${publicRuntimeConfig.appName} (Coinfest Asia 2023 - Share To Friend Page)`}
                      height={120}
                      width={120}
                    />
                  </div>
                  <div className="text-center mt-8">
                    <h2 className="text-black-900 font-bevietnam-pro text-2xl sm:text-[32px] font-bold sm:leading-[40px] uppercase w-full">
                      ALL SET!
                    </h2>
                    <p className="text-black-900 font-bevietnam-pro text-sm sm:text-base font-normal mt-4">
                      Tell others to come and meet you at Coinfest Asia, the
                      immersive web3 festival.{" "}
                      <a
                        className="text-primary underline"
                        href="/assets/thumbnail-share/ca23-share-to-friends.jpg"
                        download="Coinfest Asia 2023- Share To Friends"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Click Here
                      </a>{" "}
                      if the file aren’t downloaded yet.
                    </p>
                  </div>
                  <div className="text-center mt-8">
                    <Buttons
                      typeBtn="btn-link"
                      url="/"
                      label="Back To Home"
                      variants="btn-primary"
                      rounded="pill"
                      text="capitalize"
                      position="center"
                      withIcons={true}
                      positionIcons="right"
                      ariaLabel="btnBackToHome"
                      className="text-sm sm:text-base font-medium sm:font-medium px-6"
                    ></Buttons>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default ShareToFriends;

ShareToFriends.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
