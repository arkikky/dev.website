import React from "react";
import Link from "next/link";

// @components
import FAQPartnership from "./partnership";

const FAQList = () => {
  return (
    <>
      <div className="mt-8 flex flex-col space-y-10">
        <div className="flex flex-col items-start justify-start">
          <h2 className="leading-2xl font-staraBold text-2xl uppercase text-black-900">
            General
          </h2>
          <div className="hs-accordion-group w-full divide-y">
            <div
              className="hs-accordion active"
              id="ca2024FaqGeneral-Heading_1"
            >
              <button
                className="hs-accordion-toggle inline-flex w-full items-center justify-between rounded-lg py-4 text-start font-semibold text-black-900 outline-none focus-visible:outline-none hs-accordion-active:text-black-900"
                aria-controls="ca2024FaqGeneral_1"
              >
                What is Coinfest Asia?
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
                id="ca2024FaqGeneral_1"
                className="hs-accordion-content w-full overflow-hidden font-light text-[#767676] transition-[height] duration-300"
                aria-labelledby="ca2024FaqGeneral-Heading_1"
              >
                <div className="ca2024FaqFormatContent pb-6">
                  <p>
                    Coinfest immerses you directly into adoption, innovation,
                    and emerging markets in Asia. Held in Bali - Indonesia, the
                    event will be rather unique and not structured like a
                    typical conference, giving all participants a platform to
                    engage and network in a casual setting. Coinfest Asia is
                    hosted by Coinvestasi, Indonesia’s #1 crypto media (an
                    Indonesia Crypto Network company).
                  </p>
                </div>
              </div>
            </div>

            <div className="hs-accordion" id="ca2024FaqGeneral-Heading_2">
              <button
                className="hs-accordion-toggle inline-flex w-full items-center justify-between rounded-lg py-4 text-start font-semibold text-black-900 outline-none focus-visible:outline-none hs-accordion-active:text-black-900"
                aria-controls="ca2024FaqGeneral_2"
              >
                Who will attend Coinfest Asia 2024?
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
                id="ca2024FaqGeneral_2"
                className="hs-accordion-content hidden w-full overflow-hidden font-light text-[#767676] transition-[height] duration-300"
                aria-labelledby="ca2024FaqGeneral-Heading_2"
              >
                <div className="ca2024FaqFormatContent pb-6">
                  <p>
                    This event is perfect for you who is a founder or C-level of
                    your company, a crypto and Web3 enthusiast, a fund manager,
                    a product manager, an NFT creator, a brand partnership
                    leader, a VC analyst, a program developer, an art & NFT
                    collector, a marketing expert—everyone who is interested in
                    gaining insight & networking in Web3 industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h2 className="leading-2xl font-staraBold text-2xl uppercase text-black-900">
            Tickets
          </h2>
          <div className="hs-accordion-group w-full divide-y">
            <div
              className="hs-accordion active"
              id="ca2024FaqTickets-Heading_1"
            >
              <button
                className="hs-accordion-toggle inline-flex w-full items-center justify-between rounded-lg py-4 text-start font-semibold text-black-900 outline-none focus-visible:outline-none hs-accordion-active:text-black-900"
                aria-controls="ca2024FaqTickets_1"
              >
                Where can I buy tickets?
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
                id="ca2024FaqTickets_1"
                className="hs-accordion-content w-full overflow-hidden font-light text-[#767676] transition-[height] duration-300"
                aria-labelledby="ca2024FaqTickets-Heading_1"
              >
                <div className="ca2024FaqFormatContent pb-6">
                  <p>
                    Register online{" "}
                    <Link href="https://ticket.coinfest.asia/" target="_blank">
                      through our Ticket
                    </Link>{" "}
                    page and follow the on-screen instructions to complete the
                    registration process. You will receive your e-Ticket once
                    your registration is confirmed.
                  </p>
                </div>
              </div>
            </div>
            <div className="hs-accordion" id="ca2024FaqTickets-Heading_2">
              <button
                className="hs-accordion-toggle inline-flex w-full items-center justify-between rounded-lg py-4 text-start font-semibold text-black-900 outline-none focus-visible:outline-none hs-accordion-active:text-black-900"
                aria-controls="ca2024FaqTickets_2"
              >
                What do I get from my ticket?
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
                id="ca2024FaqTickets_2"
                className="hs-accordion-content hidden w-full overflow-hidden font-light text-[#767676] transition-[height] duration-300"
                aria-labelledby="ca2024FaqTickets-Heading_2"
              >
                <div className="ca2024FaqFormatContent pb-6">
                  <p>If you're buying the Bull ticket, you will get:</p>
                  <ul>
                    <li>ALL FESTIVAL PASS PERKS & BENEFITS</li>
                    <li>Fast lane registration</li>
                    <li>Access to Bull Area</li>
                    <li>Exclusive access to the Speakers</li>
                    <li>Dedicated food and drinks</li>
                    <li>Access to selected VIP Coinfest Week events</li>
                    <li>Fast lane access to Official Networking Party</li>
                  </ul>
                  <br></br>
                  <p>If you're buying the Festival ticket, you will get:</p>
                  <ul>
                    <li>2-day pass to Coinfest Asia main venue</li>
                    <li>
                      Access to main stage’s panel discussions & conferences
                    </li>
                    <li>Direct networking with Speakers at Breakout Area</li>
                    <li>Access to workshops, meetups, and side sessions</li>
                    <li>Light food & beverage for 2 days</li>
                    <li>Access to selected Coinfest Week events</li>
                    <li>Access to Official Networking Party</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hs-accordion" id="ca2024FaqTickets-Heading_3">
              <button
                className="hs-accordion-toggle inline-flex w-full items-center justify-between rounded-lg py-4 text-start font-semibold text-black-900 outline-none focus-visible:outline-none hs-accordion-active:text-black-900"
                aria-controls="ca2024FaqTickets_3"
              >
                Can I buy tickets on the venue?
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
                id="ca2024FaqTickets_3"
                className="hs-accordion-content hidden w-full overflow-hidden font-light text-[#767676] transition-[height] duration-300"
                aria-labelledby="ca2024FaqTickets-Heading_3"
              >
                <div className="ca2024FaqFormatContent pb-6">
                  <p>
                    You can only purchase your ticket through Coinfest Asia
                    website.
                  </p>
                </div>
              </div>
            </div>
            <div className="hs-accordion" id="ca2024FaqTickets-Heading_4">
              <button
                className="hs-accordion-toggle inline-flex w-full items-center justify-between rounded-lg py-4 text-start font-semibold text-black-900 outline-none focus-visible:outline-none hs-accordion-active:text-black-900"
                aria-controls="ca2024FaqTickets_4"
              >
                Can I get a refund if I can't attend the event?
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
                id="ca2024FaqTickets_4"
                className="hs-accordion-content hidden w-full overflow-hidden font-light text-[#767676] transition-[height] duration-300"
                aria-labelledby="ca2024FaqTickets-Heading_4"
              >
                <div className="ca2024FaqFormatContent pb-6">
                  <p>
                    Tickets are <strong>not</strong> refundable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FAQPartnership />

        <div className="flex flex-col items-start justify-start">
          <h2 className="leading-2xl font-staraBold text-2xl uppercase text-black-900">
            Travel & Accommodation
          </h2>
          <div className="hs-accordion-group w-full divide-y">
            <div
              className="hs-accordion active"
              id="ca2024FaqTravelAccommodation-Heading_1"
            >
              <button
                className="hs-accordion-toggle inline-flex w-full items-center justify-between rounded-lg py-4 text-start font-semibold text-black-900 outline-none focus-visible:outline-none hs-accordion-active:text-black-900"
                aria-controls="ca2024FaqTravelAccommodation_1"
              >
                Where can I buy tickets?
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
                id="ca2024FaqTravelAccommodation_1"
                className="hs-accordion-content w-full overflow-hidden font-light text-[#767676] transition-[height] duration-300"
                aria-labelledby="ca2024FaqTravelAccommodation-Heading_1"
              >
                <div className="ca2024FaqFormatContent pb-6">
                  <p>
                    Register online{" "}
                    <Link href="https://ticket.coinfest.asia/" target="_blank">
                      through our Ticket
                    </Link>{" "}
                    page and follow the on-screen instructions to complete the
                    registration process. You will receive your e-Ticket once
                    your registration is confirmed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQList;
