import { useCallback } from 'react';

export function useTrackingStore() {
  // @view-product
  const trackingViewProduct = useCallback((items) => {
    console.log(items);
    const isCategory =
      items?.documentId !== 'rc33x0dgm6tm707jghffuip4'
        ? `Festival Tickets`
        : items?.name;

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_item', {
        items: [
          {
            id: items?.id,
            name: items?.name,
            category: isCategory,
            price: items?.priceSale ?? items?.price,
          },
        ],
        currency: 'IDR',
      });
      console.log('DataL/ayer Event Pushed:', window.dataLayer);
    }
  }, []);

  // @purchase
  const trackingPurchase = useCallback(({ transID, transValue }) => {
    // if (typeof window !== 'undefined' && window.dataLayer) {
    //   window.dataLayer.push({
    //     event: 'purchase_confirmed',
    //     'value.transID': transID,
    //     'value.transValue': transValue,
    //   });
    // }
  }, []);
  const handlePurchase = useCallback((order) => {
    // if (typeof window !== 'undefined' && window.gtag) {
    //   window.gtag('event', 'purchase', {
    //     transaction_id: 'Test_90_' + order?.documentId,
    //     value: Number(order?.orderTotal),
    //     shipping: 0,
    //     currency: 'IDR',
    //     coupon: '-',
    //     items: [
    //       {
    //         item_id: `T-${order?.products[0]?.id}`,
    //         item_name: 'Test Festival',
    //         affiliation: 'Coinfest Asia',
    //         currency: 'IDR',
    //         item_brand: 'Coinfest Asia',
    //         item_category: 'Festival Ticket',
    //         price: Number(
    //           order?.products[0]?.priceSale ?? order?.products[0]?.price
    //         ),
    //         quantity: 2,
    //       },
    //     ],
    //   });
    //   // console.log('DataL/ayer Event Pushed:', window.dataLayer);
    //   return;
    // }
  }, []);

  return {
    trackingViewProduct,
    trackingPurchase,
    handlePurchase,
  };
}
