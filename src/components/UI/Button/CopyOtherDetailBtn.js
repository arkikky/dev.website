import React from 'react';

// @components
import Badge from '@components/UI/Badge';

const CopyOtherDetailBtn = ({
  items = {
    firstItems: null,
    attendee: 1,
    group: null,
  },
  onEventClick,
}) => {
  return (
    <>
      <div className="mr-0 mt-3 lg:mt-0">
        <button
          id="ca25Btn_CopyOtherDetailCheckout"
          type="button"
          aria-label="Coinfest Asia 2025 Button Copy Other Detail"
          aria-labelledby="Coinfest Asia 2025 Button Copy Other Detail"
          onClick={(e) => {
            e.preventDefault();
            onEventClick(
              [
                `#ca25Form_CountryAttndee${items?.attendee}_${items?.group}Checkout`,
                `#ca25Form_WhatTypeOfConnectionsAttndee${items?.attendee}_${items?.group}Checkout`,
                `#ca25Form_DidYouHearAboutAttndee${items?.attendee}_${items?.group}Checkout`,
              ],
              (items = {
                firstItems: items?.firstItems,
                attendee: items?.attendee,
                group: items?.group,
              })
            );
          }}
          className="text-black-900"
        >
          <Badge
            label="Some details are the same"
            type="secondary"
            withHover={true}
            icons={
              <svg
                className="size-4 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            }
          />
        </button>
      </div>
    </>
  );
};

export default CopyOtherDetailBtn;
