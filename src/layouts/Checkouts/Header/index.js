import React from 'react';

// @components
import Breadcrumb from '@components/UI/Breadcrumb';
import Notifications from '@components/UI/Alerts/Notifications';

const Header = () => {
  return (
    <>
      <header className="block w-full">
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
              className="mt-0.5 size-4 lg:size-5"
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
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          }
          label={`<p><strong>Please fill in the attendee</strong> details with the actual data of the person attending the Event. Ticket transfers are not allowed once the purchase is finalized.</p>`}
          type="info"
        />
      </header>
    </>
  );
};

export default Header;
