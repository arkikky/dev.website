import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@reduxState/slices';
import { globalMiddleware } from '@reduxState/middleware/globalMiddleware';

// @configuration-store(Redux)
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(globalMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
