// @redux
import { useDispatch } from 'react-redux';
import { updateQuantity } from '@reduxState/slices';

export function useCart() {
  const dispatch = useDispatch();

  // @total(Cart)
  const checkTotalQtyCart = (items, type) => {
    const totalQty = items?.reduce((acc, i) => acc + i?.quantity, 0);
    if (type === 'submit') {
      return totalQty >= 16;
    } else if (type === 'products') {
      return totalQty >= 15;
    }
    return false;
  };
  // @quantity
  const updateCartQuantity = async (items, store, is) => {
    try {
      const toQty = items?.reduce((acc, i) => acc + i?.quantity, 0);
      var newQty = store?.quantity;
      if (newQty > Number(store?.stock)) return;
      if (is) {
        if (toQty <= 15) {
          newQty = Math.min(store?.quantity + 1, 15);
        }
      } else {
        newQty = Math.max(store?.quantity - 1, 1);
      }
      if (toQty + (is ? 1 : -1) <= (toQty <= 15 ? 15 : toQty)) {
        dispatch(updateQuantity({ products: store, qty: newQty }));
      }
    } catch (error) {
      // console.error('[Error] fetching:', error);
      return;
    }
  };

  // @total(store)
  const getTotalCart = (data) => {
    const total = data?.reduce(
      (acc, i) => acc + i?.quantity * Number(i?.priceSale ?? i?.price),
      0
    );
    return total;
  };

  return {
    checkTotalQtyCart,
    updateCartQuantity,
    getTotalCart,
  };
}
