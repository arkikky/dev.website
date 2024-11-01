import { setCookie } from 'cookies-next';
import { addItemToCart } from '@reduxState/slices';

export const globalMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // @security-middleware
  if (
    typeof action.payload === 'string' &&
    action.payload.includes('<script>')
  ) {
    console.warn('[warning]: We detected an unsafe Action!');
    return;
  }

  const allowedActions = [
    '_cart/addItemToCart',
    '_cart/updateQuantity',
    '_cart/applyCoupon',
    '_cart/removeCoupon',
  ];
  if (!allowedActions.includes(action.type)) {
    console.warn(`[warning]: Action not allowed!`);
    return;
  }

  // @slices
  if (action.type === addItemToCart.type) {
    const isCart = store.getState().cart;

    setCookie('_cart', JSON.stringify(isCart), {
      maxAge: 30 * 60,
      path: '/',
      secure: true,
      sameSite: 'strict',
    });
  }

  return result;
};
