import React from 'react';

// @style
import 'react-phone-input-2/lib/high-res.css';

// @form
import Label from '@components/UI/Form/Label';
import Input from '@components/UI/Form/Input';
import Select from '@components/UI/Form/Select';

const CompanyDetailUpdated = ({
  fieldForm,
  watch,
  register,
  edited,
  errors,
}) => {
  return (
    <>
      <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
        <div className="block">
          <Label
            forId={`tktCAForm_CompanyAttndeeUpdated`}
            label="Company Name"
          />
          <Input
            id={`tktCAForm_CompanyAttndeeUpdated`}
            type="text"
            placeholder="Eg: Coinfest Asia"
            ariaLabel={`Company Attendee - Checkout`}
            disabled={edited}
            config={{
              ...register(`companyAttndee`, {
                required: false,
                maxLength: 80,
                pattern: {
                  value: /^(N\/A|[a-zA-Z0-9\s-_]{2,80})$/,
                },
              }),
            }}
            errors={errors[`companyAttndee`]}
          />
        </div>
        <div
          className={`"block ${errors[`jobPositionAttndee`] ? 'error' : ''} ${edited && 'disabled'}`}
        >
          <Label
            forId={`tktCAForm_JobPositionAttndeeUpdated`}
            label="Position"
          />
          <Select
            id={`tktCAForm_JobPositionAttndeeUpdated`}
            ariaLabel={`Job Position Attendee - Checkout`}
            label="Choose a position..."
            listSelect={
              fieldForm !== undefined && fieldForm[4].fields[1].options
            }
            withSearch={true}
            config={{
              ...register(`jobPositionAttndee`, {
                required: false,
              }),
            }}
          />
        </div>
      </div>
      <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
        <div
          className={`block ${errors[`companyFocusAttndee`] ? 'error' : ''} ${edited && 'disabled'}`}
        >
          <Label
            forId={`tktCAForm_CompanyFocusAttndeeUpdated`}
            label="Company Focus"
          />
          <Select
            id={`tktCAForm_CompanyFocusAttndeeUpdated`}
            ariaLabel={`Company Focus Attendee - Checkout`}
            label="Choose a company focus..."
            listSelect={
              fieldForm !== undefined && fieldForm[5].fields[0].options
            }
            withSearch={true}
            config={{
              ...register(`companyFocusAttndee`, {
                required: false,
              }),
            }}
          />
        </div>
        <div
          className={`"block ${errors[`companySizeAttndee`] ? 'error' : ''} ${edited && 'disabled'}`}
        >
          <Label
            forId={`tktCAForm_CompanySizeAttndeeUpdated`}
            label="Company Size"
          />
          <Select
            id={`tktCAForm_CompanySizeAttndeeUpdated`}
            ariaLabel={`Company Focus Attendee - Checkout`}
            label="Choose a company size..."
            listSelect={
              fieldForm !== undefined && fieldForm[5].fields[1].options
            }
            config={{
              ...register(`companySizeAttndee`, {
                required: false,
              }),
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CompanyDetailUpdated;
