import { ButtonHTMLAttributes } from "react";

interface LoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: "primary" | "secondary";
}

function LoginButton({theme, children, ...props}: LoginButtonProps) {

  const styles = {
    "primary": "bg-base1 text-white",
    "secondary": "bg-additional text-base1"
  }

  return (
    <button {...props} className={`${styles[theme]} font-poppins rounded-3xl w-full p-2`}>
      {children}
    </button>
  )
}

export default LoginButton