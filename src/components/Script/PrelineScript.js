// 'use client';
// import React, { useEffect } from 'react';
// import { useRouter } from 'next/router';

// export default function PrelineScript() {
//   const router = useRouter();

//   useEffect(() => {
//     const loadPreline = async () => {
//       if (typeof window !== 'undefined') {
//         try {
//           await import('preline/preline');

//           if (window.HSStaticMethods) {
//             window.HSStaticMethods.autoInit();
//             return;
//           }
//         } catch (error) {
//           console.error('[Error] loading Preline:', error);
//         }
//       }
//     };

//     loadPreline();

//     return () => {
//       null;
//     };
//   }, [router.pathname]);

//   return null;
// }

'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    const loadPreline = async () => {
      await import('preline/preline');

      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    };

    loadPreline();
  }, [path]);

  return null;
}
