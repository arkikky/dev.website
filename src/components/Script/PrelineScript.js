'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PrelineScript() {
  const router = useRouter();

  useEffect(() => {
    const loadPreline = async () => {
      if (typeof window !== 'undefined') {
        try {
          await import('preline/preline');

          if (window.HSStaticMethods) {
            window.HSStaticMethods.autoInit();
            return;
          }
        } catch (error) {
          console.error('[Error] loading Preline:', error);
        }
      }
    };

    loadPreline();

    const handleRouteChangeComplete = () => {
      loadPreline();
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  return null;
}
