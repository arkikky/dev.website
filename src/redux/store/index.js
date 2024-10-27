import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@reduxState/slices';
import securityMiddleware from '@reduxState/store/securityMiddleware';

// @configuration-store(Redux)
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(securityMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
