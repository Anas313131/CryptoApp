function InputField({
  label,
  placeholder,
  type = "text",
  required = false,
}) {
  return (
    <div className="relative mt-6">
      <label className="absolute -top-2.5 left-3 bg-[#f7f8f9] px-1 text-[13px] text-[#6C25FF] z-10">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-11.5 border border-[#CFCFCF] rounded-lg px-4 text-[15px] outline-none bg-transparent text-[#1d1d1d] placeholder:text-[#9b9b9b]"
      />
    </div>
  );
}

export default InputField;