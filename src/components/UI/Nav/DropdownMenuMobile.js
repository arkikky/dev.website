import React from 'react';
import getConfig from 'next/config';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

const DropdownMenuMobile = ({
  id = 'ca25NavMobileBtnToggle',
  label = 'Dropdown',
  group = 'MobileBtnToggle',
  elBtn = `ca25NavMobileToggle_${group}Group`,
  elTarget = `caNavMobileMenu-${group}Group`,
  listItems = [],
}) => {
  const isDropdownNav = (btn, target) => {
    const el = document.querySelector(`.${btn}`);
    const allElmntToggle = document.querySelectorAll('[data-dropdown]');
    const allMenu = document.querySelectorAll('.cs-half-menu-mobile');

    if (!el.classList.contains('active')) {
      allElmntToggle?.forEach((b) => b.classList.remove('active'));
      el?.classList.add('active');
    } else {
      el?.classList.remove('active');
    }
    const elTarget = document.querySelector(`.${target}`);
    if (!elTarget?.classList.contains('active')) {
      allMenu?.forEach((m) => m.classList.remove('active'));
      elTarget?.classList.add('active');
    } else {
      elTarget?.classList.remove('active');
    }
  };

  return (
    <>
      <button
        id={`${id}${group}`}
        className={`ca25NavMenuMobile-ToggleItems ca25NavMenu-LabelItems ${elBtn}`}
        data-dropdown
        onClick={(e) => {
          e.preventDefault();
          isDropdownNav(elBtn, elTarget);
        }}
      >
        {label ?? 'Menu'}{' '}
        <svg
          className="ca24NavMenuMobile-ToggleIcons ml-1.5 size-[28px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
      <ul className={`cs-half-menu-mobile ca25HalfMobileNavMenu ${elTarget}`}>
        {listItems?.map((rslt, i) => (
          <li key={i}>
            {rslt?.type !== 'open-link' ? (
              <Link
                href={rslt.url ?? ''}
                title={`${publicRuntimeConfig?.siteAppName} ${rslt.label ?? 'Menu'}`}
              >
                {rslt.label ?? 'Menu'}
              </Link>
            ) : (
              <Link
                href={rslt.url ?? ''}
                title={`${publicRuntimeConfig?.siteAppName} ${rslt.label ?? 'Menu'}`}
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                {rslt.label ?? 'Menu'}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default DropdownMenuMobile;
