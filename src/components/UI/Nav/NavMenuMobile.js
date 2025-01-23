import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import getConfig from 'next/config';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import DropdownMenuMobile from '@components/UI/Nav/DropdownMenuMobile';

const NavMenuMobile = ({ id = 'ca25NavMenuMobile' }) => {
  const router = useRouter();
  // @hndle(change route)
  useEffect(() => {
    const hndlChangeRoute = () => {
      const elBtn = document.querySelector('.cs-button-nav');
      if (elBtn?.classList.contains('deactive')) {
        elBtn?.classList.remove('deactive');
      }
      const navMobile = document.querySelector('[data-nav-mobile]');
      if (navMobile) {
        navMobile?.classList.remove('active');
      }
      let backdrop = document.querySelector('.cs-backdrop');
      if (backdrop) {
        backdrop?.classList.remove('active');
        setTimeout(() => backdrop?.remove(), 300);
      }
    };
    router.events.on('routeChangeComplete', hndlChangeRoute);
    hndlChangeRoute();
    return () => {
      router.events.off('routeChangeComplete', hndlChangeRoute);
    };
  }, [router.events]);

  return (
    <>
      <ul id={id} className="ca25NavMenuMobile">
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
            Tickets
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavMenuMobile;
