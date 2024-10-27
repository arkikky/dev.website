const securityMiddleware = (store) => (next) => (action) => {
  if (
    typeof action.payload === 'string' &&
    action.payload.includes('<script>')
  ) {
    console.warn('Warning: We detected an unsafe Action!');
    return;
  }

  const allowedActions = ['_cart/addItemToCart', '_cart/updateQuantity'];
  if (!allowedActions.includes(action.type)) {
    console.warn(`Warning: Action not allowed: ${action.type}!`);
    return;
  }

  

  return next(action);
};

export default securityMiddleware;
