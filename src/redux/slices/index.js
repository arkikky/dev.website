import { createSlice } from '@reduxjs/toolkit';

const savedState = () => {
  try {
    if (typeof window !== 'undefined' && sessionStorage.getItem('_cart')) {
      return JSON.parse(sessionStorage.getItem('_cart'));
    } else {
      return {
        data: [],
        coupon: null,
        session: new Date().toISOString(),
      };
    }
  } catch (error) {
    console.error('[Error] failed to parse sessionStorage data:', error);
    return {
      data: [],
      coupon: null,
      session: new Date().toISOString(),
    };
  }
};

const cartSlice = createSlice({
  name: '_cart',
  initialState: savedState(),
  reducers: {
    // @add-items(in Cart)
    addItemToCart: (state, action) => {
      const d = action.payload;
      const exItms = state?.data.find((i) => i.id_product === d.id_product);

      if (exItms) {
        exItms.quantity += 1;
      } else {
        state.data.push({
          ...action.payload,
          quantity: d.id_product === 'sn4ujm0d1ebbc8lme1ihzsa9' ? 5 : 1,
        });
      }
      sessionStorage.setItem('_cart', JSON.stringify(state));
    },

    // @update(Qty)
    updateQuantity: (state, action) => {
      const d = action.payload;
      const exItms = state?.data.find(
        (i) => i.id_product === d.products.documentId
      );

      if (exItms) {
        exItms.quantity = d.qty;
      }
      sessionStorage.setItem('_cart', JSON.stringify(state));
    },

    // @remove-items(Cart)
    removeItemCart: (state, action) => {
      const d = action.payload;
      state.data = state?.data.filter((item) => item.id_product !== d);

      sessionStorage.setItem('_cart', JSON.stringify(state));
    },

    // @remove(Cart)
    removeCart: (state) => {
      state.data = [];
      state.coupon = null;
      sessionStorage.removeItem('_cart');
    },

    // @apply(Coupon)
    applyCoupon: (state, action) => {
      state.coupon = action.payload;
      sessionStorage.setItem('_cart', JSON.stringify(state));
    },

    // @remove(Coupon)
    removeCoupon: (state) => {
      state.coupon = null;
      sessionStorage.setItem('_cart', JSON.stringify(state));
    },
  },
});

export const {
  addItemToCart,
  updateQuantity,
  removeItemCart,
  removeCart,
  applyCoupon,
  removeCoupon,
} = cartSlice.actions;

export default cartSlice.reducer;
