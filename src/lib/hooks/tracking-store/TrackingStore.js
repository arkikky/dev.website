import { useCallback } from 'react';

export function useTrackingStore() {
  // @purchase
  const handlePurchase = useCallback(({ products }) => {
    if (typeof window !== 'undefined' && window.gtag) {
      console.log(window.gtag);
      console.log(products);
      console.log(products?.price ?? products?.priceSale);

      window.gtag('event', 'purchase', {
        transaction_id: 'T_12345_2',
        value: 3250000, 
        tax: 0,
        shipping: 0,
        currency: 'IDR', 
        coupon: 'PRE_SALE',
        items: [
          {
            item_id: '757',
            item_name: 'Pre-Sale Festival Ticket',
            price: 3250000,
            discount: 2031250, 
            quantity: 1,
          },
        ],
      });
    } else {
      console.error('gtag is not defined!');
    }
  }, []);

  return {
    handlePurchase,
  };
}
