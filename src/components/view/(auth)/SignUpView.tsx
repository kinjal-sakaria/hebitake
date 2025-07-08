/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

// Components of the elements folder
import Text from "@/components/elements/Text";
import Button from "@/components/elements/Button";
import TextField from "@/components/elements/TextField";
import RoleDropdown from "@/components/elements/DropDown";

// Assets
import { EyeIcon, EyeIconInvisible } from '@/components/assets';


export default function SignUpView() {
    const [showPassword, setshowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setshowPassword(!showPassword);
    };
    return (
        <>
            <div className="pt-[60px] text-2xl font-medium text-primaryBlack leading-[100%]">
                Create an account
            </div>
            <p className="font-normal text-lg leading-[100%] text-primaryLight pt-4">
                Lorem ipsum dolor sit amet
            </p>
            <div className="pt-10">
                <form>
                    <TextField label="Full Name" placeholder="Enter Name" />
                    <div className="pt-6">
                        <TextField label="Email" placeholder="Enter Email" />
                    </div>

                    <div className="pt-6">
                        <RoleDropdown
                            label="Role"
                            options={["Seller", "Normal Agent", "Agency", "Buyer"]}
                            defaultValue="Seller"
                            onChange={(val) => console.log("Selected:", val)}
                        />
                    </div>

                    <div className="pt-6 flex gap-3 lg:w-full  md:flex-row flex-col">
                        <TextField
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            rightIcon={
                                showPassword ? (
                                    <EyeIcon
                                        stroke="#545A70"
                                        onClick={togglePasswordVisibility}
                                    />
                                ) : (
                                    <EyeIconInvisible
                                        stroke="#545A70"
                                        onClick={togglePasswordVisibility}
                                    />
                                )
                            }
                            className="lg:w-1/2 md:w-full"
                        />
                        {/* <div> */}
                        <TextField
                            label="Confirm Password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            rightIcon={
                                showPassword ? (
                                    <EyeIcon
                                        stroke="#545A70"
                                        onClick={togglePasswordVisibility}
                                    />
                                ) : (
                                    <EyeIconInvisible
                                        stroke="#545A70"
                                        onClick={togglePasswordVisibility}
                                    />
                                )
                            }
                            className="lg:w-1/2 md:w-full"
                        />
                        {/* </div> */}
                    </div>
                    <div className='pt-5'>
                        <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-primaryLight "
                            id="terms"
                            name="terms"
                            required
                        />
                        <label htmlFor="terms" className="pl-3 text-base text-primaryLight font-semibold leading-extra-tight">
                            Agree to the Terms & Condition
                        </label>
                    </div>
                    {/* <div className="pt-5">
            <label className="flex items-center">
              <input
                type="checkbox"
                required
                className="w-[20px] h- appearance-none border-[2px] rounded border-primaryLight flex items-center justify-center 
                  checked:bg-primaryBlue  checked:flex checked:items-center checked:justify-center
                  checked:before:content-['✔'] checked:before:text-white checked:before:text-lg checked:before:font-medium"
              />
              <Text
                size="normal"
                weight="bold"
                className="text-primaryLight pl-3 leading-extra-tight mobile:leading-[15.62px] mobile:text-[12px]"
              >
                Agree to the Terms & Condition
              </Text>
            </label>
          </div> */}
                    <div className="pt-6">
                        <Button
                            color="primary"
                            rounded="full"
                            variant="contained"
                            size="large"
                            className="w-full cursor-pointer"
                            disabled={true}
                        >
                            Next
                        </Button>
                    </div>
                    <div>

                        <Text
                            size="lg"
                            weight="normal"
                            textAlign='center'
                            className="text-primaryLight pt-4 leading-extra-tight"
                        >
                            Already have an account ?
                            <a href='/sign-in' className='text-green font-semibold cursor-pointer'>  Login</a>
                        </Text>
                    </div>
                    <div className="flex items-center w-full py-7">
                        <div className="flex-grow h-px bg-lightGray" />
                        <span className="mx-[10px] text-primaryLight text-lg self-center">
                            or continue with
                        </span>
                        <div className="flex-grow h-px bg-lightGray" />
                    </div>

                    {/* Social login buttons */}
                    <div className="flex gap-[21px] w-full justify-center">
                        <button className="flex items-center h-[56px] border-[2px] border-borderGray rounded-xl px-4 py-[36px] w-full justify-center ">
                            {/* Google Icon */}
                            <img src="assets/social-icon/google-icon.svg" />
                        </button>
                        <button className="flex items-center h-[56px] border-[2px] border-borderGray rounded-xl px-4 py-[36px] w-full justify-center ">
                            {/* ISO Icon */}
                            <img src="assets/social-icon/ios-icon.svg" />
                        </button>
                        <button className="flex items-center h-[56px] border-[2px] border-borderGray rounded-xl px-4 py-[36px] w-full justify-center ">
                            {/* Fb Icon */}
                            <img src="assets/social-icon/fb-icon.svg" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
{
    /* hover:bg-gray-50 transition */
}
