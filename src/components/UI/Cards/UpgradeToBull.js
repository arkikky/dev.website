import React from 'react';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';

// # @get .config
const { publicRuntimeConfig } = getConfig();

// @lib
import { currencyConverter } from '@lib/helper/CalculateCart';

const UpgradeToBull = ({ attendee = '', isProducts = {} }) => {
  return (
    <>
      <Link
        className="group mt-14 flex w-full flex-col items-center justify-center rounded-2xl px-1 py-1 text-center text-black-800 bg-vip45"
        href={`${publicRuntimeConfig?.siteUrl}attendee-upgrade?vw=${attendee}`}
        title={`Upgrade to Bull Ticket ${publicRuntimeConfig?.siteAppName}`}
      >
        <div className="relative flex h-full w-full flex-col items-center justify-center rounded-xl bg-[linear-gradient(186deg,#404040_15%,#1F1F1F_100%)] px-6 pb-10 pt-11 sm:px-9">
          <div className="absolute inset-x-0 -top-[21px] bottom-auto z-[4] text-center lg:-top-[21px]">
            <Image
              className="mx-auto aspect-auto h-[46px] w-auto lg:h-11"
              src={'/assets/images/store/ca25LimitedOffer-VIP.svg'}
              alt={`Limited Offer VIP Ticket ${publicRuntimeConfig?.siteAppName}`}
              height={96}
              width={81}
              quality="87"
            />
          </div>

          <div className="block">
            <h2 className="mx-auto flex items-start gap-x-2 bg-clip-text text-[26px] font-semibold leading-initial text-transparent bg-vip45 sm:text-[38px]">
              BULL TICKET
            </h2>
            <span className="flex items-start gap-x-2 text-[26px] font-semibold leading-initial text-white sm:text-[38px]">
              ONLY{' '}
              <span>{`${currencyConverter((isProducts?.bullTickets?.priceSale ?? isProducts?.bullTickets?.price) - (isProducts?.festivalTickets?.priceSale ?? isProducts?.festivalTickets?.price))}`}</span>
              <span className="text-xl text-white/50 line-through sm:text-2xl">{`${currencyConverter(isProducts?.bullTickets?.priceSale ?? isProducts?.bullTickets?.price)}`}</span>
            </span>
          </div>
          <p className="mt-4 font-medium text-white">
            Secure your VIP pass to high-level networking with top project
            decision-makers
          </p>

          <div
            className={`relative mt-4 inline-flex w-full items-center justify-center overflow-hidden rounded-lg px-4 py-4 text-xl font-semibold uppercase leading-initial text-white bg-vipV2`}
          >
            Upgrade My Ticket
            <div className="absolute inset-0 flex h-full w-full justify-center blur-md [transform:skew(-13deg)_translateX(-100%)] group-hover:transition-[transform] group-hover:duration-[1.6s] group-hover:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-12 bg-white/40"></div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default UpgradeToBull;
