import React from 'react';

// @components
import Breadcrumb from '@components/UI/Breadcrumb';
import Notifications from '@components/UI/Alerts/Notifications';

const HeaderUpgrade = ({ attendeeId = null, media = 'xl' }) => {
  return (
    <>
      <header
        className={`${media === 'xl' ? 'hidden xl:block' : 'block xl:hidden'} w-full`}
      >
        <div className="mb-5 block w-full">
          <h1 className="text-2xl font-semibold text-black-900 sm:text-3xl">
            Attendee Detail
          </h1>
          <div className="mt-2 block">
            <Breadcrumb
              theme="dark"
              listBreadcrumb={[
                {
                  label: 'Home',
                  url: '/',
                },
                {
                  label: 'Attendee Detail',
                  url: `/attendee-detail?vw=${attendeeId}`,
                },
                {
                  label: 'Upgrade to Bull',
                  url: '/upgrade-to-bull',
                },
              ]}
            />
          </div>
        </div>

        {/* @notification */}
        <Notifications
          icons={
            <svg
              className="mt-0.5 size-4 shrink-0 lg:size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
          }
          label={`<p><strong>Please Update the Attendee Details</strong> with the correct information of the person attending the event. <strong>Note</strong> that data can only be updated once, so please review all information carefully before submitting.</p>`}
          type="warning"
        />
      </header>
    </>
  );
};

export default HeaderUpgrade;
