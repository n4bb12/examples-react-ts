import React, { LabelHTMLAttributes } from "react";
export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean;
}
export declare const Label: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLLabelElement> & React.LabelHTMLAttributes<HTMLLabelElement> & LabelProps, any, React.ClassAttributes<HTMLLabelElement> & React.LabelHTMLAttributes<HTMLLabelElement> & LabelProps>;
export declare const example: JSX.Element;
