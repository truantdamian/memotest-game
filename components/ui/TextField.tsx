import { useId } from "react";

export const TextField = (props) => {
  const id = useId();

  const { label, error, errorMessage, ...otherProps } = props;

  return (
    <>
      <label
        htmlFor={id}
        className={`block ml-2 text-sm font-medium text-gray-900 ${
          error ? "text-red-600" : ""
        }`}
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        className={`bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
          error ? "border border-red-600" : "border border-gray-300"
        }`}
        {...otherProps}
      />
      <span className="ml-2 text-xs text-red-600">{errorMessage}</span>
    </>
  );
};
