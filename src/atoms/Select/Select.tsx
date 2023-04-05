import React, { FC } from 'react';

type SelectProps = {
  options: string[];
  defaultValue?: string;
  onSelect?: (value: string) => void;
};

const Select: FC<SelectProps> = ({ options, defaultValue = options[0], onSelect = () => {} }) => {
  return (
    <select
      className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
      onChange={(e) => onSelect(e.target.value)}
      defaultValue={defaultValue}
    >
      {options.map((option: string) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
