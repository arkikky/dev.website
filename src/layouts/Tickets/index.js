import React from "react";
import Image from "next/image";
import Link from "next/link";

// @components
import Container from "@components/Container";

const Tickets = () => {
  return (
    <>
      <section className="ca2024MainPoints ca2024Tickets ca2024MainScreenAuto relative flex snap-start snap-always flex-col items-start justify-start overflow-hidden bg-secondary">
        {/* @point-items (backdrop) */}
        <div className="ca2024TicketsPoints opacity-1 pointer-events-none absolute -right-[225px] bottom-0 left-auto top-auto z-[5] select-none bg-transparent transition  duration-[0.8s] ease-out sm:-bottom-3 sm:-right-[283px] lg:-right-[197px] xl:-bottom-[253px] xl:-right-[120px]">
          <Image
            className="z-[2] mx-auto h-auto w-[671px] object-cover object-center sm:w-[971px] lg:w-[1080px]"
            src={"/assets/images/backdrop/ca2024WidePointItems.png"}
            alt={`Coinfest Asia 2024 (Wide Points Tickets)`}
            height={1267}
            width={1020}
            quality="87"
          />
        </div>

        <Container className="relative z-[5]">
          <div className="relative flex flex-col overflow-hidden pb-[229px] pt-[135px]">
            <div className="ca2024TicketsContent flex flex-col text-start transition duration-[1.2s] ease-out">
              <h2 className="w-ful max-w-full text-start font-staraExtraBold text-[44px] uppercase leading-[52px] text-white sm:max-w-[445px] sm:text-[54px] sm:leading-[74px] lg:max-w-[677px] lg:text-[80px] lg:leading-[90px]">
                GET YOUR TICKETS NOW
              </h2>
            </div>
            <div className="relative mt-8 grid-cols-4 gap-x-6 gap-y-6 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
              <div className="col-span-full lg:col-span-4">
                <div className="ca2024product">
                  <div className="ca2024ProductGroup ca2024ProductGroupHeading">
                    <div className="z-[5] mr-3 flex flex-col">
                      <Image
                        className="h-[50px] w-full max-w-[16px] sm:h-[58px]"
                        src={
                          "/assets/images/backdrop/products/ca2024TicketsProduct.png"
                        }
                        alt="Coinfest Asia 2024 (Festival — Tickets)"
                        height={114}
                        width={42}
                        quality="87"
                      />
                    </div>
                    <div className="relative z-[5] flex flex-col">
                      <h3 className="z-[2] font-bevietnamPro text-base font-semibold sm:text-xl">
                        Festival Ticket
                      </h3>
                      <div className="flex flex-row">
                        <span className="sale-price z-[2] font-bevietnamPro text-base font-semibold sm:text-xl">
                          $100
                        </span>
                        <span className="regular-price z-[2] ml-2 font-bevietnamPro text-base font-normal text-[#8A8A8A] line-through sm:text-xl">
                          $150
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="ca2024ProductGroup ca2024ProductGroupContentFrmat">
                    <ul>
                      <li>2-day pass to Coinfest Asia main venue</li>
                      <li>
                        {`Access to main stage’s panel discussions
                        conferences`}
                      </li>
                      <li>Direct networking with Speakers at Breakout Area</li>
                      <li>Access to workshops, meetups, and side sessions</li>
                      <li>{`Light food beverage for 2 days`}</li>
                      <li>Access to selected Coinfest Week events</li>
                      <li>Access to Official Networking Party</li>
                    </ul>
                  </div>

                  <div className="ca2024ProductGroup ca2024productButton">
                    <a
                      href="https://ticket.coinfest.asia/?add-to-cart=5232"
                      data-quantity="1"
                      className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id="5232"
                      data-product_sku=""
                      aria-label="Add to cart: “Festival — Super Early Bird”"
                      aria-describedby="Festival — Super Early Bird (Tickets)"
                      rel="nofollow"
                    >
                      Buy ticket
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-span-full lg:col-span-4">
                <div className="ca2024Product ca2024ProductVIP">
                  <div className="ca2024ProductGroup ca2024ProductGroupHeading">
                    <div className="z-[5] mr-3 flex flex-col">
                      <Image
                        className="h-[50px] w-full max-w-[16px] sm:h-[58px]"
                        src={
                          "/assets/images/backdrop/products/ca2024TicketsProductVIP.png"
                        }
                        alt="Coinfest Asia 2024 (Festival — Super Early Bird)"
                        height={114}
                        width={42}
                        quality="87"
                      />
                    </div>
                    <div className="relative z-[5] flex flex-col">
                      <h3 className="z-[2] font-bevietnamPro text-base font-semibold sm:text-xl">
                        Bull Ticket
                      </h3>
                      <div className="flex flex-row">
                        <span className="sale-price z-[2] font-bevietnamPro text-base font-semibold sm:text-xl">
                          $700
                        </span>
                        <span className="regular-price z-[2] ml-2 font-bevietnamPro text-base font-normal text-[#8A8A8A] line-through sm:text-xl">
                          $1000
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="ca2024ProductGroup ca2024ProductGroupContentFrmat">
                    <ul>
                      <li className="hightlight">
                        All access from Festival Ticket
                      </li>
                      <li>Fast lane registration</li>
                      <li>Access to Bull Area</li>
                      <li>Exclusive access to the Speakers</li>
                      <li>Dedicated food and drinks</li>
                      <li>Access to selected VIP Coinfest Week events</li>
                      <li>Fast lane access to Official Networking Party</li>
                    </ul>
                  </div>

                  <div className="ca2024ProductGroup ca2024productButton">
                    <a
                      href="https://ticket.coinfest.asia/?add-to-cart=3613"
                      data-quantity="1"
                      className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id="3613"
                      data-product_sku=""
                      aria-label="Add to cart: “Bull Ticket”"
                      aria-describedby="Bull (Tickets)"
                      rel="nofollow"
                    >
                      Buy ticket
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center pt-20">
              <Link
                className="relative inline-flex w-full max-w-max items-center justify-center rounded-[14px] bg-primary px-6 py-4 font-bevietnamPro text-sm font-medium text-black-900 outline-none focus-visible:outline-none sm:text-lg"
                href={"https://ticket.coinfest.asia/"}
                title="Tickets Coinfest Asia 2024"
              >
                Secure your spots now
                <svg
                  className="ml-1 h-6 w-6 sm:h-8 sm:w-8"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66602 16.0013H23.3327M23.3327 16.0013L17.2151 10.668M23.3327 16.0013L17.2151 21.3346"
                    stroke="#101010"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Tickets;
