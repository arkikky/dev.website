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
    console.log(order);

    if (typeof window !== 'undefined' && window.gtag) {
      window.dataLayer.push({
        event: 'purchase_confirmed',
        datalayer_event_name: 'purchase',
        debug_mode: true,
        'value.transID': order?.documentId,
        'value.transValue': order?.orderTotal,
        ecommerce: {
          transaction_id: order?.documentId,
          value: order?.orderTotal,
          tax: 0.11,
          shipping: 0,
          currency: 'IDR',
          coupon: '-',
          items: [
            {
              item_id: order?.products[0]?.id,
              item_name: order?.products[0]?.name,
              affiliation: 'Coinfset Asia',
              index: 0,
              item_brand: 'Coinfest Asia 2025',
              item_category: 'Tickets',
              item_list_id: 'tickets',
              item_list_name: 'Tickets',
              item_variant: 'Festival Ticket',
              price: order?.products[0]?.priceSale ?? order?.products[0]?.price,
            },
          ],
        },
      });

      // console.log('DataLayer Event Pushed:', window.dataLayer);
      return;
    }
  }, []);

  return {
    trackingPurchase,
    handlePurchase,
  };
}
