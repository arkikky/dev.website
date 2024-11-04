import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import { usePathname } from 'next/navigation';

export default function PrelineScript() {
  const router = useRouter();
  // const path = usePathname();

  useEffect(() => {
    const loadPreline = async () => {
      await import('preline/preline');

      // @check if the HSStaticMethods object exists before calling autoInit
      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    };

    const handleRouteChangeComplete = () => {
      loadPreline();
    };

    loadPreline();

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);

  return null;
}
