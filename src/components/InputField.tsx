import React from 'react';

type InputFieldProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const InputField = ({ value, onChange, placeholder }: InputFieldProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder || 'Enter a task...'}
      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default InputField;