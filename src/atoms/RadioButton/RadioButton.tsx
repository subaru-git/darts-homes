import React, { FC, useEffect, useState } from 'react';

interface ButtonValue {
  value: string;
  label?: string;
  ariaLabel?: string;
}

type SwitchProps = {
  values: ButtonValue[];
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
};

const RadioButton: FC<SwitchProps> = ({
  values,
  defaultValue,
  disabled = false,
  onChange = () => {},
}) => {
  const [value, setValue] = useState(defaultValue || values[0].value);
  useEffect(() => {
    setValue(defaultValue || values[0].value);
  }, [defaultValue, values]);
  return (
    <div className='flex'>
      {values.map((v, i) => (
        <div key={`${v.value}-${i}`}>
          <input
            id={`radio-${v.value}`}
            type='radio'
            className='peer hidden'
            name={`option-${values.map((v) => v.value).join('-')}`}
            onChange={() => {
              setValue(v.value);
              onChange(v.value);
            }}
            checked={value === v.value}
            disabled={disabled}
            aria-label={v.ariaLabel}
          />
          <label
            htmlFor={`radio-${v.value}`}
            className={`cursor-pointer select-none bg-gray-100 px-4 py-1 text-sm no-tap-highlighting peer-checked:bg-blue-500 peer-checked:text-white peer-disabled:opacity-60 md:text-base ${
              i === 0 ? 'rounded-l-md' : i === values.length - 1 ? 'rounded-r-md' : ''
            }`}
          >
            {v.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButton;
