
"use client";

import { ButtonHTMLAttributes, forwardRef, useMemo, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "dark" | "black";
  variant?: "contained" | "outlined";
  size?: "small" | "normal" | "large" | "none";
  rounded?: "none" | "medium" | "full";
  className?: string;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    color = "primary",
    variant = "contained",
    size = "none",
    rounded = "none",
    className,
    children,
    ...otherProps
  } = props;

  const colorClass = useMemo(() => {
    if (color === "primary") {
      if (variant === "contained") return "bg-primaryBlue text-white";
    }
    if (color === "dark") {
      if (variant === "contained") return "bg-secondaryGreen text-white";
      
    }
    if (color === "black") {
      if (variant === "contained") return "bg-black text-white";
    
    }
    return "";
  }, [color, variant]);

  const roundedClass = useMemo(() => {
    if (rounded === "none") return "rounded-none";
    if (rounded === "medium") return "rounded-[30px]";
    if (rounded === "full") return "rounded-[40px]";
    return "";
  }, [rounded]);

  const sizeClass = useMemo(() => {
    if (size === "small") return "min-h-[36px] text-sm px-4";
    if (size === "normal") return "min-h-[34px] px-2 text-sm";
    if (size === "large") return "min-h-[56px] text-lg px-6";
    // min-h-[56px]
    return "";
  }, [size]);

  const getClassName = useMemo(() => {
    let classList = colorClass;
    if (sizeClass) classList = classList + " " + sizeClass;
    if (roundedClass) classList = classList + " " + roundedClass;
    if (className) classList = classList + " " + className;
    return classList;
  }, [className, colorClass, roundedClass, sizeClass]);

  return (
    <button
      ref={ref}
      className={`font-medium select-none border flex items-center justify-center gap-[6px] disabled:cursor-not-allowed disabled:bg-disableGray disable:text-white ${getClassName}`}
      {...otherProps}
    >
      {children}
    </button>
  );
});
// Adding display name to the component
Button.displayName = "Button";
export default Button;








//  <button
//             className={`w-full min-h-14 py-3 px-6 rounded-[40px] bg-primaryBlue text-white text-lg font-medium leading-extra-tight flex items-center justify-center  disabled:cursor-not-allowed disabled:bg-disableGray disable:text-white  ${className}`}
//             {...rest}
//         >
//             {children}
//         </button>
// transition-colors duration-200 hover:bg-[#24144a] 
