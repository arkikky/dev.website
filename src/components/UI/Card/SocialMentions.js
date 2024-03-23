import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Image from "next/image";

const SocialMentionsCard = ({ attributes }) => {
  const isCategory = attributes ? attributes.category : "Twitter";
  const getVerified = attributes ? attributes.verified : false;
  const getPicture = attributes
    ? process.env.NEXT_PUBLIC_UPLOAD + attributes.picture.data.attributes.url
    : null;
  const getUrl = attributes
    ? attributes.url
    : "https://twitter.com/OVioHQ/status/1699737577559875894?s=20";
  const getUsername = attributes ? attributes.username : "OVioHQ";
  const getName = attributes ? attributes.name : "Outlier Ventures";
  const isDesc = attributes
    ? attributes.description
    : "<p>@CoinfestAsia, the largest crypto event in SEA was amazing. Because of Bali, the main event is held outdoors, and the side events are also luxurious. 🇮🇩 has the largest number of crypto users in SEA with over 40 registered CEX but few own projects. It is a big challenge for 🇮🇩.</p>";

  return (
    <>
      <Link
        className="relative flex flex-col rounded-lg border border-solid border-[#E3E3E3] bg-white px-6 py-6 outline-none transition duration-300 ease-in-out hocus:border-primary"
        href={getUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center">
            <div className="w-max min-w-[40px]">
              <Image
                className="h-10 w-10 overflow-hidden rounded-full object-cover object-center"
                src={getPicture}
                alt={`Coinfest Asia 2024 by Coinvestasi (${getName} - Social Mentions)`}
                loading="lazy"
                height={128}
                width={128}
                quality="87"
              />
            </div>
            <div className="ml-2 flex flex-col items-start">
              <h3 className="flex flex-row items-center justify-center font-bevietnamPro text-sm font-semibold text-black-900">
                {getName}
                {getVerified === true && (
                  <svg
                    className="ml-1 h-4 w-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8329 8.00045C14.8198 7.53063 14.6766 7.07317 14.4184 6.67972C14.1609 6.28699 13.7987 5.97281 13.3726 5.77354C13.5347 5.33208 13.5689 4.85426 13.4744 4.3939C13.3791 3.93281 13.1566 3.50808 12.8329 3.16699C12.4911 2.84336 12.0671 2.62154 11.606 2.52554C11.1457 2.43099 10.6678 2.46517 10.2264 2.62736C10.0278 2.20045 9.71438 1.83754 9.32092 1.58008C8.92747 1.32263 8.47002 1.17863 7.99947 1.16699C7.52965 1.17936 7.07365 1.3219 6.68092 1.58008C6.2882 1.83826 5.9762 2.20117 5.77911 2.62736C5.33692 2.46517 4.85765 2.42954 4.39583 2.52554C3.93402 2.62008 3.50856 2.84263 3.16674 3.16699C2.84311 3.50881 2.62202 3.93426 2.5282 4.39463C2.43365 4.85499 2.47002 5.33281 2.63292 5.77354C2.20602 5.97281 1.84238 6.28626 1.58347 6.67899C1.32456 7.07172 1.17983 7.5299 1.16602 8.00045C1.18056 8.47099 1.32456 8.92845 1.58347 9.3219C1.84238 9.71463 2.20602 10.0288 2.63292 10.2274C2.47002 10.6681 2.43365 11.1459 2.5282 11.6063C2.62274 12.0674 2.84311 12.4921 3.16602 12.8339C3.50783 13.1561 3.93256 13.3772 4.39292 13.4724C4.85329 13.5684 5.33111 13.5335 5.77256 13.3735C5.97183 13.7997 6.28529 14.1619 6.67874 14.4201C7.07147 14.6775 7.52965 14.8208 7.99947 14.8339C8.47002 14.8223 8.92747 14.679 9.32092 14.4215C9.71438 14.1641 10.0278 13.8004 10.2264 13.3743C10.6657 13.5481 11.1471 13.5895 11.6104 13.4935C12.0729 13.3975 12.4977 13.1684 12.8322 12.8339C13.1667 12.4994 13.3966 12.0746 13.4926 11.6114C13.5886 11.1481 13.5471 10.6666 13.3726 10.2274C13.7987 10.0281 14.1609 9.71463 14.4191 9.32117C14.6766 8.92845 14.8198 8.47026 14.8329 8.00045ZM7.02638 10.8004L4.53256 8.30736L5.47292 7.36045L6.97983 8.86736L10.1798 5.38081L11.1595 6.28699L7.02638 10.8004Z"
                      fill="#1D9BF0"
                    />
                  </svg>
                )}
              </h3>
              {getUsername && (
                <span className="font-bevietnamPro text-sm font-normal text-black-900/70">
                  {`@${getUsername}`}
                </span>
              )}
            </div>
          </div>
          <div className="min-w-[24px] max-w-[24px]">
            {isCategory === "Twitter" && (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2439 2.25H21.5519L14.3249 10.51L22.8269 21.75H16.1699L10.9559 14.933L4.98991 21.75H1.67991L9.40991 12.915L1.25391 2.25H8.07991L12.7929 8.481L18.2439 2.25ZM17.0829 19.77H18.9159L7.08391 4.126H5.11691L17.0829 19.77Z"
                  fill="black"
                />
              </svg>
            )}
            {isCategory === "Facebook" && (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_156_659)">
                  <path
                    d="M24 12.0049C24 5.38088 18.624 0.00488281 12 0.00488281C5.376 0.00488281 0 5.38088 0 12.0049C0 17.8129 4.128 22.6489 9.6 23.7649V15.6049H7.2V12.0049H9.6V9.00488C9.6 6.68888 11.484 4.80488 13.8 4.80488H16.8V8.40488H14.4C13.74 8.40488 13.2 8.94488 13.2 9.60488V12.0049H16.8V15.6049H13.2V23.9449C19.26 23.3449 24 18.2329 24 12.0049Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_156_659">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
            {isCategory === "Instagram" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="#000"
                    d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04-1.869 0-2.09.007-2.828.04-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828 0 1.869.008 2.09.041 2.829.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829 0-1.869-.007-2.09-.04-2.828-.088-1.883-.973-2.783-2.87-2.87ZM12 15.595a3.595 3.595 0 1 1 0-7.19 3.595 3.595 0 0 1 0 7.19Zm3.737-6.491a.84.84 0 1 1 0-1.68.84.84 0 0 1 0 1.68ZM14.333 12a2.333 2.333 0 1 1-4.666 0 2.333 2.333 0 0 1 4.666 0ZM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072C5.008 14.14 5 13.901 5 12c0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071C9.861 5.008 10.099 5 12 5c1.901 0 2.14.008 2.887.043 2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                  </clipPath>
                </defs>
              </svg>
            )}
            {isCategory === "LinkedIn" && (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5 2H3.5C3.10218 2 2.72064 2.15804 2.43934 2.43934C2.15804 2.72064 2 3.10218 2 3.5V20.5C2 20.8978 2.15804 21.2794 2.43934 21.5607C2.72064 21.842 3.10218 22 3.5 22H20.5C20.8978 22 21.2794 21.842 21.5607 21.5607C21.842 21.2794 22 20.8978 22 20.5V3.5C22 3.10218 21.842 2.72064 21.5607 2.43934C21.2794 2.15804 20.8978 2 20.5 2ZM8 19H5V10H8V19ZM6.5 8.25C6.15618 8.24017 5.82288 8.12924 5.54175 7.93108C5.26062 7.73291 5.04411 7.45629 4.9193 7.13578C4.79448 6.81527 4.76687 6.46508 4.83994 6.12897C4.913 5.79286 5.0835 5.48574 5.33011 5.24597C5.57673 5.00621 5.88853 4.84443 6.22656 4.78086C6.5646 4.71729 6.91387 4.75475 7.23074 4.88854C7.5476 5.02234 7.81802 5.24655 8.00819 5.53315C8.19836 5.81975 8.29986 6.15604 8.3 6.5C8.2921 6.97035 8.09834 7.41845 7.76105 7.74637C7.42376 8.07428 6.97039 8.25535 6.5 8.25ZM19 19H16V14.26C16 12.84 15.4 12.33 14.62 12.33C14.3913 12.3452 14.1679 12.4055 13.9625 12.5073C13.7572 12.6091 13.574 12.7505 13.4235 12.9234C13.273 13.0962 13.1581 13.2971 13.0854 13.5144C13.0127 13.7318 12.9837 13.9614 13 14.19C12.995 14.2365 12.995 14.2835 13 14.33V19H10V10H12.9V11.3C13.1925 10.855 13.5944 10.4926 14.0672 10.2474C14.54 10.0023 15.0677 9.88267 15.6 9.9C17.15 9.9 18.96 10.76 18.96 13.56L19 19Z"
                  fill="black"
                />
              </svg>
            )}
          </div>
        </div>
        {isDesc && (
          <article className="artcleMarkdown relative mt-4 line-clamp-6 flex flex-col font-bevietnamPro text-black-900">
            <ReactMarkdown>{isDesc}</ReactMarkdown>
          </article>
        )}
      </Link>
    </>
  );
};
export default SocialMentionsCard;
