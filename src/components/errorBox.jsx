import React from "react";
import { ErrorBoxContainer, ErrorBoxInfo, ErrorBoxMessage, ErrorBoxWarning } from "../styles/elementStyles";

/**
 *  Display a ErrorBox to inform or warn of issues.
 * @param {*} props 
 * @returns Renders ErrorBox on any error level
 */
const ErrorBox = (props) => {
    const error = props.Error;
    const type = props.Type;
    const msg = props.Message;

    if(error) {
        if(type == "info") {
            return <ErrorBoxContainer><ErrorBoxInfo>Info: <ErrorBoxMessage>{msg}</ErrorBoxMessage></ErrorBoxInfo></ErrorBoxContainer>
        } else if(type == "warn") {
            return <ErrorBoxContainer><ErrorBoxWarning>Error: <ErrorBoxMessage>{msg}</ErrorBoxMessage></ErrorBoxWarning></ErrorBoxContainer>
        }
    }
    return null;
};


export default ErrorBox;