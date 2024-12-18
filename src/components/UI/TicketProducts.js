import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { toast } from 'sonner';
import MarkdownRenderer from '@components/MarkdownRenderer';

// @redux
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity } from '@reduxState/slices';

// @lib/controller & helper
import { currencyConverter } from '@lib/helper/CalculateCartContext';
import { useCart } from '@lib/hooks/Cart';

// @components
import ToastAlerts from '@components/UI/Alerts/ToastAlert';

const TicketProducts = ({
  data,
  cartProducts = [],
  isLoading,
  isSessionLoading,
  onEventChange,
  handleProducts,
  totalQty,
}) => {
  const dispatch = useDispatch();
  const { data: isCart } = useSelector((state) => state.cart);
  const { checkTotalQtyCart, updateCartQuantity } = useCart();
  const { documentId } = data;
  if (!data?.description) return null;

  // @hook(Session Product)
  const [isSessionProducts, setSessionProducts] = useState({
    products: {},
    checkProduct: false,
    count: 1,
    quantity: 0,
  });

  // @card(theme)
  const style = {
    rc33x0dgm6tm707jghffuip4: 'ca25Products_VIP',
  };

  // @discount-price
  const getPriceDiscountDisplay = (d) => {
    if (!d?.price || !d?.priceSale) return null;
    return d.price;
  };
  const priceDiscountDisplay = getPriceDiscountDisplay(data);

  const handleCountChange = async (idProducts, delta) => {
    const newCount = isSessionProducts?.count + delta;
    if (newCount < 1 || newCount > 15) {
      setTimeout(() => {
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              position="bottom-[78px] inset-x-2.5 sm:inset-x-3 top-auto"
              type="info"
              visible={true}
              label={`The product quantity is limited to a maximum of 15 units only!`}
            />
          ),
          { duration: 5000 }
        );
      }, 700);
      return;
    }
    setSessionProducts((prev) => ({ ...prev, count: newCount }));
    onEventChange(idProducts, newCount);
  };

  // @use-effect

  // @use-effect
  useEffect(() => {
    const calculateProducts = cartProducts?.find(
      (i) => i.documentId === data?.documentId
    );
    if (calculateProducts) {
      setSessionProducts((prev) => ({
        ...prev,
        products: calculateProducts,
      }));
    } else {
      setSessionProducts((prev) => ({
        ...prev,
        products: {},
      }));
    }
    return () => {
      undefined;
    };
  }, [cartProducts]);
  useEffect(() => {
    const calculateTotalQty = isCart?.find(
      (i) => i.id_product === data?.documentId
    );
    if (calculateTotalQty) {
      setSessionProducts((prev) => ({
        ...prev,
        checkProduct: true,
        count: calculateTotalQty.quantity,
      }));
    } else {
      setSessionProducts((prev) => ({
        ...prev,
        checkProduct: false,
      }));
    }
    return () => {
      undefined;
    };
  }, [isCart]);
  useEffect(() => {
    const calculateQty = isCart?.find((i) => i.id_product === data?.documentId);
    if (isSessionProducts?.checkProduct === true) {
      onEventChange(calculateQty?.id_product, calculateQty?.quantity);
      return;
    }
    onEventChange(calculateQty?.id_product, 0);
    return () => {
      undefined;
    };
  }, [isCart, isSessionProducts?.checkProduct]);

  return (
    <>
      <div
        className={twMerge(
          `ca25Products flex h-auto flex-col space-y-6 rounded-3xl px-1.5 py-1.5 lg:h-[569px]`,
          style[documentId] || ''
        )}
      >
        <div className="ca25Products_Card relative flex h-full flex-col items-start justify-between rounded-[19px] px-4 py-4 sm:px-4.5 sm:py-4.5 lg:px-6 lg:py-6">
          <div className="flex w-full flex-col items-start pb-15 lg:pb-0">
            <div className="block w-full">
              <h2 className="mb-1 text-xl font-medium sm:mb-2">
                {data?.name || 'Ticket Products'} 
              </h2>
              <div className="inline-flex items-start space-x-2.5">
                <span className="text-[32px] font-semibold leading-[38px]">
                  {currencyConverter(data?.priceSale ?? data?.price)}
                </span>
                {priceDiscountDisplay && (
                  <span className="pt-0.5 text-xl font-normal text-gray-400 line-through">
                    {currencyConverter(priceDiscountDisplay)}
                  </span>
                )}
              </div>
            </div>

            <div className="my-6 block w-full border-t border-dashed border-gray-200"></div>

            <div className="block w-full">
              {documentId === 'rc33x0dgm6tm707jghffuip4' && (
                <span className="mb-3.5 flex flex-row items-center justify-start text-lg font-medium">
                  <svg
                    className="ml-[2px] mr-[11px] size-6 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                    <path d="M20 3v4" />
                    <path d="M22 5h-4" />
                    <path d="M4 17v2" />
                    <path d="M5 18H3" />
                  </svg>
                  {`All access from Festival Ticket`}
                </span>
              )}
              <MarkdownRenderer content={data?.description} />
            </div>
          </div>

          <div className="flex w-full flex-row items-center justify-between">
            <div className={`flex flex-col items-start`}>
              <span className="mb-1.5 block text-base">Qty : </span>
              <div
                className={`hsCA25_UpdatedQtyCart hs-dropdown-menu ml-0 mt-0 flex w-max rounded-[8px] border border-gray-200 bg-gray-50 px-[3px] py-[3px]`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="Button update quantity Cart (Coinfest Asia 2025)"
              >
                <div className="inline-flex flex-row gap-x-1.5">
                  {data?.documentId !== 'sn4ujm0d1ebbc8lme1ihzsa9' ? (
                    <>
                      <button
                        id="tcktCa25Btn_MinQtyCarts"
                        className="tktCA25Btn_Qty"
                        type="button"
                        tabIndex={-1}
                        aria-label="Button update quantity Min Cart (Coinfest Asia 2025)"
                        aria-labelledby="Button update quantity Min Cart (Coinfest Asia 2025)"
                        disabled={
                          isSessionProducts?.count >= 1 &&
                          isSessionProducts?.count <= 1
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          if (isSessionProducts?.checkProduct === true) {
                            console.log('awdawd');

                            updateCartQuantity(
                              cartProducts,
                              isSessionProducts?.products,
                              false
                            );
                          } else {
                            handleCountChange(data?.documentId, -1);
                          }
                        }}
                      >
                        <svg
                          className="size-3.5 shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                        </svg>
                      </button>
                      <input
                        className={`pointer-events-none w-5 cursor-default select-none border-0 bg-transparent p-0 text-center text-sm font-light text-black-900 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
                        type="number"
                        aria-roledescription="Number field"
                        value={isSessionProducts?.count}
                        tabIndex="-1"
                        maxLength="15"
                        minLength={1}
                        readOnly={true}
                        disabled={true}
                      />
                      <button
                        id="tcktCa25Btn_MaxQtyCarts"
                        className={`tktCA25Btn_Qty`}
                        type="button"
                        tabIndex={-1}
                        aria-label="Button update quantity Max Cart (Coinfest Asia 2025)"
                        aria-labelledby="Button update quantity Max Cart (Coinfest Asia 2025)"
                        disabled={
                          isSessionProducts?.count >= 15 ||
                          checkTotalQtyCart(cartProducts, 'products')
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          if (isSessionProducts?.checkProduct === true) {
                            updateCartQuantity(
                              cartProducts,
                              isSessionProducts?.products,
                              true
                            );
                          } else {
                            handleCountChange(data?.documentId, 1);
                          }
                        }}
                      >
                        <svg
                          className="size-3.5 shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                    </>
                  ) : data?.documentId === 'sn4ujm0d1ebbc8lme1ihzsa9' ? (
                    <input
                      className={`pointer-events-none w-5 cursor-default select-none border-0 bg-transparent p-0 text-center text-sm font-light text-black-900 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
                      type="number"
                      aria-roledescription="Number field"
                      value={5}
                      tabIndex="-1"
                      maxLength="15"
                      minLength={1}
                      readOnly={true}
                      disabled={true}
                    />
                  ) : null}
                </div>
              </div>
            </div>
            {isSessionProducts?.checkProduct === true ? (
              <button
                id={`ca25AddedBtn_Product${data?.name.replace(/\s/g, '')}`}
                className={`ca25ProductsBtn relative inline-flex w-[169px] items-center justify-center rounded-xl px-6 py-5 font-semibold uppercase disabled:pointer-events-none disabled:opacity-90 ${isSessionLoading === true ? 'cursor-default' : 'cursor-pointer'}`}
                role="button"
                aria-label={`Button Coinfest Asia 2025 - ${data?.name.replace(/\s/g, '')} Added Products)`}
                disabled={true}
              >
                Selected
              </button>
            ) : (
              <button
                id={`ca25Btn_Product${data?.name.replace(/\s/g, '')}`}
                className={`ca25ProductsBtn relative inline-flex w-[169px] items-center justify-center rounded-xl px-6 py-5 font-semibold uppercase disabled:pointer-events-none disabled:opacity-90 ${isSessionLoading === true ? 'cursor-default' : 'cursor-pointer'}`}
                role="button"
                aria-label={`Button Coinfest Asia 2025 - ${data?.name.replace(/\s/g, '')} Products)`}
                disabled={isLoading}
                onClick={(e) => {
                  e.preventDefault();
                  handleProducts(data, isSessionProducts?.count);
                }}
              >
                {isLoading ? (
                  <div
                    className="ca25ProductsBtn_Loading block size-6 animate-spin items-center justify-center rounded-full border-[2.5px] border-current border-t-transparent font-medium opacity-80"
                    role="status"
                    aria-label="Coinfest Asia 2025 (Loading Products)"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  'Buy Ticket'
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketProducts;
