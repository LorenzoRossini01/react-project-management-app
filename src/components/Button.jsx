export default function Button({ children, toggleClick, secondary, ...props }) {
  function handleClick() {
    toggleClick();
  }

  let classList = "btn btn-primary  px-6 py-2  rounded mt-6 ";

  if (secondary == true) {
    classList +=
      " text-stone-900 hover:text-stone-600 bg-white hover:bg-stone-200";
  } else {
    classList +=
      " text-stone-200 hover:text-stone-200 bg-stone-900 hover:bg-stone-600";
  }
  return (
    <button onClick={handleClick} className={classList} {...props}>
      {children}
    </button>
  );
}
