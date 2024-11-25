// @redux
import { useDispatch } from 'react-redux';
import { updateQuantity } from '@reduxState/slices';

export function useCart() {
  const dispatch = useDispatch();

  // @total(Cart)
  const checkTotalQtyCart = (cartItems, type) => {
    const totalQty = cartItems?.reduce((acc, item) => acc + item.quantity, 0);
    if (type === 'submit') {
      return totalQty >= 6;
    } else if (type === 'products') {
      return totalQty >= 5;
    }
    return false;
  };

  // @quantity
  const updateCartQuantity = async (cartItems, cartProducts, isIncrease) => {
    try {
      const toQtyCart = cartItems?.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      let newQty = cartProducts?.quantity;
      if (isIncrease) {
        if (toQtyCart <= 5) {
          newQty = Math.min(cartProducts?.quantity + 1, 5);
        }
      } else {
        newQty = Math.max(cartProducts?.quantity - 1, 1);
      }

      if (newQty > Number(cartProducts?.stock)) return;
      if (
        toQtyCart + (isIncrease ? 1 : -1) <=
        (toQtyCart <= 5 ? 5 : toQtyCart)
      ) {
        dispatch(updateQuantity({ products: cartProducts, qty: newQty }));
      }
    } catch (error) {
      console.error('[Error] fetching:', error);
    }
  };

  // @total(Cart)
  const getTotalCart = (data) => {
    const getTotal_IDR = data?.reduce(
      (acc, items) =>
        acc + parseInt(items.price ?? items.priceSale) * items.quantity,
      0
    );
    return getTotal_IDR;
  };

  return {
    checkTotalQtyCart,
    updateCartQuantity,
    getTotalCart,
  };
}
