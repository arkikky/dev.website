import React from 'react';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';

// # @get .config
const { publicRuntimeConfig } = getConfig();

const FooterSocialMedia = ({ list = [] }) => {
  return (
    <>
      <ul className="relative mt-5 flex flex-row pl-0 lg:mt-0">
        {list?.map((gtRslt, i) => (
          <li className="mr-4 last:mr-0" key={i}>
            <Link
              className="outline-none focus-visible:outline-none"
              href={gtRslt?.url || '#'}
              title={`${publicRuntimeConfig?.siteAppName} Social Media ${gtRslt?.label}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                className="mx-auto my-auto aspect-auto h-6 w-6"
                src={gtRslt?.icons}
                alt={`${publicRuntimeConfig?.siteAppName} Social Media ${gtRslt?.label} Icons`}
                height={24}
                width={24}
                quality="87"
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterSocialMedia;
