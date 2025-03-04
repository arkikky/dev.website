export const globalMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  // @security-middleware
  if (
    typeof action.payload === 'string' &&
    action.payload.includes('<script>')
  ) {
    console.warn('[Warning] we detected an unsafe Action!');
    return;
  }
  const allowedActions = [
    '_cart/addItemToCart',
    '_cart/updateQuantity',
    '_cart/removeItemCart',
    '_cart/removeCart',
    '_cart/applyCoupon',
    '_cart/removeCoupon',
    '_cart/order',
    '_cart/orderSession',
  ];

  if (!allowedActions.includes(action.type)) {
    console.warn(`[Warning] action not allowed!`);
    return;
  }
  return result;
};
