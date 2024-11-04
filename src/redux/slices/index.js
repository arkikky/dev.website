import { createSlice } from '@reduxjs/toolkit';
import { hasCookie, getCookie, setCookie } from 'cookies-next';

const cookieConfig = {
  maxAge: 30 * 60,
  path: '/',
  secure: true,
  sameSite: 'strict',
};

const cartSlice = createSlice({
  name: '_cart',
  initialState: {
    data: hasCookie('_cart') ? JSON.parse(getCookie('_cart')).data : [],
    coupon: hasCookie('_cart') ? JSON.parse(getCookie('_cart')).coupon : null,
  },
  reducers: {
    // @add-items(in Cart)
    addItemToCart: (state, action) => {
      const d = action.payload;
      const exItms = state?.data?.find((i) => i.id_product === d.id_product);

      if (exItms) {
        exItms.quantity += 1;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
    },

    // @update(qty)
    updateQuantity: (state, action) => {
      const d = action.payload;
      const exItms = state?.data?.find(
        (i) => i.id_product === d.products.id_product
      );

      if (exItms) {
        exItms.quantity = d.qty;
      }
      setCookie('_cart', JSON.stringify(state), cookieConfig); // @saved:cookie
    },

    // @apply(coupon)
    applyCoupon: (state, action) => {
      state.coupon = action.payload;
      setCookie('_cart', JSON.stringify(state), cookieConfig); // @saved:cookie
    },

    // @remove(coupon)
    removeCoupon: (state) => {
      state.coupon = null;
      setCookie('_cart', JSON.stringify(state), cookieConfig); // @saved:cookie
    },

    // Action untuk menghapus item dari cart
    // removeFromCart: (state, action) => {
    //   state.items = state.items.filter((item) => item.id !== action.payload);
    // },

    // // Action untuk menghapus semua item dari cart
    // clearCart: (state) => {
    //   state.items = [];
    // },
  },
});

export const { addItemToCart, updateQuantity, applyCoupon, removeCoupon } =
  cartSlice.actions;

export default cartSlice.reducer;
