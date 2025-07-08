/* eslint-disable react/display-name */
import React, { InputHTMLAttributes, LegacyRef, ReactNode, forwardRef } from 'react';

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    className?: string;
    rightIcon?: ReactNode;
}

const TextField = forwardRef(
    (
        {
            label,
            className = '',
            rightIcon,
            ...rest
        }: TextFieldProps,
        ref: LegacyRef<HTMLInputElement>
    ) => {


        return (
            <div className={`flex flex-col gap-1 ${className}`}>
                {label && (
                    <label className="text-base font-medium text-primaryBlack leading-extra-tight pb-2">
                        {label}
                    </label>
                )}
                <div className="relative">
                    <input
                        ref={ref}
                        {...rest}
                        className={`w-full py-[14px] px-[18px] h-12 border-[2px] rounded-lg border-lightGray bg-white text-base text-primaryBlack font-medium leading-extra-tight focus:outline-none focus:ring-0  placeholder-text-darkGray placeholder:font-normal placeholder:leading-extra-tight `}
                    />
                    {rightIcon && (
                        <div className="absolute inset-y-0 right-2 flex items-center">
                            {rightIcon}
                        </div>
                    )}
                </div>
            </div>
        );
    }
);

export default TextField;
