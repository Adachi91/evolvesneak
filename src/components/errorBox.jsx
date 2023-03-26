import React from "react";
import { ErrorBoxContainer, ErrorBoxInfo, ErrorBoxMessage, ErrorBoxWarning } from "../styles/elementStyles";

/**
 *  Display a ErrorBox to inform or warn of issues.
 * @param {Object} props - Struct{ err: { index: { type, msg } } }
 * @returns Renders ErrorBox on any error level
 */
export default function ErrorBox ( { errState } ) { //this is about to get sloppy
    let isErr = false;
    const errBuilder = [];

    if(Object.keys(errState).length > 0) {
        isErr = true;
        for(const [k, v] of Object.entries(errState)) {
            console.warn(`[ErroBox]: k: ${k} :: v: ${v}`);
            if(v.type === "info") {
                errBuilder.push(<ErrorBoxInfo>Info: <ErrorBoxMessage>{k} - {v.msg}</ErrorBoxMessage></ErrorBoxInfo>);
            } else if(v.type === "warn") {
                errBuilder.push(<ErrorBoxWarning>Error: <ErrorBoxMessage>{k} - {v.msg}</ErrorBoxMessage></ErrorBoxWarning>);
            }
        }
    }

    return (
        <>
            {isErr ? <ErrorBoxContainer>{errBuilder}</ErrorBoxContainer> : null}
        </>
    );
};