import React from 'react';
import getConfig from 'next/config';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

const DropdownNavMenuNavbar = ({
  id = 'ca25NavBtnToggle',
  label = 'Dropdown',
  group = 'BtnToggle',
  elBtn = `ca25NavToggle_${group}Group`,
  elTarget = `caNavMenu-${group}Group`,
  listItems = [],
}) => {
  // @handle(open navmenu)
  const isOpen = (btn, target) => {
    const el = document.querySelector(`.${btn}`);
    let backdrop = document.querySelector('.cs-backdrop');
    const allElmntToggle = document.querySelectorAll('[data-dropdown]');
    const allMenu = document.querySelectorAll('.cs-half-menu');

    if (!el?.classList.contains('active')) {
      allElmntToggle?.forEach((b) => b?.classList.remove('active'));
      el.classList.add('active');
      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.classList.add('ca25DropdownBackdrop', 'cs-backdrop');
        backdrop.id = 'ca25DropdownBackdrop';
        backdrop.addEventListener('click', () => {
          allElmntToggle?.forEach((b) => b.classList.remove('active'));
          allMenu?.forEach((m) => m.classList.remove('active'));
          backdrop?.classList.remove('active');
          setTimeout(() => backdrop.remove(), 300);
        });
        document.body.appendChild(backdrop);
      }
    } else {
      el.classList.remove('active');
      if (backdrop) backdrop?.classList.remove('active');
      setTimeout(() => backdrop?.remove(), 300);
    }
    const elTarget = document.querySelector(`.${target}`);
    if (elTarget) {
      if (!elTarget?.classList.contains('active')) {
        allMenu?.forEach((m) => m.classList.remove('active'));
        elTarget.classList.add('active');
        setTimeout(() => backdrop?.classList.add('active'), 50);
      } else {
        elTarget.classList.remove('active');
      }
    }
  };

  return (
    <>
      <button
        id={`${id}${group}`}
        className={`ca25NavMenu-ToggleItems ${elBtn}`}
        data-dropdown
        onClick={(e) => {
          e.preventDefault();
          isOpen(elBtn, elTarget);
        }}
      >
        {label ?? 'Menu'}{' '}
        <svg
          className="ca25NavMenu-ToggleIcons ml-1 size-4 lg:ml-1.5 lg:size-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
      <ul className={`cs-half-menu ca25HalfNavMenu ${elTarget}`}>
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

export default DropdownNavMenuNavbar;
