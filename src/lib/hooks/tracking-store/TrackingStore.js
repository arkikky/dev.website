import { useCallback } from 'react';

// @lib
// import { useStoreContext } from '@lib/context/store/StoreContext';

export function useTrackingStore() {
  // const { getStore } = useStoreContext();

  // @view-product
  const trackingViewProduct = useCallback((store, total) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.dataLayer.push('event', 'view_item', {
        currency: 'IDR',
        value: total,
        ecommerce: {
          items:
            store?.map((item, i) => ({
              item_id: item?.id,
              item_name: item?.name,
              index: i,
              item_brand: 'Coinfest Asia',
              item_category:
                item?.documentId !== 'rc33x0dgm6tm707jghffuip4'
                  ? `Festival Tickets`
                  : item?.name,
              price: Number(item?.priceSale ?? gtRslt?.price),
              quantity: item?.quantity,
            })) || [],
        },
      });

      // console.log('DataL/ayer Event Pushed:', window.dataLayer);
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
