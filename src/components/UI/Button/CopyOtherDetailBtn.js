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
          aria-label="Button for Copy Other Detail(Checkouts)"
          aria-labelledby="Button for Copy Other Detail(Checkouts)"
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
            withUnderline={true}
            icons={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="M12 11h4" />
                <path d="M12 16h4" />
                <path d="M8 11h.01" />
                <path d="M8 16h.01" />
              </svg>
            }
          />
        </button>
      </div>
    </>
  );
};

export default CopyOtherDetailBtn;
