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
    console.log(window.gtag ? 'gtag tersedia' : 'gtag tidak ditemukan');
    console.log(
      window.dataLayer ? 'dataLayer tersedia' : 'dataLayer tidak ditemukan'
    );

    if (typeof window !== 'undefined' && window.gtag) {
      window.dataLayer.push({ ecommerce: null });
      window.dataLayer.push({
        event: 'purchase_confirmed',
        datalayer_event_name: 'purchase',
        //   ecommerce: {
        //     transaction_id: 'test1' + order?.documentId,
        //     value: Number(order?.orderTotal),
        //     shipping: 0,
        //     currency: 'IDR',
        //     coupon: '-',
        //     items: [
        //       {
        //         item_id: order?.products[0]?.id,
        //         item_name: order?.products[0]?.name,
        //         price: Number(
        //           order?.products[0]?.priceSale ?? order?.products[0]?.price
        //         ),
        //       },
        //     ],
        //   },
        //   // // 'value.transID': order?.documentId,
        //   // // 'value.transValue': order?.orderTotal,
        ecommerce: {
          transaction_id: 'test_223231311231_' + order?.documentId,
          value: Number(order?.orderTotal),
          shipping: 0,
          currency: 'IDR',
          coupon: '-',
          items: [
            {
              item_id: order?.products[0]?.id,
              item_name: order?.products[0]?.name,
              affiliation: 'coinfest.asia',
              price: Number(
                order?.products[0]?.priceSale ?? order?.products[0]?.price
              ),
              currency: 'IDR',
              quantity: 3,
            },
          ],
          //   //   transaction_id: order?.documentId,
          //   //   value: Number(order?.orderTotal),
          //   //   tax: 0.11,
          //   //   shipping: 0,
          //   //   currency: 'IDR',
          //   //   coupon: '-',
          //   //   items: [
          //   //     {
          //   //       item_id: order?.products[0]?.id,
          //   //       item_name: order?.products[0]?.name,
          //   //       affiliation: 'coinfest.asia',
          //   //       price: Number(order?.products[0]?.priceSale ?? order?.products[0]?.price),
          //   //       item_brand: 'Coinfest Asia 2025',
          //   //       item_variant: 'Festival Ticket',
          //   //       item_variant_id: order?.products[0]?.documentId,
          //   //       item_category: 'Tickets',
          //   //       currency: 'IDR',
          //   //       index: 0,
          //   //       quantity: 1,
          //   //       google_bussiness_vertical: 'retail',
          //   //     },
          //   //   ],
        },
        //   event: 'purchase',
        //   transaction_id: order?.documentId,
        //   value: Number(order?.orderTotal),
        //   shipping: 0,
        //   currency: 'IDR',
        //   coupon: '-',
        //   ecommerce: {
        //     transaction_id: 'test-123wda4',
        //     value: 1000,
        //     currency: 'IDR',
        //     items: [
        //       {
        //         item_id: order?.products[0]?.id,
        //         item_name: order?.products[0]?.name,
        //         price: Number(
        //           order?.products[0]?.priceSale ?? order?.products[0]?.price
        //         ),
        //         quantity: 2,
        //       },
        //     ],
        // },
      });

      // window.gtag('event', 'purchase', {
      //   transaction_id: 'test_2113_' + order?.documentId,
      //   value: Number(order?.orderTotal),
      //   shipping: 0,
      //   currency: 'IDR',
      //   coupon: '-',
      //   items: [
      //     {
      //       item_id: order?.products[0]?.id,
      //       item_name: order?.products[0]?.name,
      //       affiliation: 'coinfest.asia',
      //       price: Number(
      //         order?.products[0]?.priceSale ?? order?.products[0]?.price
      //       ),
      //       currency: 'IDR',
      //       quantity: 3,
      //     },
      //   ],
      // });

      console.log('DataLayer Event Pushed:', window.dataLayer);
      return;
    }
  }, []);

  return {
    trackingPurchase,
    handlePurchase,
  };
}
