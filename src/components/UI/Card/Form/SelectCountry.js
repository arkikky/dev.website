// 'use client';
import React, { useState } from 'react';

const SelectCountry = ({
  id = 'tktCA25Form_InputCountrySelect',
  addClassName = '',
  ariaLabel = '',
  listSelect = [],
  withIcons = false,
  config = [],
}) => {
  const [isListSelect, setListSelect] = useState(listSelect);

  // @method
  // useEffect(() => {
  //   const loadHSSelect = async () => {
  //     // @import preline when the component mounts
  //     await import('preline/dist/select');

  //     const getElmnts = window.HSSelect?.getInstance(`#${id}`);

  //     if (getElmnts) {
  //       getElmnts.setValue('Indonesia');
  //     }
  //   };

  //   loadHSSelect();

  //   return () => {
  //     undefined;
  //   };
  // }, []);

  return (
    <>
      <select
        id={id}
        className={`form-select hidden ${addClassName !== '' && addClassName}`}
        aria-describedby={ariaLabel}
        data-hs-select={JSON.stringify({
          hasSearch: true,
          searchLimit: 6,
          preventSearchFocus: true,
          searchPlaceholder: 'Search...',
          searchClasses:
            'block w-full text-sm border border-solid border-gray-200 rounded-lg focus:ring-0 focus:outline-none before:absolute before:inset-0 before:z-[1] py-2 px-3',
          searchWrapperClasses: 'bg-white sticky py-2 top-0 inset-x-0',
          searchNoResultClasses: 'text-gray-400 text-sm',
          placeholder: 'Choose a country...',
          toggleTag:
            '<button type="button" aria-expanded="false"><span class="me-1.5" data-icon></span><span class="text-black-900" data-title></span></button>',
          toggleClasses:
            'hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 hs-error:border-red-500 relative py-4 ps-4 pe-9 flex gap-x-2 text-nowrap w-full cursor-pointer bg-white border border-gray-200 font-normal rounded-lg text-start text-sm focus:outline-none focus:ring-2 focus:ring-blue-500',
          dropdownClasses:
            'mt-0 z-50 w-full max-h-72 px-2 pt-0 pb-2 bg-white border border-gray-200 rounded-xl overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300',
          optionClasses:
            'py-3 px-2.5 w-full text-sm text-black-900 font-normal cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50',
          optionTemplate:
            '<div class="flex items-center"><div class="me-2.5" data-icon></div><div><div class="hs-selected:font-medium text-sm text-black-900 " data-title></div></div><div class="ms-auto mr-1 "><span class="hidden hs-selected:block"><svg class="shrink-0 size-4.5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg></span></div></div>',
          extraMarkup: [
            '<div class="hidden hs-error:block absolute top-1/2 end-10 -translate-y-1/2"><svg class="shrink-0 size-4 text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg></div>',
            '<div class="absolute block top-1/2 end-4 -translate-y-1/2"><svg class="shrink-0 size-4 text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg></div>',
          ],
        })}
        {...config}
      >
        <option value="">Choose a ...</option>
        {withIcons === false ? (
          <>
            {isListSelect?.map((gtRslt, i) => (
              <option value={gtRslt.name.common} key={i}>
                {gtRslt.name.common}
              </option>
            ))}
          </>
        ) : (
          <>
            {isListSelect?.map((gtRslt, i) => (
              <option
                data-hs-select-option={JSON.stringify({
                  icon: `<img class="shrink-0 h-4.5 w-6 object-cover object-center border border-solid border-gray-200 rounded" src="${gtRslt.flags.svg}" alt="Country - ${gtRslt.name.common}" />`,
                })}
                value={gtRslt.name.common}
                key={i}
              >
                {gtRslt.name.common}
              </option>
            ))}
          </>
        )}
      </select>
    </>
  );
};

export default SelectCountry;
