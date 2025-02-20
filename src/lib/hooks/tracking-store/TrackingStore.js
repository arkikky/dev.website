import { useCallback } from 'react';

export function useTrackingStore() {
  // @view-product
  const trackingViewProduct = (store, total, withAddToCart = false) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.dataLayer.push({ ecommerce: null });
      window.dataLayer.push({
        event: 'view_item',
        ecommerce: {
          currency: 'IDR',
          value: total,
          items:
            store?.map((item, i) => ({
              item_id: item?.id,
              item_name: item?.name,
              index: i,
              item_brand: 'Coinfest Asia',
              item_category:
                item?.documentId !== 'rc33x0dgm6tm707jghffuip4'
                  ? `Festival Ticket`
                  : item?.name,
              price: Number(item?.priceSale ?? gtRslt?.price),
              quantity: item?.quantity,
            })) || [],
        },
      });
      // @with(add to cart)
      if (withAddToCart) {
        window.dataLayer.push({
          event: 'add_to_cart',
          ecommerce: {
            currency: 'IDR',
            value: total,
            items:
              store?.map((item, i) => ({
                item_id: item?.id,
                item_name: item?.name,
                index: i,
                item_brand: 'Coinfest Asia',
                item_category:
                  item?.documentId !== 'rc33x0dgm6tm707jghffuip4'
                    ? `Festival Ticket`
                    : item?.name,
                price: Number(item?.priceSale ?? gtRslt?.price),
                quantity: item?.quantity,
              })) || [],
          },
        });
      }
    }
  };
  // @add-to-cart
  const trackingAddToCart = (item) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.dataLayer.push({ ecommerce: null });
      window.dataLayer.push({
        event: 'view_item',
        ecommerce: {
          currency: 'IDR',
          value: Number(item?.priceSale ?? gtRslt?.price),
          items: {
            item_id: item?.id,
            item_name: item?.name,
            item_brand: 'Coinfest Asia',
            item_category:
              item?.documentId !== 'rc33x0dgm6tm707jghffuip4'
                ? `Festival Ticket`
                : item?.name,
            price: Number(item?.priceSale ?? gtRslt?.price),
            quantity: item?.documentId === 'sn4ujm0d1ebbc8lme1ihzsa9' ? 5 : 1,
          },
        },
      });
      window.dataLayer.push({
        event: 'add_to_cart',
        ecommerce: {
          currency: 'IDR',
          value: Number(item?.priceSale ?? gtRslt?.price),
          items: {
            item_id: item?.id,
            item_name: item?.name,
            item_brand: 'Coinfest Asia',
            item_category:
              item?.documentId !== 'rc33x0dgm6tm707jghffuip4'
                ? `Festival Ticket`
                : item?.name,
            price: Number(item?.priceSale ?? gtRslt?.price),
            quantity: item?.documentId === 'sn4ujm0d1ebbc8lme1ihzsa9' ? 5 : 1,
          },
        },
      });
    }
  };

  // @begin_checkout
  const trackingBeginCheckout = (store, isCoupon, total) => {
    if (typeof window !== 'undefined' && window.gtag) {
      const validCoupon = isCoupon?.includedProducts?.some((p) =>
        store?.some((item) => item.documentId === p.documentId)
      )
        ? isCoupon
        : null;

      window.dataLayer.push({ ecommerce: null });
      window.dataLayer.push({
        event: 'begin_checkout',
        ecommerce: {
          currency: 'IDR',
          value: total,
          coupon: validCoupon ? validCoupon?.couponCode : '-',
          items: store?.map((item, i) => {
            const isDiscounted = validCoupon?.includedProducts?.some(
              (p) => p.documentId === item.documentId
            );
            const itemDiscount = isDiscounted
              ? validCoupon?.type === 'percentage'
                ? (Number(item.priceSale) * Number(validCoupon.amount)) / 100
                : validCoupon?.type === 'fix'
                  ? Number(validCoupon.amount) / store.length
                  : 0
              : 0;

            return {
              item_id: item?.id,
              item_name: item?.name,
              coupon: isDiscounted ? validCoupon?.couponCode : '-',
              discount: isDiscounted ? itemDiscount : '-',
              index: i,
              item_brand: 'Coinfest Asia',
              item_category:
                item?.documentId !== 'rc33x0dgm6tm707jghffuip4'
                  ? `Festival Ticket`
                  : item?.name,
              price: Number(item?.priceSale ?? gtRslt?.price),
              quantity: item?.quantity,
            };
          }),
        },
      });
    }
  };
  // @payment-info
  const trackingCheckoutJourney = (store, isCoupon, total) => {
    if (typeof window !== 'undefined' && window.gtag) {
      const validCoupon = isCoupon?.includedProducts?.some((p) =>
        store?.some((item) => item.documentId === p.documentId)
      )
        ? isCoupon
        : null;

      window.dataLayer.push({ ecommerce: null });
      window.dataLayer.push({
        event: 'add_shipping_info',
        ecommerce: {
          currency: 'IDR',
          value: total,
          coupon: validCoupon ? validCoupon?.couponCode : '-',
          shipping_tier: 'QR Code Ticket',
          items: store?.map((item, i) => {
            const isDiscounted = validCoupon?.includedProducts?.some(
              (p) => p.documentId === item.documentId
            );
            const itemDiscount = isDiscounted
              ? validCoupon?.type === 'percentage'
                ? (Number(item.priceSale) * Number(validCoupon.amount)) / 100
                : validCoupon?.type === 'fix'
                  ? Number(validCoupon.amount) / store.length
                  : 0
              : 0;

            return {
              item_id: item?.id,
              item_name: item?.name,
              coupon: isDiscounted ? validCoupon?.couponCode : '-',
              discount: isDiscounted ? itemDiscount : '-',
              index: i,
              item_brand: 'Coinfest Asia',
              item_category:
                item?.documentId !== 'rc33x0dgm6tm707jghffuip4'
                  ? `Festival Ticket`
                  : item?.name,
              price: Number(item?.priceSale ?? gtRslt?.price),
              quantity: item?.quantity,
            };
          }),
        },
      });
      window.dataLayer.push({
        event: 'add_payment_info',
        ecommerce: {
          currency: 'IDR',
          value: total,
          coupon: validCoupon ? validCoupon?.couponCode : '-',
          payment_type: 'All Support Payment',
          items: store?.map((item, i) => {
            const isDiscounted = validCoupon?.includedProducts?.some(
              (p) => p.documentId === item.documentId
            );
            const itemDiscount = isDiscounted
              ? validCoupon?.type === 'percentage'
                ? (Number(item.priceSale) * Number(validCoupon.amount)) / 100
                : validCoupon?.type === 'fix'
                  ? Number(validCoupon.amount) / store.length
                  : 0
              : 0;

            return {
              item_id: item?.id,
              item_name: item?.name,
              coupon: isDiscounted ? validCoupon?.couponCode : '-',
              discount: isDiscounted ? itemDiscount : '-',
              index: i,
              item_brand: 'Coinfest Asia',
              item_category:
                item?.documentId !== 'rc33x0dgm6tm707jghffuip4'
                  ? `Festival Ticket`
                  : item?.name,
              price: Number(item?.priceSale ?? gtRslt?.price),
              quantity: item?.quantity,
            };
          }),
        },
      });
    }
  };

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
    trackingAddToCart,
    trackingBeginCheckout,
    trackingCheckoutJourney,
    trackingPurchase,
    handlePurchase,
  };
}
