import { useCallback } from 'react';

export function useTrackingStore() {
  // @purchase
  const handlePurchase = useCallback(({ products }) => {
    if (typeof window !== 'undefined' && window.gtag) {
      console.log(window.gtag);
      console.log(products);
      console.log(products?.price ?? products?.priceSale);

      window.gtag('event', 'purchase', {
        transaction_id: products?.productId,
        value: products?.priceSale ?? products?.price,
        tax: 11,
        shipping: 0,
        currency: 'USD',
        coupon: '-',
        items: [
          {
            item_id: products?.productId,
            item_name: products?.name,
            item_brand: 'Coinfest Asia 2025',
            item_category: 'Events',
            price: products?.priceSale ?? products?.price,
            quantity: 3,
          },
        ],
      });
      return;
    }
  }, []);

  return {
    handlePurchase,
  };
}
