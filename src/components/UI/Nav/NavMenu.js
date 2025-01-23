import React from 'react';
import getConfig from 'next/config';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import DropdownNavMenuNavbar from '@components/UI/Nav/DropdownNavMenuNavbar';

const NavMenu = () => {
  return (
    <>
      <ul className="ca25NavMenu">
        <li className="ca25NavMenu-Items ca25NavMenu-LabelItems">
          <Link
            href="/get-involved/sponsorship"
            title={`${publicRuntimeConfig?.siteAppName} Enquire for Sponsorship`}
          >
            {`Enquire for Sponsorship`}
          </Link>
        </li>
        <li className="ca25NavMenu-Items">
          <DropdownNavMenuNavbar
            id="ca25NavBtnToggle-GetInvolved"
            label="Get Involved"
            group="GetInvolved"
            listItems={[
              {
                url: '/get-involved/speakers',
                label: 'Speaker',
                type: 'link',
              },
              {
                url: '/get-involved/sponsor',
                label: 'Sponsor',
                type: 'link',
              },
              {
                url: '/get-involved/partner-as-media',
                label: 'Partner as Media',
                type: 'link',
              },
              {
                url: '/get-involved/become-an-affiliate',
                label: 'Become an Affiliate',
                type: 'link',
              },
              {
                url: '/get-involved/partner-as-community',
                label: 'Partner as Community',
                type: 'link',
              },
              {
                url: 'mailto:partner@coinfest.asia',
                label: 'Send Inquiry',
                type: 'open-link',
              },
            ]}
          />
        </li>
        <li className="ca25NavMenu-Items ca25NavMenu-LabelItems">
          <Link
            href="/tickets"
            title={`${publicRuntimeConfig?.siteAppName} Tickets`}
          >
            {`Tickets`}
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavMenu;
