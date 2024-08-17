import React from "react";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

import { convertToBaliTime } from "@lib/helper/convertToBaliTime";

const CoinfestWeekModal = ({
  id,
  name,
  desc,
  images,
  date,
  time,
  location,
  labelBtn = "RSVP",
  urlRsrv = "",
  disable = false,
}) => {
  const isCoinfestWeek = () => {
    return (
      <div
        className={`relative inline-flex w-full items-center justify-center rounded-[14px] ${disable === true || urlRsrv === "" ? "bg-[#788090]" : "bg-secondary"} px-5 py-4 font-bevietnamPro text-sm font-normal leading-initial text-white outline-none last:mr-0 focus-visible:outline-none sm:text-base lg:px-6 lg:py-5`}
      >
        {urlRsrv !== "" ? "RSVP" : "COMING SOON"}
        {urlRsrv !== "" && (
          <svg
            className="ml-0.5 h-6 w-6"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.75 17L17.75 7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.75 7H17.75V17"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    );
  };

  return (
    <>
      <div
        id={`mdlCoinfestWeek`}
        className="hs-overlay fixed left-0 top-0 z-[9999] hidden h-full w-full overflow-y-auto overflow-x-hidden bg-black-900/[0.33] opacity-0 transition-all [--body-scroll:true] hs-overlay-open:opacity-100 hs-overlay-open:duration-300"
        data-hs-overlay-backdrop-container="#bckdrpModalActve"
      >
        <div className="fixed inset-x-0 bottom-0 top-0 mx-auto flex w-full max-w-full translate-y-8 transform items-center justify-center px-4 opacity-0 transition-all duration-300 ease-out hs-overlay-open:translate-y-0 hs-overlay-open:opacity-100 sm:inset-y-0 sm:max-w-[547px] sm:px-0">
          <div className="flex w-full flex-col">
            <button
              className="hs-dropdown-toggle relative z-[12] mb-4 flex h-10 w-10 flex-col items-center justify-center rounded-xl bg-white outline-none"
              aria-labelledby={`mdlCoinfestWeek`}
              data-hs-overlay={`#mdlCoinfestWeek`}
            >
              <svg
                className="ml-0.5 h-4 w-4"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            <div className="relative flex w-full flex-col flex-wrap overflow-hidden rounded-[16px] bg-white py-0 sm:rounded-[16px]">
              <div className="relative w-full min-w-full max-w-full flex-1 bg-gray-500 sm:min-w-[309px] lg:max-w-[309px]">
                {/* <div className="absolute inset-x-0 inset-y-0 z-px opacity-100 transition-all duration-300 ease-in-out">
                <Image
                  className="z-10 mx-auto h-full w-full object-cover object-center"
                  src="/assets/images/backdrop/speakers/ca2024SpeakersBlue.png"
                  alt="Coinfest Asia 2024 (Backdrop Speakers)"
                  height={504}
                  width={423}
                  quality="87"
                />
              </div> */}

                {/* {isImages && (
                <Image
                  className="relative z-10 mx-auto h-[311px] w-full object-cover object-top sm:h-full sm:object-center"
                  src={isImages}
                  alt={`Coinfest Asia 2024 (${isName} - Speakers)`}
                  height={672}
                  width={564}
                  quality="87"
                />
              )} */}
              </div>
              <div className="flex h-full w-full flex-1 flex-col bg-white sm:overflow-hidden">
                <div
                  className={`relative h-[183px] w-full bg-[#C6C6C6] sm:h-[251px] lg:h-[259px] xl:h-[261px]`}
                >
                  <Image
                    className="h-full w-full object-cover"
                    src={images}
                    alt={`Coinfest Asia 2024`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    width={684}
                    height={260}
                    quality="87"
                  />
                </div>

                <div className="flex flex-col px-4 py-4 text-start sm:px-6 sm:py-6">
                  <div className="flex flex-col">
                    <h3 className="font-bevietnamPro text-xl font-bold capitalize text-black-900 sm:text-lg">
                      {name}
                    </h3>
                    {desc && (
                      <div className="ca2024CoinfestWeekCntnMdl mt-2 flex max-h-[145px] flex-col overflow-y-scroll font-bevietnamPro text-base font-light xl:max-h-[75px]">
                        {desc}
                      </div>
                    )}
                  </div>
                  <div className="mt-4.5 flex flex-col space-y-2">
                    {location && (
                      <span
                        className={`flex text-sm font-normal text-black-900 sm:text-base`}
                      >
                        <svg
                          className="mr-2 h-5 w-5 sm:h-6 sm:w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                        >
                          <path
                            d="M18.9108 18C19.8247 19.368 20.2113 20.203 19.8865 20.8999C19.8466 20.9854 19.7999 21.0679 19.7469 21.1467C19.1724 22 17.6875 22 14.7178 22H9.28223C6.31251 22 4.82765 22 4.25311 21.1467C4.20005 21.0679 4.15339 20.9854 4.11355 20.8999C3.78869 20.203 4.17527 19.368 5.08915 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15 9.5C15 11.1569 13.6569 12.5 12 12.5C10.3431 12.5 9 11.1569 9 9.5C9 7.84315 10.3431 6.5 12 6.5C13.6569 6.5 15 7.84315 15 9.5Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M12 2C16.0588 2 19.5 5.42803 19.5 9.5869C19.5 13.812 16.0028 16.777 12.7725 18.7932C12.5371 18.9287 12.2709 19 12 19C11.7291 19 11.4629 18.9287 11.2275 18.7932C8.00325 16.7573 4.5 13.8266 4.5 9.5869C4.5 5.42803 7.9412 2 12 2Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                        {location}
                      </span>
                    )}
                    {date && (
                      <span
                        className={`flex text-sm font-normal text-black-900 sm:text-base`}
                      >
                        <div className="mr-2 flex w-max flex-col">
                          <Image
                            className="h-5 w-5 text-white sm:h-6 sm:w-6"
                            src={"/assets/images/icons/ca2024-Date.svg"}
                            alt={`Coinfest Asia 2024 (Icons Date - Coinfest Week)`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                            height={24}
                            width={24}
                            quality="90"
                          />
                        </div>
                        {date}
                      </span>
                    )}
                    <span
                      className={`flex text-sm font-normal text-black-900 sm:text-base`}
                    >
                      <svg
                        className="mr-2 h-5 w-5 sm:h-6 sm:w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        fill={"none"}
                      >
                        <path
                          d="M18.952 8.60657L21.4622 8.45376C19.6629 3.70477 14.497 0.999914 9.4604 2.34474C4.09599 3.77711 0.909631 9.26107 2.34347 14.5935C3.77731 19.926 9.28839 23.0876 14.6528 21.6553C18.6358 20.5917 21.4181 17.2946 22 13.4844"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 8V12L14 14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {convertToBaliTime(time)} — GMT + 8
                    </span>
                    <span
                      className={`flex text-sm font-normal text-black-900 sm:text-base`}
                    >
                      <Image
                        className="mr-2 mt-px h-5 w-5 text-white sm:mr-2.5 sm:h-6 sm:w-6"
                        src={"/assets/images/icons/ca2024-Date.svg"}
                        alt={`Coinfest Asia 2024 (Icons Date - Coinfest Week)`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        height={24}
                        width={24}
                        quality="90"
                      />

                      {dayjs(time).format("DD MMMM YYYY")}
                    </span>
                  </div>
                  <div className="relative mt-6 block">
                    {disable ? (
                      <>{isCoinfestWeek()}</>
                    ) : (
                      <Link
                        title={`Coinfest Asia 2024 (Button Coinfest Week - ${name})`}
                        href={urlRsrv}
                      >
                        {isCoinfestWeek()}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinfestWeekModal;
