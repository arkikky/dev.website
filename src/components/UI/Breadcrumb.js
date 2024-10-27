import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

const Breadcrumb = ({ theme = 'default', listBreadcrumb = [] }) => {
  const [isBreadcrumb, setBreadcrumb] = useState(listBreadcrumb);

  const setPage = {
    dark: 'text-black-900 hover:text-secondary',
    light: 'text-white hover:text-secondary',
    default: 'text-gray-300 hover:text-white',
  };
  const setActivedPage = {
    dark: 'text-secondary',
    light: 'text-secondary',
    default: 'text-secondary',
  };

  const isPage = setPage[theme] || setPage.default;
  const isActivedPage = setActivedPage[theme] || setActivedPage.default;

  return (
    <>
      <ol className="flex items-center whitespace-nowrap">
        {isBreadcrumb?.map((gtRslt, i) => (
          <li
            className={twMerge(
              `group inline-flex items-center text-sm font-normal transition duration-300 ease-in-out`,
              isPage
            )}
            aria-current="page"
            key={i}
          >
            {i !== isBreadcrumb.length - 1 ? (
              <>
                <Link
                  className={twMerge(
                    'flex items-center text-sm transition duration-300 ease-in-out focus:outline-none group-hover:underline',
                    isPage
                  )}
                  href={gtRslt.url}
                >
                  {gtRslt.label}
                </Link>

                <svg
                  className={twMerge(
                    'mx-2 size-4 shrink-0 text-current',
                    isPage
                  )}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </>
            ) : (
              <>
                <span
                  className={twMerge(
                    'truncate font-semibold underline',
                    isActivedPage
                  )}
                >
                  {gtRslt.label}
                </span>
              </>
            )}
          </li>
        ))}
      </ol>
    </>
  );
};

export default Breadcrumb;
