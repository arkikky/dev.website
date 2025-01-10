import React from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

const Breadcrumb = ({ theme = 'default', listBreadcrumb = [] }) => {
  const styles = {
    dark: { base: 'text-black-900 hover:text-primary', active: 'text-primary' },
    light: { base: 'text-white hover:text-white', active: 'text-white' },
    default: { base: 'text-gray-300 hover:text-white', active: 'text-primary' },
  };
  const currentStyle = styles[theme] || styles.default;
  const isPage = currentStyle.base;
  const isActivedPage = currentStyle.active;

  return (
    <>
      <ol className="flex items-center whitespace-nowrap">
        {listBreadcrumb?.map((gtRslt, i) => (
          <li
            className={twMerge(
              `group inline-flex items-center text-sm font-normal transition duration-300 ease-in-out`,
              isPage
            )}
            aria-current="page"
            key={i}
          >
            {i !== listBreadcrumb.length - 1 ? (
              <>
                <Link
                  className={twMerge(
                    'flex items-center text-sm transition duration-300 ease-in-out focus:outline-none group-hover:underline',
                    isPage
                  )}
                  href={gtRslt.url}
                  title={`Coinfest Asia 2025 ${gtRslt.label} Breadcrumb`}
                >
                  {gtRslt.label}
                </Link>

                <svg
                  className={`mx-2.5 size-4 shrink-0 ${theme === 'light' ? 'stroke-white/60' : 'stroke-black-900/50'} text-current`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
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
