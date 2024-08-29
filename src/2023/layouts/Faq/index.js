import React, { useState } from "react";
import { Link } from "react-scroll";
import { Disclosure, Transition } from "@headlessui/react";

// Css
import Headng from "@styles23/components/Heading.module.css";
import Disclsre from "@styles23/components/Disclosure.module.css";

// Ui - Components
import PostLink from "@components23/UI/Post/PostLink";

const LyFAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <>
      <section id="faq" className="mt-24">
        <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-8 gap-x-6 relative">
          <div className="col-start-1 sm:col-start-2 lg:col-start-1 col-span-full sm:col-span-6 lg:col-span-3">
            <div className="sticky top-[246px]">
              <div className="flex flex-col">
                <span
                  className={`${Headng.hdingTags} text-black-900 capitalize`}
                >
                  Frequently
                </span>
                <h2 className="text-primary font-bevietnam-pro text-2xl sm:text-[40px] lg:text-[34px] xl:text-[40px] font-extrabold leading-[normal] sm:leading-[48px] lg:leading-[normal] xl:leading-[48px] tracking-wide uppercase">
                  ASKED QUESTIONS
                </h2>
              </div>
              <nav className="hidden lg:flex flex-col relative mt-8">
                <ul
                  id="navMnuFaq"
                  className="menu-button flex flex-col relative max-w-[253px]"
                >
                  <li className="menu-item">
                    <Link
                      activeClass="active"
                      to="generalFaq"
                      href="generalFaq"
                      spy={true}
                      smooth={"easeInOutQuart"}
                      offset={-227}
                      duration={300}
                      className="uppercase"
                    >
                      General
                    </Link>
                  </li>
                  {/* <li className="menu-item">
                    <Link
                      activeClass="active"
                      to="ticketsFaq"
                      href="ticketsFaq"
                      spy={true}
                      smooth={"easeInOutQuart"}
                      offset={-227}
                      duration={300}
                      className="uppercase"
                    >
                      Tickets
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      activeClass="active"
                      to="partnershipFaq"
                      href="partnershipFaq"
                      spy={true}
                      smooth={"easeInOutQuart"}
                      offset={-227}
                      duration={300}
                      className="uppercase"
                    >
                      Partnership
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      activeClass="active"
                      to="travelAndAccomodationFaq"
                      href="travelAndAccomodationFaq"
                      spy={true}
                      smooth={"easeInOutQuart"}
                      offset={-227}
                      duration={300}
                      className="uppercase"
                    >
                      Travel And Accomodation
                    </Link>
                  </li> */}
                  {/* <li className="menu-item">
                    <Link
                      activeClass="active"
                      to="covid19PreventionFaq"
                      href="covid19PreventionFaq"
                      spy={true}
                      smooth={"easeInOutQuart"}
                      offset={-227}
                      duration={300}
                      className="uppercase"
                    >
                      COVID-19 Prevention
                    </Link>
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-start-1 sm:col-start-2 lg:col-start-4 col-span-full sm:col-span-6 lg:col-span-7 pl-0 lg:pl-8">
            <section id="generalFaq" className="disclosureGrop flex flex-col">
              <h3 className="text-black-800 font-bevietnam-pro text-lg sm:text-xl font-bold uppercase">
                General
              </h3>
              <div className="supports-grid:grid gap-y-4 mt-4">
                <Disclosure
                  as="div"
                  defaultOpen="true"
                  className={`${Disclsre.disclosure}`}
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`${
                          Disclsre.disclosureHding
                        } disclosureIcons ${open ? "active" : "hide"}`}
                      >
                        What is Coinfest Asia 2023?
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-in-out"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition duration-100 ease-in-out"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                      >
                        <Disclosure.Panel
                          className={`${Disclsre.disclosureDesc}`}
                        >
                          <p>
                          Coinfest Asia is Asia's immersive web3 festival. Coinfest Asia 2023 converges Web2 and Web3 industries to explore real-world insights and valuable connections through an immersive festival experience.
                          </p>
                          <br />
                          <p>
                          Held at a casual clifftop venue in Bali - Indonesia, the event will be rather unique and not structured like a typical conference, giving all participants a platform to engage and network in a casual setting. Coinfest Asia 2023 is hosted by Coinvestasi, Indonesia’s #1 crypto media (an Indonesia Crypto Network company).
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className={`${Disclsre.disclosure}`}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`${
                          Disclsre.disclosureHding
                        } disclosureIcons ${open ? "active" : "hide"}`}
                      >
                        Who will attend Coinfest Asia 2023?
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-in-out"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition duration-100 ease-in-out"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                      >
                        <Disclosure.Panel
                          className={`${Disclsre.disclosureDesc}`}
                        >
                          <p>
                          Inviting all industry players from Web2 and Web3! This event is perfect for you who is a crypto and Web3 enthusiast, a fund manager, a product manager, an NFT creator, a brand partnership leader, a VC analyst, a program developer, an art & NFT collector, a marketing expert—everyone who is interested in gaining insight & networking in Web3 industry.
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className={`${Disclsre.disclosure}`}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`${
                          Disclsre.disclosureHding
                        } disclosureIcons ${open ? "active" : "hide"}`}
                      >
                        Where will Coinfest Asia 2023 be held?
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-in-out"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition duration-100 ease-in-out"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                      >
                        <Disclosure.Panel
                          className={`${Disclsre.disclosureDesc}`}
                        >
                          <p>
                          The venue is located in Jimbaran area. Find the exact location {" "}
                            <PostLink
                              url="https://bit.ly/ca23location"
                              title="here"
                            />
                            , or search for 'Coinfest Asia 2023', you will find the map and directions to get to our venue.
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className={`${Disclsre.disclosure}`}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`${
                          Disclsre.disclosureHding
                        } disclosureIcons ${open ? "active" : "hide"}`}
                      >
                        Are there any side events happening?
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-in-out"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition duration-100 ease-in-out"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                      >
                        <Disclosure.Panel
                          className={`${Disclsre.disclosureDesc}`}
                        >
                          <p>
                            Yes, there will be side events! From August 23rd until end of August, there will be various side events to attend during Coinfest Week. Check out what's happening {" "}
                              <PostLink
                                url="https://coinfest.asia/coinfest-week"
                                title="here."
                              />
                            If you'd like to host a side event with Coinfest Asia team, talk to our team {" "}
                              <PostLink
                                url="https://e7bao9msf39.typeform.com/to/IyLelRl5"
                                title="here."
                              />
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>
            </section>
            {/* <section id="ticketsFaq" className="disclosureGrop flex flex-col">
              <h3 className="text-black-800 font-bevietnam-pro text-lg sm:text-xl font-bold uppercase">
                Tickets
              </h3>
              <div className="supports-grid:grid gap-y-4 mt-4">
                <Disclosure
                  as="div"
                  defaultOpen="true"
                  className={`${Disclsre.disclosure}`}
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`${
                          Disclsre.disclosureHding
                        } disclosureIcons ${open ? "active" : "hide"}`}
                      >
                        Where can I buy tickets?
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-in-out"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition duration-100 ease-in-out"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                      >
                        <Disclosure.Panel
                          className={`${Disclsre.disclosureDesc}`}
                        >
                          <p>
                            Register online through{" "}
                            <PostLink
                              url="https://ticket.coinfest.asia/"
                              title="our Ticket page"
                            />{" "}
                            and follow the on-screen instructions to complete
                            the registration process. You will receive your
                            e-Ticket once your registration is confirmed.
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className={`${Disclsre.disclosure}`}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`${
                          Disclsre.disclosureHding
                        } disclosureIcons ${open ? "active" : "hide"}`}
                      >
                        What do I get from my ticket?
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-in-out"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition duration-100 ease-in-out"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                      >
                        <Disclosure.Panel
                          className={`${Disclsre.disclosureDesc}`}
                        >
                          <p>If you're buying the Bull ticket, you will get:</p>
                          <ul>
                             <li>
                              All Access From Festival Tickets
                            </li>
                             <li>
                              First Lane Registration
                            </li>
                             <li>Access To Bull Area</li>
                             <li>
                              Exclusive access to the speakers
                            </li>
                             <li>
                              Dedicated food & drinks on Cafe Area
                            </li>
                             <li>
                              Personalized business matchmaking
                            </li>
                             <li>
                              Access to selected VIP Coinfest Week events
                            </li>
                             <li>
                              Fast lane access to Official After Party
                            </li>
                             <li>
                              VIP shuttle to selected VIP Coinfest Week Events
                            </li>
                          </ul>
                          &nbsp;
                          <p>
                            If you're buying the Festival ticket, you will get:
                          </p>
                          <ul>
                           <li>
                          2-day pass to Coinfest Asia main venue
                        </li>
                         <li>
                          Access to main stage’s panel Discussions & conferences
                        </li>
                         <li>
                          Direct networking with Speakers at Breakout Area
                        </li>
                         <li>
                          Access to workshops, meet-ups, and side sessions
                        </li>
                         <li>
                          Light food & beverage for 2 days
                        </li>
                         <li>Merchandise</li>
                         <li>
                          Access to selected Coinfest Week events
                        </li>
                         <li>
                          Access to Official After Party
                        </li>
                          </ul>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className={`${Disclsre.disclosure}`}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`${
                          Disclsre.disclosureHding
                        } disclosureIcons ${open ? "active" : "hide"}`}
                      >
                        Can I buy tickets on the venue?
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-in-out"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition duration-100 ease-in-out"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                      >
                        <Disclosure.Panel
                          className={`${Disclsre.disclosureDesc}`}
                        >
                          <p>
                            You can only purchase your ticket through Coinfest
                            Asia website.
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className={`${Disclsre.disclosure}`}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`${
                          Disclsre.disclosureHding
                        } disclosureIcons ${open ? "active" : "hide"}`}
                      >
                        Can I get a refund if I can't attend the event?
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-in-out"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition duration-100 ease-in-out"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                      >
                        <Disclosure.Panel
                          className={`${Disclsre.disclosureDesc}`}
                        >
                          <p>
                            Tickets are <strong>not</strong> refundable.
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>
            </section> */}
            {/* <section
              id="partnershipFaq"
              className="disclosureGrop flex flex-col"
            >
              <h3 className="text-black-800 font-bevietnam-pro text-lg sm:text-xl font-bold uppercase">
                Partnership
              </h3>
              <div className="supports-grid:grid gap-y-4 mt-4">
                <Disclosure
                  as="div"
                  defaultOpen="true"
                  className={`${Disclsre.disclosure}`}
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`${
                          Disclsre.disclosureHding
                        } disclosureIcons ${open ? "active" : "hide"}`}
                      >
                        Why should my company sponsor Coinfest Asia 2023?
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-in-out"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition duration-100 ease-in-out"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                      >
                        <Disclosure.Panel
                          className={`${Disclsre.disclosureDesc}`}
                        >
                          <p>
                            Coinfest Asia 2023 brings industry players from Web2 and Web3 industries to experience an immersive Web3 festival unlike any other events. If you'd like to explore how you can leverage your brand at Coinfest Asia 2023, fill out the form {" "}
                            <PostLink
                              typePost="blank-link"
                              url="https://bit.ly/ca23sponsor"
                              title="here"
                            /> to book a call with our team.
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className={`${Disclsre.disclosure}`}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`${
                          Disclsre.disclosureHding
                        } disclosureIcons ${open ? "active" : "hide"}`}
                      >
                        How can I get involved at Coinfest Asia 2023?
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-in-out"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition duration-100 ease-in-out"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                      >
                        <Disclosure.Panel
                          className={`${Disclsre.disclosureDesc}`}
                        >
                          <p>
                            There are many opportunities for you to get involved
                            at Coinfest Asia 2023, get involved as:
                          </p>
                          <ul>
                            <li>Sponsor</li>
                            <li>Speaker</li>
                            <li>Media Partner</li>
                            <li>Community Partner</li>
                            <li>Host Side Events</li>
                          </ul>
                          <p>
                          and many more opportunities! Check out these opportunities{" "}
                            <PostLink url="/get-involved" title="here" />
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>
            </section> */}
            {/* <section
              id="travelAndAccomodationFaq"
              className="disclosureGrop flex flex-col"
            >
              <h3 className="text-black-800 font-bevietnam-pro text-lg sm:text-xl font-bold uppercase">
                Travel And Accomodation
              </h3>
              <div className="supports-grid:grid gap-y-4 mt-4">
                <Disclosure
                  as="div"
                  defaultOpen="true"
                  className={`${Disclsre.disclosure}`}
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`${
                          Disclsre.disclosureHding
                        } disclosureIcons ${open ? "active" : "hide"}`}
                      >
                        What is required to travel to Bali, Indonesia? Which
                        entrances? Are there quarantine or vaccination policies?
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-in-out"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition duration-100 ease-in-out"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                      >
                        <Disclosure.Panel
                          className={`${Disclsre.disclosureDesc}`}
                        >
                          <p>
                            There are currently no travel restrictions or
                            requirements for traveling to Bali. For a list of
                            details and recommendations, and to follow updates
                            to Indonesia’s guidelines, visit the Indonesia
                            Travel QnA{" "}
                            <PostLink
                              typePost="blank-link"
                              url="https://www.indonesia.travel/id/en/news/latest-travel-regulations-to-enter-bali"
                              title="here"
                            />{" "}
                            or visit the official government website for
                            official information.
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className={`${Disclsre.disclosure}`}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`${
                          Disclsre.disclosureHding
                        } disclosureIcons ${open ? "active" : "hide"}`}
                      >
                        Where should I stay in Bali?
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-in-out"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition duration-100 ease-in-out"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                      >
                        <Disclosure.Panel
                          className={`${Disclsre.disclosureDesc}`}
                        >
                          <p>
                            There are plenty of accommodations to choose from in
                            Bali, check out{" "}
                            <a
                              href="https://docs.google.com/presentation/d/e/2PACX-1vSd0hiOOIBbd_KcZyHeYeM6xEVCelzd3vB_TrycciZWUD7YsghNCZS0uKXdx2zJFO-dMlC-ATH6nuBn/pub?start=true&amp;loop=true&amp;delayms=3000"
                              target="_blank"
                              rel="noopener"
                            >
                              our accommodation partners (CTA ke page
                              Accommodation Partners)
                            </a>{" "}
                            to get a special rate for your stay during Coinfest
                            Asia.
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className={`${Disclsre.disclosure}`}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`${
                          Disclsre.disclosureHding
                        } disclosureIcons ${open ? "active" : "hide"}`}
                      >
                        How do i get to Coinfest Asia 2023 venue?
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-in-out"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition duration-100 ease-in-out"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                      >
                        <Disclosure.Panel
                          className={`${Disclsre.disclosureDesc}`}
                        >
                          <p>
                            Get to Coinfest Asia main venue & Coinfest Week events safely with our official transportation partner, Grab.
                          </p>
                          <p>
                            Use their special promo code to arrive safely with the best rate. Download on,{" "}
                            <PostLink
                              url="https://play.google.com/store/apps/details?id=com.grabtaxi.passenger"
                              title="Google Play"
                            />{" "}
                            |{" "}
                            <PostLink
                              url="https://apps.apple.com/id/app/grab-taxi-ride-food-delivery/id647268330?l=id"
                              title="App Store"
                            />
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className={`${Disclsre.disclosure}`}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`${
                          Disclsre.disclosureHding
                        } disclosureIcons ${open ? "active" : "hide"}`}
                      >
                        Where should I stay in Bali?
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-in-out"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition duration-100 ease-in-out"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                      >
                        <Disclosure.Panel
                          className={`${Disclsre.disclosureDesc}`}
                        >
                          <p>
                            There are plenty of accommodations to choose from in
                            Bali, check out{" "}
                            <PostLink url="/accommodation" title="here" /> to
                            get a special rate for your trip to Coinfest Asia.
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>
            </section> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default LyFAQ;
