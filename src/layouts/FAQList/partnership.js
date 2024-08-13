import React from "react";
import Link from "next/link";

const FAQPartnership = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-start">
        <h2 className="leading-2xl font-staraBold text-2xl uppercase text-black-900">
          Partnership
        </h2>
        <div className="hs-accordion-group w-full divide-y">
          <div
            className="hs-accordion active"
            id="ca2024FaqPartnership-Heading_1"
          >
            <button
              className="hs-accordion-toggle inline-flex w-full items-center justify-between rounded-lg py-4 text-start font-semibold text-black-900 outline-none focus-visible:outline-none hs-accordion-active:text-black-900"
              aria-controls="ca2024FaqPartnership_1"
            >
              Why should my company sponsor Coinfest Asia 2024?
              <svg
                className="block size-4 hs-accordion-active:hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
              <svg
                className="hidden size-4 hs-accordion-active:block"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m18 15-6-6-6 6"></path>
              </svg>
            </button>
            <div
              id="ca2024FaqPartnership_1"
              className="hs-accordion-content w-full overflow-hidden font-light text-[#767676] transition-[height] duration-300"
              aria-labelledby="ca2024FaqPartnership-Heading_1"
            >
              <div className="ca2024FaqFormatContent pb-6">
                <p>
                  Coinfest Asia 2024 aims to bring 6000+ industry players to
                  experience immersive programming set to have innovation meets
                  adoption. If you'd like to explore how you can leverage your
                  brand at Coinfest Asia 2023, fill out the form{" "}
                  <Link href="/get-involved/sponsorship">here</Link> to book a
                  call with our team.
                </p>
              </div>
            </div>
          </div>

          <div className="hs-accordion" id="ca2024FaqPartnership-Heading_2">
            <button
              className="hs-accordion-toggle inline-flex w-full items-center justify-between rounded-lg py-4 text-start font-semibold text-black-900 outline-none focus-visible:outline-none hs-accordion-active:text-black-900"
              aria-controls="ca2024FaqPartnership_2"
            >
              How can I get involved at Coinfest Asia 2024?
              <svg
                className="block size-4 hs-accordion-active:hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
              <svg
                className="hidden size-4 hs-accordion-active:block"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m18 15-6-6-6 6"></path>
              </svg>
            </button>
            <div
              id="ca2024FaqPartnership_2"
              className="hs-accordion-content hidden w-full overflow-hidden font-light text-[#767676] transition-[height] duration-300"
              aria-labelledby="ca2024FaqPartnership-Heading_2"
            >
              <div className="ca2024FaqFormatContent pb-6">
                <p>
                  There are many opportunities for you to get involved at
                  Coinfest Asia 2023, get involved as,
                </p>
                <ul>
                  <li>Sponsor</li>
                  <li>Speaker</li>
                  <li>Partner as Media</li>
                  <li>Partner as Community</li>
                  <li>Partner in Travel</li>
                </ul>
                <p>
                  and other partnership opportunities. Check out these
                  opportunities <Link href="/get-involved/">here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPartnership;
