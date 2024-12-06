import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// @Controller
import { SubmitForm } from "@lib/controller/HubSpot";

const BannerEmailSubscribe = () => {
  const intScBanner = useRef(null);
  const bgBannerImgs = useRef(null);
  const mdlBtnSuccess = useRef(null);
  const [intDtEmail, setDtEmail] = useState("");

  // @preline (Add Plugins)
  // useEffect(() => {
  //   import("preline");
  // }, []);

  // @Modal Init
  useEffect(() => {
    window.addEventListener("open.hs.overlay", (e) => {
      const elmntBody = document.body;

      if (elmntBody) {
        elmntBody.classList.add("mdlActive");
      }
    });

    window.addEventListener("close.hs.overlay", (e) => {
      const elmntBody = document.body;

      if (elmntBody) {
        elmntBody.classList.remove("mdlActive");
      }
    });
  }, []);

  useEffect(() => {
    if (bgBannerImgs.current) {
      const initGspScrll = gsap.context(() => {
        gsap.registerPlugin(ScrollTrigger);

        let intTl = gsap.timeline({
          scrollTrigger: {
            trigger: intScBanner.current,
            scrub: true,
            start: "top bottom",
            end: "top 20%",
            invalidateOnRefresh: true,
          },
        });

        intTl
          .from(bgBannerImgs.current, {
            backgroundPosition: "50% 40%",
            ease: "none",
          })
          .to(bgBannerImgs.current, {
            backgroundPosition: "50% 95%",
            ease: "none",
          });
      });

      return () => initGspScrll.revert();
    }
  }, []);

  // @Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isConfig = {
      fields: [
        {
          name: "email",
          value: intDtEmail,
        },
      ],
      context: {
        pageUri: "https://coinfest.asia/",
        pageName: "Coinfest Asia General",
      },
    };

    const isKey = "c2b84fc6-adb1-4025-aa54-da644e049804";

    console.log(isConfig);

    const rs = await SubmitForm(isConfig, isKey);

    if (rs === true) {
      setDtEmail("");
      mdlBtnSuccess.current.click();
    }
  };

  return (
    <>
      <section
        ref={intScBanner}
        className="caBnnrShdw flex items-center justify-center relative min-h-[351px] sm:min-h-[383px] xl:min-h-[455px] 2xl:min-h-[542px]"
      >
        <div
          ref={bgBannerImgs}
          className="bg-[url('/assets/images/banner/caBanner-EmailSubscribe.jpg')] bg-[length:295%] sm:bg-[length:147%] lg:bg-[length:121%] xl:bg-cover bg-no-repeat object-cover object-center absolute inset-y-0 inset-x-0 h-full w-full -z-px transition-all ease-linear"
        ></div>
        <div className="flex flex-col relative z-10">
          <div className="flex flex-col text-center relative px-4 sm:px-0">
            <h2 className="text-white font-bevietnamPro text-[32px] sm:text-[46px] xl:text-[64px] leading-[42px] sm:leading-[66px] xl:leading-[85px] font-bold uppercase">
              Don’t miss out
            </h2>
            <p className="text-white font-bevietnamPro text-base sm:text-lg xl:text-2xl font-normal">
              Subscribe to our newsletter to get the latest info about Coinfest
              Asia
            </p>
            <form
              id="formEmailSubscribe"
              className="relative mt-7"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="relative flex">
                <input
                  id="caSubscribeEmail"
                  className="rounded-l-xl text-black-800 placeholder:text-gray-300 font-bevietnamPro text-base font-normal outline-none focus:outline-none ring-0 focus:ring-0 relative py-4 px-5 w-[-webkit-fill-available]"
                  type="email"
                  name="caSubscribeEmail"
                  maxLength="80"
                  placeholder="Email"
                  value={intDtEmail}
                  required
                  onChange={(e) => setDtEmail(e.target.value)}
                />
                <button
                  className="inline-flex flex-shrink-0 justify-center items-center rounded-xl border border-transparent bg-primary text-white font-bevietnamPro text-base font-normal outline-none focus:outline-none ring-0 focus:ring-0 -ml-4 py-3 px-4 w-[131px] z-10"
                  type="submit"
                  role="button"
                  aria-label="Subscribe Email Submit"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* @Modal (Subscribe) */}
            <button
              ref={mdlBtnSuccess}
              id="mdlBtnSuccess"
              className="toolsApp bg-white flex flex-col items-center justify-center cursor-pointer rounded-[10px] outline-none absolute top-full bottom-0 left-auto right-0 h-8 w-8 opacity-0 invisible z-10"
              // className="toolsApp bg-white flex flex-col items-center justify-center cursor-pointer rounded-[10px] outline-none absolute top-full bottom-0 left-auto right-0 h-8 w-8 z-10"
              aria-labelledby="Modal Subscribe Email"
              data-hs-overlay="#mdlSbscbeEmail"
            ></button>
          </div>
        </div>
      </section>
    </>
  );
};
export default BannerEmailSubscribe;
