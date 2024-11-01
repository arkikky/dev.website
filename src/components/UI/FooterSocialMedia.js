import React, { useState } from 'react';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';

// # @get .config
const { publicRuntimeConfig } = getConfig();

const FooterSocialMedia = ({ list = [] }) => {
  const [isListSocialMedia, setListSocialMedia] = useState(list);

  return (
    <>
      <ul className="relative mt-4 flex flex-row pl-0 lg:mt-0">
        {isListSocialMedia?.map((gtRslt, i) => (
          <li className="mr-4 last:mr-0" key={i}>
            <Link
              className="outline-none focus-visible:outline-none"
              href={gtRslt.url}
              title={gtRslt.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="mx-auto my-auto aspect-auto h-6 w-6"
                src={gtRslt.icons}
                alt={`${publicRuntimeConfig.siteAppName} (${gtRslt.label} - Social Media)`}
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
