import React from 'react';

const OrderProcessModal = ({
  icons,
  label = `Processing Your Order...`,
  shortDesc = `If nothing happens, check your email to complete the payment.`,
}) => {
  return (
    <>
      <div
        id={'ca25PaymentProcess_Modals'}
        className={`ca25PaymentProcess_Modals fixed inset-x-0 inset-y-0 z-primary flex cursor-default flex-col items-center justify-center bg-black-900/60 px-2.5 sm:px-0`}
      >
        <div className="flex w-full max-w-[313px] flex-col items-center justify-center rounded-xl bg-white px-4 pb-4 pt-4.5 sm:max-w-[373px] sm:rounded-2xl sm:px-6 sm:pb-6 sm:pt-8">
          {icons}
          <div className="mt-4 text-center sm:mt-6">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl">{label}</h2>
            <p className="text-balance text-sm font-light text-gray-500">
              {shortDesc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderProcessModal;
