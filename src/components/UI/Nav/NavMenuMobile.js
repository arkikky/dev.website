import React from 'react';
import getConfig from 'next/config';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import DropdownMenuMobile from '@components/UI/Nav/DropdownMenuMobile';

const NavMenuMobile = ({ id = 'ca25NavMenuMobile' }) => {
  return (
    <>
      <ul id={id} className="ca25NavMenuMobile">
        <li className="ca25NavMenu-Items ca25NavMenu-LabelItems">
          <Link
            href="/get-involved/sponsorship"
            title={`${publicRuntimeConfig?.siteAppName} Request Sponsorship Prospectus`}
          >
            Request Sponsorship Prospectus
          </Link>
        </li>
        <li className="ca25NavMenu-Items">
          <DropdownMenuMobile
            label="Get Involved"
            group="GetInvolved"
            listItems={[
              {
                url: '/get-involved/speakers',
                label: 'Speaker',
                type: 'link',
              },
              {
                url: '/get-involved/sponsorship',
                label: 'Request Sponsorship Prospectus',
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
                label: 'Send General Inquiry',
                type: 'open-link',
              },
            ]}
          />
        </li>
        <li className="ca25NavMenu-Items ca25NavMenu-LabelItems">
          <Link
            id={'tickets-nav'}
            href="/tickets"
            title={`${publicRuntimeConfig?.siteAppName} Tickets`}
            data-layer-id={'tickets-nav'}
          >
            Tickets
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavMenuMobile;
