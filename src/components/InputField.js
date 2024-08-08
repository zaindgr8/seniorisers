import React from "react";

const InputField = ({
  label,
  id,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}) => {
  return (
    <div className="w-full md:w-[40%]">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name} // Ensure this is set
        value={value} // Ensure this is set
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        onChange={onChange} // Ensure this is set
        required
      />
    </div>
  );
};

export default InputField;
