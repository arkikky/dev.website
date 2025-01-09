import React from 'react';
import Link from 'next/link';

// @components
import Checkbox from '@components/UI/Form/Checkbox';

const BoardSubmitCheckout = ({ register, errors }) => {
  return (
    <>
      <div className="mb-6 block w-full space-y-4">
        <div className="block w-full space-y-4 pr-0 text-sm font-light text-gray-500 prose-a:font-medium prose-a:text-primary prose-a:underline sm:pr-4">
          <p>
            {`Your personal data will be used to process your order, enhance your experience on this website, and for other purposes outlined in our Terms and Conditions and Privacy Policy. If you have any questions regarding your order, please contact us at`}{' '}
            <Link
              href={'mailto:support@coinfest.asia.'}
              title="Coinfest Asia 2025 Support Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`support@coinfest.asia.`}
            </Link>
          </p>
        </div>
        <div className="block w-full prose-a:font-medium">
          <Checkbox
            label={`I have read and agree to <a href="/privacy-policy" class="hover:text-primary underline">privacy policy</a> <br/>& <a href="/terms-and-conditions" class="hover:text-primary underline">terms and conditions</a>`}
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
        <div className="block w-full space-y-4 text-sm font-light text-gray-500">
          <p className="font-light">
            {`By choosing this payment method, you consent to having your order data processed by the payment processor.`}
          </p>
        </div>
      </div>
    </>
  );
};

export default BoardSubmitCheckout;
