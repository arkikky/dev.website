export const globalMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // @security-middleware
  if (
    typeof action.payload === 'string' &&
    action.payload.includes('<script>')
  ) {
    console.warn('[Warning] We detected an unsafe Action!');
    return;
  }

  const allowedActions = [
    '_cart/addItemToCart',
    '_cart/updateQuantity',
    '_cart/applyCoupon',
    '_cart/removeCoupon',
    '_cart/removeCart',
  ];
  if (!allowedActions.includes(action.type)) {
    console.warn(`[Warning] Action not allowed!`);
    return;
  }

  return result;
};
