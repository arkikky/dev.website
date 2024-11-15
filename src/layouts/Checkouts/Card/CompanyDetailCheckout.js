import React from 'react';

// @style
import 'react-phone-input-2/lib/high-res.css';

// @form
import Label from '@components/UI/Form/Label';
import Input from '@components/UI/Form/Input';
import Select from '@components/UI/Form/Select';

const CompanyDetailCheckout = ({
  fieldForm,
  watch,
  register,
  errors,
  arrIndex = 0,
}) => {
  return (
    <>
      <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
        <div className="block">
          <Label
            forId={`tktCAForm_CompanyAttndee${arrIndex}Checkout`}
            label="Company Name"
            required={watch}
          />
          <Input
            id={`tktCAForm_CompanyAttndee${arrIndex}Checkout`}
            type="text"
            placeholder="Eg: Coinfest Asia"
            ariaLabel={`Company Attendee${arrIndex} - Checkout`}
            disabled={watch === true ? false : true}
            config={{
              ...register(`companyAttndee${arrIndex}`, {
                required: watch,
                maxLength: 80,
                pattern: {
                  value: /^(N\/A|[a-zA-Z0-9\s-_]{2,80})$/,
                },
              }),
            }}
            errors={errors[`companyAttndee${arrIndex}`]}
          />
        </div>
        <div
          className={`"block ${errors[`jobPositionAttndee${arrIndex}`] ? 'error' : ''} ${watch ? '' : 'disabled'}`}
        >
          <Label
            forId={`tktCAForm_JobPositionAttndee${arrIndex}Checkout`}
            label="Position"
            required={watch}
          />
          <Select
            id={`tktCAForm_JobPositionAttndee${arrIndex}Checkout`}
            ariaLabel={`Job Position Attendee${arrIndex} - Checkout`}
            label="Choose a position..."
            listSelect={
              fieldForm !== undefined && fieldForm[4].fields[1].options
            }
            withSearch={true}
            disabled={watch === true ? false : true}
            config={{
              ...register(`jobPositionAttndee${arrIndex}`, {
                required: watch,
              }),
            }}
          />
        </div>
      </div>
      <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
        <div
          className={`block ${errors[`companyFocusAttndee${arrIndex}`] ? 'error' : ''} ${watch ? '' : 'disabled'}`}
        >
          <Label
            forId={`tktCAForm_CompanyFocusAttndee${arrIndex}Checkout`}
            label="Company Focus"
            required={watch}
          />
          <Select
            id={`tktCAForm_CompanyFocusAttndee${arrIndex}Checkout`}
            ariaLabel={`Company Focus Attendee${arrIndex} - Checkout`}
            label="Choose a company focus..."
            listSelect={
              fieldForm !== undefined && fieldForm[5].fields[0].options
            }
            withSearch={true}
            config={{
              ...register(`companyFocusAttndee${arrIndex}`, {
                required: watch,
              }),
            }}
          />
        </div>
        <div
          className={`"block ${errors[`companySizeAttndee${arrIndex}`] ? 'error' : ''} ${watch ? '' : 'disabled'}`}
        >
          <Label
            forId={`tktCAForm_CompanySizeAttndee${arrIndex}Checkout`}
            label="Company Size"
            required={watch}
          />
          <Select
            id={`tktCAForm_CompanySizeAttndee${arrIndex}Checkout`}
            ariaLabel={`Company Focus Attendee${arrIndex} - Checkout`}
            label="Choose a company size..."
            listSelect={
              fieldForm !== undefined && fieldForm[5].fields[1].options
            }
            config={{
              ...register(`companySizeAttndee${arrIndex}`, {
                required: watch,
              }),
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CompanyDetailCheckout;
