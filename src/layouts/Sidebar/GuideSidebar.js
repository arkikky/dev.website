import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// @lib
import guideNav from '@lib/json/guide-nav.json';

const GuideSidebar = () => {
  const router = useRouter();

  return (
    <div className='hidden lg:block h-full border-r border-[#2458F1] w-[25.5%] overflow-auto scrollbar-hide pb-19'>
      <div className='flex flex-col mt-4 text-[#303030] flex-1'>
        {guideNav.map(nav => {
          const isActive = router.pathname === nav.url;
          return (
            <div className='border-b border-[#E9E9E9] last:border-b-0' key={nav.id}>
              <Link href={nav.url}>
                <div
                  className={`${isActive ? 'bg-[#2458F1] text-white' : 'hover:bg-[#E9E9E9]'
                    }`}
                >
                  <div className='px-8 py-4'>
                    {nav.name}
                  </div>
                </div>
              </Link>
              {nav.children && nav.children.length > 0 && (
                <div className='pl-8'>
                  <div className='flex flex-col gap-2 border-l pl-2 border-[#2458F1]'>
                    {nav.children.map(child => {
                      const isChildActive = router.pathname === child?.url;
                      return child?.url ? (
                        <Link href={child?.url} key={child.id}>
                          <div
                            className={`p-4 ${isChildActive ? 'bg-[#2458F1] text-white' : ''
                              }`}
                          >
                            {child.name}
                          </div>
                        </Link>
                      ) : (
                        <div 
                          key={child.id} 
                          className='p-4 cursor-pointer'
                          onClick={() => router.push('/guide/getting-to-coinfest-asia')}
                        >
                          {child.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GuideSidebar;
