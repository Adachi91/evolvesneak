import React from "react";
import { ErrorBoxContainer, ErrorBoxInfo, ErrorBoxMessage, ErrorBoxWarning } from "../styles/elementStyles";

/**
 *  Display a ErrorBox to inform or warn of issues.
 * @param {Object} props - Struct{ err: { index: { type, msg } } }
 * @returns Renders ErrorBox on any error level
 */
export default function ErrorBox ( { props } ) { //this is about to get sloppy
    /*const error = props.Error;
    const type = props.Type;
    const msg = props.Message;*/
    let isErr = false;
    const err = props.err;
    const errBuilder = [];

    if(Object.keys(err).length > 0) {
        isErr = true;
        for(const [k, v] of err) {
            if(v.type === "info") {
                //return <ErrorBoxContainer><ErrorBoxInfo>Info: <ErrorBoxMessage>{msg}</ErrorBoxMessage></ErrorBoxInfo></ErrorBoxContainer>
                errBuilder.push(<ErrorBoxInfo>Info: <ErrorBoxMessage>{k} - {v.msg}</ErrorBoxMessage></ErrorBoxInfo>);
            } else if(v.type === "warn") {
                errBuilder.push(<ErrorBoxWarning>Error: <ErrorBoxMessage>{k} - {v.msg}</ErrorBoxMessage></ErrorBoxWarning>);
                //return <ErrorBoxContainer><ErrorBoxWarning>Error: <ErrorBoxMessage>{msg}</ErrorBoxMessage></ErrorBoxWarning></ErrorBoxContainer>
            }
        }
    }

    return (
        <>
            {isErr && <ErrorBoxContainer>{errBuilder}</ErrorBoxContainer>}
        </>
    );
};


//export default ErrorBox;