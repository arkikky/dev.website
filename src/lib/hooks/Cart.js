// @redux
import { useDispatch } from 'react-redux';
import { updateQuantity } from '@reduxState/slices';

export function useCart() {
  const dispatch = useDispatch();

  // @total(Cart)
  const checkTotalQtyCart = (cartItems, type) => {
    const totalQty = cartItems?.reduce((acc, item) => acc + item.quantity, 0);
    if (type === 'submit') {
      return totalQty >= 16;
    } else if (type === 'products') {
      return totalQty >= 15;
    }
    return false;
  };

  // @quantity
  const updateCartQuantity = async (cartItems, cartProducts, isIncrease) => {
    try {
      const toQtyCart = cartItems?.reduce(
        (acc, item) => acc + item?.quantity,
        0
      );
      var newQty = cartProducts.quantity;
      if (newQty > Number(cartProducts.stock)) return;
      if (isIncrease) {
        if (toQtyCart <= 15) {
          newQty = Math.min(cartProducts.quantity + 1, 15);
        }
      } else {
        newQty = Math.max(cartProducts.quantity - 1, 1);
      }
      if (
        toQtyCart + (isIncrease ? 1 : -1) <=
        (toQtyCart <= 15 ? 15 : toQtyCart)
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
        acc + items.quantity * parseInt(items.priceSale ?? items.price),
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
