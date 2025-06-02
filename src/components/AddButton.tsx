import React from 'react';

type AddButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const AddButton = ({ onClick, disabled, children }: AddButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded text-white ${
        disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
      }`}
    >
      {children}
    </button>
  );
};

export default AddButton;