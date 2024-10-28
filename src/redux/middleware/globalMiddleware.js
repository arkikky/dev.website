import { setCookie } from 'cookies-next';
import { addItemToCart } from '@reduxState/slices';

export const globalMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type === addItemToCart.type) {
    const isCart = store.getState().cart;

    setCookie('_cart', JSON.stringify(isCart), { maxAge: 30 * 60 });
  }

  return result;
};
