import { forwardRef } from "react";

const Input = forwardRef(function Input({ children, type, id }, ref) {
  const parClasses = "flex flex-col gap-1 my-4";
  const inputClasses =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  const labelClasses = "text-sm font-bold uppercase text-stone-500";

  return (
    <p className={parClasses}>
      <label htmlFor={id} className={labelClasses}>
        {children}
      </label>

      {type != "textarea" && (
        <input
          ref={ref}
          type={type}
          id={id}
          className={inputClasses}
          name={id}
        />
      )}
      {type == "textarea" && (
        <textarea
          ref={ref}
          id={id}
          className={inputClasses}
          name={id}
        ></textarea>
      )}
    </p>
  );
});

export default Input;
