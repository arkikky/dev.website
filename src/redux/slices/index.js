import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCookie, setCookie } from 'cookies-next';

// @.env
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const cartSlice = createSlice({
  name: '_cart',
  initialState: {
    data: getCookie('_cart') ? JSON.parse(getCookie('_cart')).data : [],
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

      setCookie('_cart', JSON.stringify(state), {
        maxAge: 3600,
        // httpOnly: true,
        // secure: true,
        sameSite: 'strict',
      });
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

// export const addItemToCart = (items) => async () => {
//   const d = items;

//   const fetchAuth = await fetch('/api/cookie/get-cookie', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'x-api-key': API_KEY,
//     },
//     body: JSON.stringify({ ...d, quantity: 1 }),
//   });

//   if (!fetchAuth) {
//     throw new Error('Network response was not ok');
//   }

//   const rsAuth = await fetchAuth.json();

//   console.log(rsAuth);
// };

export const { addItemToCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
