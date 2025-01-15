import React from 'react';
import Link from 'next/link';

const BoardSubmitCheckout = ({ register, setValue, getValues, errors }) => {
  // const [isChecked, setIsChecked] = useState(false);
  // const handleCheckboxChange = (e, id) => {
  //   setIsChecked(e?.target.checked);
  //   console.log(isChecked);
  // };
  // useEffect(() => {
  //   console.log(getValues('i_have_read_and_agree'));
  // }, [isChecked]);

  return (
    <>
      <div className="mb-6 block w-full space-y-4">
        <div className="block w-full prose-a:font-normal">
          {/* <Checkbox
            label={`I have read and agree to <a href="/privacy-policy" class="hover:text-primary underline">privacy policy</a> <br/>& <a href="/terms-and-conditions" class="hover:text-primary underline">terms and conditions</a>`}
            ariaLabel="I have read and agree - Checkout"
            size="sm"
            value={true}
            config={{
              ...register(`i_have_read_and_agree`, {
                required: true,
              }),
            }}
            errors={errors[`i_have_read_and_agree`]}
          /> */}
          <label
            htmlFor={`ca25Form_IHaveReadAndAgree`}
            className={`flex w-full cursor-pointer items-start`}
          >
            <input
              id={`ca25Form_IHaveReadAndAgree`}
              className={`boxShadow-none form-checkbox mt-px h-4.5 w-4.5 shrink-0 rounded border border-solid ${
                errors[`i_have_read_and_agree`]
                  ? 'border-red-500'
                  : 'border-gray-500/20'
              } bg-transparent text-primary outline-none ring-0 focus:outline-none focus-visible:outline-none`}
              type="checkbox"
              value={true}
              {...register('i_have_read_and_agree', {
                required: true,
              })}
            />

            <span className="ml-3 text-sm font-normal text-black-900">
              I have read and agree to{' '}
              <Link
                href="/privacy-policy"
                className="underline hover:text-primary"
              >
                privacy policy
              </Link>{' '}
              <br />&{' '}
              <Link
                href="/terms-and-conditions"
                className="underline hover:text-primary"
              >
                terms and conditions
              </Link>
            </span>
          </label>
        </div>
        <div className="block w-full space-y-4 text-sm font-light text-gray-500">
          <p className="font-light">
            {`Your data will be used to process your order and to improve your experience. By choosing this payment method, you consent to having your order data processed by the payment processor.`}
          </p>
        </div>
      </div>
    </>
  );
};

export default BoardSubmitCheckout;
