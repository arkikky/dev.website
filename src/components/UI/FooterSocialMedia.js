import React from 'react';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';

// # @get .config
const { publicRuntimeConfig } = getConfig();

const FooterSocialMedia = ({ list = [] }) => {
  return (
    <>
      <ul className="relative mt-4 flex flex-row pl-0 lg:mt-0">
        {list?.map((gtRslt, i) => (
          <li className="mr-4 last:mr-0" key={i}>
            <Link
              className="outline-none focus-visible:outline-none"
              href={gtRslt.url}
              title={`List Social Media ${publicRuntimeConfig.siteAppName}`}
              aria-label={`List Social Media ${publicRuntimeConfig.siteAppName}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="mx-auto my-auto aspect-auto h-6 w-6"
                src={gtRslt.icons}
                alt={`${publicRuntimeConfig.siteAppName} (${gtRslt.label} - Icon Social Media)`}
                aria-label={`Icon Social Media ${publicRuntimeConfig.siteAppName}`}
                height={24}
                width={24}
                quality="87"
                fetchPriority="auto"
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterSocialMedia;
