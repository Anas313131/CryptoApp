function Button({ text, onClick, variant = "primary", type = "button" }) {
  const base =
    "w-full h-[46px] rounded-lg font-semibold text-[16px] transition-all duration-200";

  const styles = {
    primary: "bg-[#6C25FF] text-white hover:opacity-95",
    secondary: "bg-[#cebafb] text-[#1d1d1d]",
    disabled: "bg-[#CBCBCB] text-white",
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles[variant]}`}>
      {text}
    </button>
  );
}

export default Button;