import { HTMLAttributes } from "react";

export interface SVGIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  size?: number;
  fill?: string;
}

export { default as EyeIcon } from "./icon/EyeIcon";
export { default as UploadPhoto } from "./icon/UploadPhoto";
export { default as EyeIconInvisible } from "./icon/EyeIconInvisible";
