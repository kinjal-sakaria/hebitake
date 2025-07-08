/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

import Button from "@/components/elements/Button";
import IdDropdown from "@/components/elements/DropDown";
import Text from "@/components/elements/Text";
import { UploadPhoto } from "@/components/assets";

export default function AgencyBrandView() {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setPreviewUrl(URL.createObjectURL(selectedFile));
        }
    };

    return (
        <>
            <div className="pt-[60px] text-2xl font-medium text-primaryBlack leading-[100%]">
                Agency Branding
            </div>

            <p className="font-normal text-lg leading-[100%] text-primaryLight pt-4">
                Welcome! We&lsquo;re thrilled to have you
            </p>

            <div className="pt-10">
                {/* Form for Agency Branding */}
                <form>
                    <div className="pt-6">
                        <IdDropdown
                            label="ID Proof"
                            options={["Seller", "Normal Agent", "Agency", "Buyer"]}
                            defaultValue="Select ID Proof"
                            onChange={(val) => console.log("Selected:", val)}
                        />
                    </div>

                    <div className="pt-6">
                        <div className="relative border-2 border-dashed border-disableGray rounded-md w-full h-[220px] flex flex-col items-center justify-center bg-[#E6E6EA] overflow-hidden">
                            <input
                                type="file"
                                accept="image/*"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={handleFileChange}
                            />
                            {previewUrl ? (
                                <img
                                    src={previewUrl}
                                    alt="Preview"
                                    className="object-contain max-h-full"
                                />
                            ) : (
                                <div className="flex flex-col items-center">
                                    <UploadPhoto />
                                    <Text
                                        size="normal"
                                        weight="bold"
                                        className="text-primaryGray leading-extra-tight pt-2"
                                    >
                                        Upload Logo
                                    </Text>
                                </div>
                            )}
                        </div>
                        {file && (
                            <p className="text-xs text-gray-600 mt-1 truncate">{file.name}</p>
                        )}
                    </div>
                    <div className="pt-40">
                        <Text size="normal" weight="medium" textAlign="center">
                            <a
                                href="/sign-in"
                                className=" text-primaryBlack leading-extra-tight cursor-pointer"
                            >
                                Back
                            </a>
                        </Text>
                    </div>
                    <div className="pt-7">
                        <Button
                            color="primary"
                            rounded="full"
                            variant="contained"
                            size="large"
                            className="w-full cursor-pointer"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
{
    /* hover:bg-gray-50 transition */
}
