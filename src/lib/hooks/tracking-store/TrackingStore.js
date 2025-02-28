import { useCallback } from 'react';

export function useTrackingStore() {
  // @view-product
  const trackingViewProduct = (store, total, withAddToCart = false) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_item', {
        currency: 'IDR',
        value: total,
        items:
          store?.map((item, i) => ({
            item_id: item?.id,
            item_name:
              process.env.NODE_ENV === 'development'
                ? `Dev ${item?.name}`
                : item?.name,
            index: i,
            item_brand: 'Coinfest Asia',
            item_category:
              item?.documentId !== 'rc33x0dgm6tm707jghffuip4'
                ? `Festival Ticket`
                : item?.name,
            price: Number(item?.priceSale ?? gtRslt?.price),
            quantity: item?.quantity,
          })) || [],
      });
      // @with(add to cart)
      if (withAddToCart) {
        window.gtag('event', 'add_to_cart', {
          currency: 'IDR',
          value: total,
          items:
            store?.map((item, i) => ({
              item_id: item?.id,
              item_name:
                process.env.NODE_ENV === 'development'
                  ? `Dev ${item?.name}`
                  : item?.name,
              index: i,
              item_brand: 'Coinfest Asia',
              item_category:
                item?.documentId !== 'rc33x0dgm6tm707jghffuip4'
                  ? `Festival Ticket`
                  : item?.name,
              price: Number(item?.priceSale ?? gtRslt?.price),
              quantity: item?.quantity,
            })) || [],
        });
      }
    }
  };
  // @add-to-cart
  const trackingAddToCart = (item) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_item', {
        currency: 'IDR',
        value: Number(item?.priceSale ?? gtRslt?.price),
        items: {
          item_id: item?.id,
          item_name:
            process.env.NODE_ENV === 'development'
              ? `Dev ${item?.name}`
              : item?.name,
          item_brand: 'Coinfest Asia',
          item_category:
            item?.documentId !== 'rc33x0dgm6tm707jghffuip4'
              ? `Festival Ticket`
              : item?.name,
          price: Number(item?.priceSale ?? gtRslt?.price),
          quantity: item?.documentId === 'sn4ujm0d1ebbc8lme1ihzsa9' ? 5 : 1,
        },
      });
      window.gtag('event', 'add_to_cart', {
        currency: 'IDR',
        value: Number(item?.priceSale ?? gtRslt?.price),
        items: {
          item_id: item?.id,
          item_name:
            process.env.NODE_ENV === 'development'
              ? `Dev ${item?.name}`
              : item?.name,
          item_brand: 'Coinfest Asia',
          item_category:
            item?.documentId !== 'rc33x0dgm6tm707jghffuip4'
              ? `Festival Ticket`
              : item?.name,
          price: Number(item?.priceSale ?? gtRslt?.price),
          quantity: item?.documentId === 'sn4ujm0d1ebbc8lme1ihzsa9' ? 5 : 1,
        },
      });
    }
  };

  // @begin_checkout
  const trackingBeginCheckout = (store, isCoupon, total) => {
    if (typeof window !== 'undefined' && window.gtag) {
      let calculateTotalDiscount = 0;
      const validCoupon = isCoupon?.includedProducts?.some((p) =>
        store?.some((item) => item.documentId === p.documentId)
      )
        ? isCoupon
        : null;

      window.gtag('event', 'begin_checkout', {
        currency: 'IDR',
        value: total,
        coupon: validCoupon ? validCoupon?.couponCode : '-',
        items: store?.map((item, i) => {
          const isDiscounted = validCoupon?.includedProducts?.some(
            (p) => p.documentId === item.documentId
          );
          const isPrice = (item?.priceSale ?? item?.price) || 0;
          const totalPrice = isPrice * item?.quantity;

          let itemDiscount = 0;
          if (validCoupon) {
            if (validCoupon?.type === 'percentage') {
              itemDiscount =
                parseInt(validCoupon.amount) >= 100
                  ? Math.min(total, totalPrice)
                  : totalPrice * (validCoupon.amount / 100);
            } else if (validCoupon?.type === 'fix') {
              itemDiscount = Math.min(validCoupon.amount / store.length, total);
            }
            calculateTotalDiscount += itemDiscount;
          }

          return {
            item_id: item?.id,
            item_name:
              process.env.NODE_ENV === 'development'
                ? `Dev ${item?.name}`
                : item?.name,
            coupon: isDiscounted ? validCoupon?.couponCode : '-',
            discount: isDiscounted
              ? Number((itemDiscount / item?.quantity).toFixed(2))
              : 0,
            index: i,
            item_brand: 'Coinfest Asia',
            item_category:
              item?.documentId !== 'rc33x0dgm6tm707jghffuip4'
                ? `Festival Ticket`
                : item?.name,
            price: Number(
              (
                ((item?.priceSale ?? gtRslt?.price) -
                  (isDiscounted ? itemDiscount / item?.quantity : 0)) *
                1.11
              ).toFixed(2)
            ),
            quantity: item?.quantity,
          };
        }),
      });
    }
  };
  // @payment-info
  const trackingCheckoutJourney = (store, isCoupon, total) => {
    if (typeof window !== 'undefined' && window.gtag) {
      let calculateTotalDiscount = 0;
      const validCoupon = isCoupon?.includedProducts?.some((p) =>
        store?.some((item) => item.documentId === p.documentId)
      )
        ? isCoupon
        : null;

      window.gtag('event', 'add_shipping_info', {
        currency: 'IDR',
        value: total,
        coupon: validCoupon ? validCoupon?.couponCode : '-',
        shipping_tier: 'QR Code Ticket',
        items: store?.map((item, i) => {
          const isDiscounted = validCoupon?.includedProducts?.some(
            (p) => p.documentId === item.documentId
          );
          const isPrice = (item?.priceSale ?? item?.price) || 0;
          const totalPrice = isPrice * item?.quantity;

          let itemDiscount = 0;
          if (validCoupon) {
            if (validCoupon?.type === 'percentage') {
              itemDiscount =
                parseInt(validCoupon.amount) >= 100
                  ? Math.min(total, totalPrice)
                  : totalPrice * (validCoupon.amount / 100);
            } else if (validCoupon?.type === 'fix') {
              itemDiscount = Math.min(validCoupon.amount / store.length, total);
            }
            calculateTotalDiscount += itemDiscount;
          }

          return {
            item_id: item?.id,
            item_name:
              process.env.NODE_ENV === 'development'
                ? `Dev ${item?.name}`
                : item?.name,
            coupon: isDiscounted ? validCoupon?.couponCode : '-',
            discount: isDiscounted
              ? Number((itemDiscount / item?.quantity).toFixed(2))
              : 0,
            index: i,
            item_brand: 'Coinfest Asia',
            item_category:
              item?.documentId !== 'rc33x0dgm6tm707jghffuip4'
                ? `Festival Ticket`
                : item?.name,
            price: Number(
              (
                ((item?.priceSale ?? gtRslt?.price) -
                  (isDiscounted ? itemDiscount / item?.quantity : 0)) *
                1.11
              ).toFixed(2)
            ),
            quantity: item?.quantity,
          };
        }),
      });
      window.gtag('event', 'add_payment_info', {
        currency: 'IDR',
        value: total,
        coupon: validCoupon ? validCoupon?.couponCode : '-',
        payment_type: 'All Support Payment',
        items: store?.map((item, i) => {
          const isDiscounted = validCoupon?.includedProducts?.some(
            (p) => p.documentId === item.documentId
          );
          const isPrice = (item?.priceSale ?? item?.price) || 0;
          const totalPrice = isPrice * item?.quantity;

          let itemDiscount = 0;
          if (validCoupon) {
            if (validCoupon?.type === 'percentage') {
              itemDiscount =
                parseInt(validCoupon.amount) >= 100
                  ? Math.min(total, totalPrice)
                  : totalPrice * (validCoupon.amount / 100);
            } else if (validCoupon?.type === 'fix') {
              itemDiscount = Math.min(validCoupon.amount / store.length, total);
            }
            calculateTotalDiscount += itemDiscount;
          }

          return {
            item_id: item?.id,
            item_name:
              process.env.NODE_ENV === 'development'
                ? `Dev ${item?.name}`
                : item?.name,
            coupon: isDiscounted ? validCoupon?.couponCode : '-',
            discount: isDiscounted
              ? Number((itemDiscount / item?.quantity).toFixed(2))
              : 0,
            index: i,
            item_brand: 'Coinfest Asia',
            item_category:
              item?.documentId !== 'rc33x0dgm6tm707jghffuip4'
                ? `Festival Ticket`
                : item?.name,
            price: Number(
              (
                ((item?.priceSale ?? gtRslt?.price) -
                  (isDiscounted ? itemDiscount / item?.quantity : 0)) *
                1.11
              ).toFixed(2)
            ),
            quantity: item?.quantity,
          };
        }),
      });
    }
  };

  // @purchase
  const trackingPurchase = (transactionId, store, isCoupon, total) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      let calculateTotalDiscount = 0;
      const validCoupon = isCoupon?.includedProducts?.some((p) =>
        store?.some((item) => item.documentId === p.documentId)
      )
        ? isCoupon
        : null;
      window.gtag('event', 'purchase', {
        currency: 'IDR',
        value: Number(total),
        transaction_id: transactionId,
        coupon: validCoupon ? validCoupon?.couponCode : '-',
        items: store?.map((item, i) => {
          const isDiscounted = validCoupon?.includedProducts?.some(
            (p) => p.documentId === item.documentId
          );
          const isPrice = (item?.priceSale ?? item?.price) || 0;
          const totalPrice = isPrice * item?.quantity;

          let itemDiscount = 0;
          if (validCoupon) {
            if (validCoupon?.type === 'percentage') {
              itemDiscount =
                parseInt(validCoupon.amount) >= 100
                  ? Math.min(total, totalPrice)
                  : totalPrice * (validCoupon.amount / 100);
            } else if (validCoupon?.type === 'fix') {
              itemDiscount = Math.min(validCoupon.amount / store.length, total);
            }
            calculateTotalDiscount += itemDiscount;
          }

          return {
            item_id: item?.id,
            item_name:
              process.env.NODE_ENV === 'development'
                ? `Dev ${item?.name}`
                : item?.name,
            coupon: isDiscounted ? validCoupon?.couponCode : '-',
            discount: isDiscounted
              ? Number((itemDiscount / item?.quantity).toFixed(2))
              : 0,
            index: i,
            item_brand: 'Coinfest Asia',
            item_category:
              item?.documentId !== 'rc33x0dgm6tm707jghffuip4'
                ? `Festival Ticket`
                : item?.name,
            price: Number(
              (
                ((item?.priceSale ?? gtRslt?.price) -
                  (isDiscounted ? itemDiscount / item?.quantity : 0)) *
                1.11
              ).toFixed(2)
            ),
            quantity: item?.quantity,
          };
        }),
      });
      // console.log('DataL/ayer Event Pushed:', window.dataLayer);
    }
  };

  return {
    trackingViewProduct,
    trackingAddToCart,
    trackingBeginCheckout,
    trackingCheckoutJourney,
    trackingPurchase,
  };
}
