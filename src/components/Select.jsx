import React, { useId } from "react";

/**
 * A custom select component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.options - The array of options for the select.
 * @param {string} props.label - The label for the select.
 * @param {string} [props.className=""] - The additional class name for the select.
 * @param {React.Ref} ref - The ref for the select.
 * @returns {JSX.Element} The rendered select component.
 */

function Select({ options, label, className, ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className=""></label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
