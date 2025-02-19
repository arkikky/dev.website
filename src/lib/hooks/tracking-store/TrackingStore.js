import { useCallback } from 'react';

export function useTrackingStore() {
  // @purchase
  const trackingPurchase = useCallback(({ transID, transValue }) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'purchase_confirmed',
        'value.transID': transID,
        'value.transValue': transValue,
      });
    }
  }, []);

  const handlePurchase = useCallback((order) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: 'test_812332_' + order?.documentId,
        value: Number(order?.orderTotal),
        shipping: 0,
        currency: 'IDR',
        coupon: '-',
        items: [
          {
            item_id: order?.products[0]?.id,
            item_name: 'Test Festival',
            affiliation: 'coinfest.asia',
            price: Number(
              order?.products[0]?.priceSale ?? order?.products[0]?.price
            ),
            currency: 'IDR',
            quantity: 2,
          },
        ],
      });

      // console.log('DataL/ayer Event Pushed:', window.dataLayer);
      return;
    }
  }, []);

  return {
    trackingPurchase,
    handlePurchase,
  };
}
