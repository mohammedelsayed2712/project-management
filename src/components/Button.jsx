function Button({ children, ...props }) {
  return (
    <button
      className="bg-stone-700 text-stone-400 px-4 py-2 rounded-md text-xs md:text-base hover:bg-stone-600 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
