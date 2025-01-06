import React from 'react';

// @components
import Breadcrumb from '@components/UI/Breadcrumb';
import Notifications from '@components/UI/Alerts/Notifications';

const Header = ({ media = 'xl' }) => {
  return (
    <>
      <header
        className={`${media === 'xl' ? 'hidden xl:block' : 'block xl:hidden'} w-full`}
      >
        <div className="mb-5 block w-full">
          <h1 className="text-2xl font-semibold text-black-900 sm:text-3xl">
            Checkout
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
                  label: 'Tickets',
                  url: '/tickets',
                },
                {
                  label: 'Checkout',
                  url: '/checkout',
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
              <path d="M12 16h.01" />
              <path d="M12 8v4" />
              <path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" />
            </svg>
          }
          label={`<p><strong>Please fill in the attendee's details with their actual information.</strong> Ticket transfers are not allowed once the purchase is finalized.</p>`}
          type="info"
        />
      </header>
    </>
  );
};

export default Header;
