import React from "react";
import getConfig from "next/config";
import Head from "next/head";
import Link from "next/link";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from "@components/Container";

// @layouts
import BannerFooter from "@layouts/Banner/BannerFooter";

const TermAndConditions = () => {
  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Terms & Conditions | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Terms & Conditions | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          name="description"
          content={
            "Coinfest immerses you directly into adoption, innovation, and emerging markets in Asia. Join the immersive Web3 festival! Bali - August 2024"
          }
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Terms & Conditions | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="og:description"
          content={
            "Coinfest immerses you directly into adoption, innovation, and emerging markets in Asia. Join the immersive Web3 festival! Bali - August 2024"
          }
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="twitter:title"
          content={`Terms & Conditions | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="twitter:description"
          content={
            "Coinfest immerses you directly into adoption, innovation, and emerging markets in Asia. Join the immersive Web3 festival! Bali - August 2024"
          }
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
      </Head>

      {/* @main */}
      <main className="relative pt-[169px] xl:pt-[139px] 2xl:pt-[185px]">
        <Container>
          <div className="relative grid-cols-4 gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
            <div className="col-span-full col-start-1 sm:col-span-10 sm:col-start-2">
              <div className="ca2024ArtcleFrmattd mb-14 font-bevietnamPro text-base font-light leading-relaxed text-black-900 sm:mb-0 xl:mb-24">
                <h1 className="mb-12 text-start sm:mb-18 sm:text-center">
                  TERMS & CONDITIONS
                </h1>
                <h2>General Regulations</h2>
                <p>
                  Welcome to Coinfest Asia 2024! These terms and conditions
                  outline the rules and regulations for the use of Coinfest Asia
                  2024's Website, located at{" "}
                  <Link href="https://coinfest.asia">
                    https://coinfest.asia
                  </Link>
                  . By accessing this website we assume you accept these terms
                  and conditions. Do not continue to use Coinfest Asia 2024 if
                  you do not agree to take all of the terms and conditions
                  stated on this page. The following terminology applies to
                  these Terms and Conditions, Privacy Statement and Disclaimer
                  Notice and all Agreements: "Client", "You" and "Your" refers
                  to you, the person log on this website and compliant to the
                  Company’s terms and conditions. "The Company", "Ourselves",
                  "We", "Our" and "Us", refers to our Company. "Party",
                  "Parties", or "Us", refers to both the Client and ourselves.
                  All terms refer to the offer, acceptance and consideration of
                  payment necessary to undertake the process of our assistance
                  to the Client in the most appropriate manner for the express
                  purpose of meeting the Client’s needs in respect of provision
                  of the Company’s stated services, in accordance with and
                  subject to, prevailing law of Netherlands. Any use of the
                  above terminology or other words in the singular, plural,
                  capitalization and/or he/she or they, are taken as
                  interchangeable and therefore as referring to same.
                </p>
                &nbsp;
                <p>
                  By purchasing a ticket for COINFEST ASIA 2024, Event Attendee
                  has agreed to all applicable Terms and Conditions. All forms
                  of violation of the terms and conditions will be dealt with
                  strictly.
                </p>
                <ul>
                  <li>
                    Purchased tickets cannot be exchanged, refunded, or
                    canceled.
                  </li>
                  <li>
                    Tickets are only valid if they are purchased following the
                    procedure that has been determined by the online purchase
                    through electronic/online transactions on the Organizer’s
                    official website or ticket box appointed by the Organizer
                    (authorized ticket box). Otherwise Event’s attendees will
                    not be able to verify if the e-ticket is an authorized or
                    unauthorized copy.
                  </li>
                  <li>
                    Each e-ticket has a unique QR code and is only valid for one
                    person. E-ticket can only be used once. E-ticket duplication
                    for multiple entries to the event are prohibited.
                  </li>
                  <li>
                    Your ticket purchase constitutes a personal license to
                    attend COINFEST ASIA 2024 conference and festival. By
                    purchasing a ticket, you agree to your personal data
                    collection and usage.
                  </li>
                  <li>
                    E-ticket must be redeemed with a pass during the redemption
                    period.
                  </li>
                  <li>
                    The time and place for pass redemption will be informed via
                    Coinfest Asia’s social media accounts and official website.
                  </li>
                </ul>
                <h2>General Policies</h2>
                <ul>
                  <li>
                    Organizer reserves the right to take action to prohibit
                    entry to the venue or exchange the E-ticket for actual
                    ticket/pass on the e-ticket with QR code that has been used
                    previously by others.
                  </li>
                  <li>
                    Organizer reserves the right to process and litigate in
                    accordance with Indonesia regulations through civil criminal
                    proceedings against people who make illegal ticket
                    purchases, including but not limited to counterfeiting or
                    copying a valid ticket or get a ticket in a way that do not
                    match those specified by the organizer as in item (a) of
                    this provision.
                  </li>
                  <li>
                    Organizer is not responsible for any negligence that
                    resulted in E-ticket / pass being misplaced or lost (or in
                    the mastery of others’ hands) and is used to enter the venue
                    by others.
                  </li>
                  <li>
                    Organizer has the right to prohibit visitors from entering
                    the event location if visitors do not have a valid ticket.
                  </li>
                  <li>
                    Organizer reserves the right to change the layout of the
                    audience in the event location at any time.
                  </li>
                </ul>
                <h2>Terms and Conditions Coinfest Asia Ticket</h2>
                <ul>
                  <li>Coinfest Asia is organized by Coinvestasi.com</li>
                  <li>
                    Each ticket purchased must be registered by including legal
                    and valid name
                  </li>
                  <li>
                    Ticket users legally can only use each ticket one time.
                    Duplicating the ticket is not allowed and is illegal.
                  </li>
                  <li>
                    The ticket uses a unique QR code, is used for one time use
                    and is only valid for one person.
                  </li>
                  <li>
                    Organizer reserves the right to take any reasonable and
                    necessary measures to prohibit/decline/prevent
                    visitors/ticket users from entering the event venue if the
                    e-ticket with the QR Code has been previously used by
                    someone else.
                  </li>
                  <li>
                    Ticket prices are subject to change without prior notice.
                  </li>
                  <li>
                    The number of tickets and capacity available for each
                    category is LIMITED.
                  </li>
                  <li>
                    Ticket sales are made on a "first buy first serve" basis.
                  </li>
                  <li>Ticket prices include taxes and services.</li>
                  <li>
                    Tickets that has been purchased cannot be exchanged nor
                    refunded for any reason.
                  </li>
                  <li>
                    Organizer reserves the right to process and litigate in
                    accordance with Indonesian regulations either in civil or
                    criminal proceedings against people who got tickets in ways
                    that are not valid, including but not limited to
                    counterfeiting or copying a valid ticket or buying a ticket
                    in a way that do not match those specified by the Organizer.
                  </li>
                  <li>
                    Organizer is not responsible for negligence of the ticket
                    purchaser / owner that resulted in the purchaser’s ticket
                    falling into the hands of others (in the mastery of others)
                    to be used as an admission that eliminates the ticket
                    purchaser from entering the venue.
                  </li>
                  <li>
                    Ticket purchasers and ticket users hereby declares to waive
                    all legal rights to file a counterclaim through the court or
                    any other legally permitted means to sue the Organizer in
                    the event of an event cancellation which is unilaterally
                    carried out by the artist or the government or for other
                    reasons beyond the control and the will of the Organizer.
                  </li>
                  <li>
                    All ticket buyers and visitors are deemed to have read,
                    understood and agreed to the Terms and Conditions for the
                    Event.
                  </li>
                </ul>
                <h2>Cookies</h2>
                <p>
                  We employ the use of cookies. By accessing Coinfest Asia 2024,
                  you agreed to use cookies in agreement with the Coinfest Asia
                  2024's Privacy Policy.
                </p>
                <p>
                  Most interactive websites use cookies to let us retrieve the
                  user’s details for each visit. Cookies are used by our website
                  to enable the functionality of certain areas to make it easier
                  for people visiting our website. Some of our
                  affiliate/advertising partners may also use cookies.
                </p>
                <h2>License</h2>
                <p>
                  Unless otherwise stated, Coinfest Asia 2024 and/or its
                  licensors own the intellectual property rights for all
                  material on Coinfest Asia 2024. All intellectual property
                  rights are reserved. You may access this from Coinfest Asia
                  2024 for your own personal use subjected to restrictions set
                  in these terms and conditions. You must not:
                </p>
                <ul>
                  <li>Republish material from Coinfest Asia 2024</li>
                  <li>
                    Sell, rent or sub-license material from Coinfest Asia 2024
                  </li>
                  <li>
                    Reproduce, duplicate or copy material from Coinfest Asia
                    2024
                  </li>
                  <li>Redistribute content from Coinfest Asia 2024</li>
                </ul>
                &nbsp;
                <p>
                  This Agreement shall begin on the date hereof. Parts of this
                  website offer an opportunity for users to post and exchange
                  opinions and information in certain areas of the website.
                  Coinfest Asia 2024 does not filter, edit, publish or review
                  Comments prior to their presence on the website. Comments do
                  not reflect the views and opinions of Coinfest Asia 2024,its
                  agents and/or affiliates. Comments reflect the views and
                  opinions of the person who post their views and opinions. To
                  the extent permitted by applicable laws, Coinfest Asia 2024
                  shall not be liable for the Comments or for any liability,
                  damages or expenses caused and/or suffered as a result of any
                  use of and/or posting of and/or appearance of the Comments on
                  this website. Coinfest Asia 2024 reserves the right to monitor
                  all Comments and to remove any Comments which can be
                  considered inappropriate, offensive or causes breach of these
                  Terms and Conditions. You warrant and represent that:
                </p>
                <ul>
                  <li>
                    You are entitled to post the Comments on our website and
                    have all necessary licenses and consents to do so;
                  </li>
                  <li>
                    The Comments do not invade any intellectual property right,
                    including without limitation copyright, patent or trademark
                    of any third party;
                  </li>
                  <li>
                    The Comments do not contain any defamatory, libelous,
                    offensive, indecent or otherwise unlawful material which is
                    an invasion of privacy
                  </li>
                  <li>
                    The Comments will not be used to solicit or promote business
                    or custom or present commercial activities or unlawful
                    activity.
                  </li>
                </ul>
                &nbsp;
                <p>
                  You hereby grant Coinfest Asia 2024 a non-exclusive license to
                  use, reproduce, edit and authorize others to use, reproduce
                  and edit any of your Comments in any and all forms, formats or
                  media.
                </p>
                <h2>Hyperlinking to our Content</h2>
                <p>
                  The following organizations may link to our Website without
                  prior written approval:
                </p>
                <ul>
                  <li>Government agencies;</li>
                  <li>Search engines;</li>
                  <li>News organizations;</li>
                  <li>
                    Online directory distributors may link to our Website in the
                    same manner as they hyperlink to the Websites of other
                    listed businesses; and
                  </li>
                  <li>
                    System wide Accredited Businesses except soliciting
                    non-profit organizations, charity shopping malls, and
                    charity fundraising groups which may not hyperlink to our
                    Web site.
                  </li>
                </ul>
                &nbsp;
                <p>
                  These organizations may link to our home page, to publications
                  or to other Website information so long as the link: (a) is
                  not in any way deceptive; (b) does not falsely imply
                  sponsorship, endorsement or approval of the linking party and
                  its products and/or services; and (c) fits within the context
                  of the linking party’s site. We may consider and approve other
                  link requests from the following types of organizations:
                </p>
                <ul>
                  <li>
                    commonly-known consumer and/or business information sources;
                  </li>
                  <li>dot.com community sites;</li>
                  <li>associations or other groups representing charities;</li>
                  <li>online directory distributors;</li>
                  <li>internet portals;</li>
                  <li>accounting, law and consulting firms; and</li>
                  <li>educational institutions and trade associations.</li>
                </ul>
                &nbsp;
                <p>
                  We will approve link requests from these organizations if we
                  decide that: (a) the link would not make us look unfavorably
                  to ourselves or to our accredited businesses; (b) the
                  organization does not have any negative records with us; (c)
                  the benefit to us from the visibility of the hyperlink
                  compensates the absence of Coinfest Asia 2024; and (d) the
                  link is in the context of general resource information. These
                  organizations may link to our home page so long as the link:
                  (a) is not in any way deceptive; (b) does not falsely imply
                  sponsorship, endorsement or approval of the linking party and
                  its products or services; and (c) fits within the context of
                  the linking party’s site. If you are one of the organizations
                  listed in paragraph 2 above and are interested in linking to
                  our website, you must inform us by sending an e-mail to
                  Coinfest Asia 2024. Please include your name, your
                  organization name, contact information as well as the URL of
                  your site, a list of any URLs from which you intend to link to
                  our Website, and a list of the URLs on our site to which you
                  would like to link. Wait 2-3 weeks for a response. Approved
                  organizations may hyperlink to our Website as follows:
                </p>
                <ul>
                  <li>By use of our corporate name; or</li>
                  <li>
                    By use of the uniform resource locator being linked to; or
                  </li>
                  <li>
                    By use of any other description of our Website being linked
                    to that makes sense within the context and format of content
                    on the linking party’s site.
                  </li>
                </ul>
                &nbsp;
                <p>
                  No use of Coinfest Asia 2024's logo or other artwork will be
                  allowed for linking absent a trademark license agreement.
                </p>
                <h2>iFrames</h2>
                <p>
                  Without prior approval and written permission, you may not
                  create frames around our Webpages that alter in any way the
                  visual presentation or appearance of our Website.
                </p>
                <h2>Content Liability</h2>
                <p>
                  We shall not be hold responsible for any content that appears
                  on your Website. You agree to protect and defend us against
                  all claims that is rising on your Website. No link(s) should
                  appear on any Website that may be interpreted as libelous,
                  obscene or criminal, or which infringes, otherwise violates,
                  or advocates the infringement or other violation of, any third
                  party rights.
                </p>
                <h2>Reservation of Rights</h2>
                <p>
                  We reserve the right to request that you remove all links or
                  any particular link to our Website. You approve to immediately
                  remove all links to our Website upon request. We also reserve
                  the right to amen these terms and conditions and it’s linking
                  policy at any time. By continuously linking to our Website,
                  you agree to be bound to and follow these linking terms and
                  conditions.
                </p>
                <h2>Removal of links from our website</h2>
                <p>
                  If you find any link on our Website that is offensive for any
                  reason, you are free to contact and inform us any moment. We
                  will consider requests to remove links but we are not
                  obligated to or so or to respond to you directly. We do not
                  ensure that the information on this website is correct, we do
                  not warrant its completeness or accuracy; nor do we promise to
                  ensure that the website remains available or that the material
                  on the website is kept up to date.
                </p>
                <h2>Disclaimer</h2>
                <p>
                  To the maximum extent permitted by applicable law, we exclude
                  all representations, warranties and conditions relating to our
                  website and the use of this website. Nothing in this
                  disclaimer will:
                </p>
                <ul>
                  <li>
                    limit or exclude our or your liability for death or personal
                    injury;
                  </li>
                  <li>
                    limit or exclude our or your liability for fraud or
                    fraudulent misrepresentation;
                  </li>
                  <li>
                    limit any of our or your liabilities in any way that is not
                    permitted under applicable law; or
                  </li>
                  <li>
                    exclude any of our or your liabilities that may not be
                    excluded under applicable law.
                  </li>
                </ul>
                &nbsp;
                <p>
                  The limitations and prohibitions of liability set in this
                  Section and elsewhere in this disclaimer: (a) are subject to
                  the preceding paragraph; and (b) govern all liabilities
                  arising under the disclaimer, including liabilities arising in
                  contract, in tort and for breach of statutory duty. As long as
                  the website and the information and services on the website
                  are provided free of charge, we will not be liable for any
                  loss or damage of any nature.
                </p>
              </div>
            </div>
          </div>
        </Container>

        {/* @banner-footer */}
        <BannerFooter />
      </main>
    </>
  );
};

export default TermAndConditions;
