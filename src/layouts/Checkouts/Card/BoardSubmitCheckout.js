import React from 'react';

// @components
import Checkbox from '@components/UI/Form/Checkbox';

const BoardSubmitCheckout = ({ register, errors }) => {
  return (
    <>
      <div className="mb-6 block w-full space-y-4">
        <div className="block w-full space-y-4 text-sm font-light text-black-900">
          <p>
            {`Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy. If you have any issues or questions regarding
            your order, please contact us here`}
          </p>
        </div>
        <div className="block w-full">
          <Checkbox
            label={`I have read and agree to the ticket <a href="/privacy-policy" class="hover:text-primary underline">privacy policy</a> <br/>& <a href="/terms-and-conditions" class="hover:text-primary underline">terms and conditions</a>`}
            ariaLabel="I have read and agree - Checkout"
            size="sm"
            config={{
              ...register(`i_have_read_and_agree`, {
                required: true,
              }),
            }}
            errors={errors[`i_have_read_and_agree`]}
          />
        </div>
        <div className="block w-full space-y-4 text-sm font-light text-black-900">
          <p className="font-normal">
            {`By selecting this payment method, you agree that all submitted data for
            your order will be processed by payment processor.`}
          </p>
        </div>
      </div>
    </>
  );
};

export default BoardSubmitCheckout;
