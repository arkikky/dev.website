import React from 'react';
import Link from 'next/link';

const EmptyCart = ({}) => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center rounded-xl bg-gray-100 px-6 py-6 text-center text-black-800">
        <div className="mb-3 flex h-11 w-11 flex-col items-center justify-center overflow-hidden rounded-full bg-gray-400/20">
          <svg
            className="h-7 w-7 shrink-0 stroke-current"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 5V7V5ZM15 11V13V11ZM15 17V19V17ZM5 5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V10C3.53043 10 4.03914 10.2107 4.41421 10.5858C4.78929 10.9609 5 11.4696 5 12C5 12.5304 4.78929 13.0391 4.41421 13.4142C4.03914 13.7893 3.53043 14 3 14V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V14C20.4696 14 19.9609 13.7893 19.5858 13.4142C19.2107 13.0391 19 12.5304 19 12C19 11.4696 19.2107 10.9609 19.5858 10.5858C19.9609 10.2107 20.4696 10 21 10V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <span className="text-base font-medium">Your Cart is Empty!</span>
        <p className="mt-0.5 w-full px-0 text-sm font-light sm:px-8">
          Secure your tickets now and don’t miss out!
        </p>
        <Link
          href="/tickets"
          className="mt-7 flex flex-row items-center justify-center gap-x-2 rounded-md text-sm font-medium leading-initial text-black-800 underline"
        >
          Buy Tickets
          <svg
            className="size-4.5 shrink-0 rotate-180 transform"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default EmptyCart;
