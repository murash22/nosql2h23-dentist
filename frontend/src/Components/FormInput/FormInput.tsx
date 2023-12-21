import { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function FormInput({...props}: FormInputProps) {

  return (
    <>
      <input {...props}
        className="w-full border-b  border-black border-opacity-30
          bg-base2  text-black p-3 outline-0 text-opacity-75 text-lg
          h-10 placeholder:text-opacity-30 placeholder:text-black
        "
      />
    </>
  )
}

export default FormInput