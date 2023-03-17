import React from 'react';
'use strict';

const LZStringlib = require('lz-string');

export const testData = "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";

//const GameObj;

/**
 *  returns Object after decompressing the save data.
 * @param {string} save - b64 encoded 
 * @returns {object} Game data.
 */
export function decodeSave(save) {
    save = save.replace(/\s+/g, "");
    const decompressedString = LZStringlib.decompressFromBase64(save);

    const obj = JSON.parse(decompressedString);
    return obj;
}


/**
 * Encode modified data and return an array [Success, Obj | ErrorMsg]
 * @param {object} save 
 * @returns {[boolean, object]}
 */
export function encodeSave(save) {
    const result = [false, {}];

    try {
        const obj = JSON.parse(save);
        result[1] = LZStringlib.compressToBase64(obj);
        result[0] = true;
    } catch(ex) {
        result[1] = { ErrorMessage: ex };
        result[0] = false;
    }

    return result;
}

/**
 * Checks to see if there has been a game version change when someone tries to load a save.
 * @param {string} ver 
 * @returns {boolean}
 */
export function versionCheck(ver) {
    const _version = ver == "1.3.3" ? true : false;

    return _version;
}

//const GameObj = decodeSave(test);

//let versionSanity = GameObj.version == "1.3.3" ? true : false;

//console.log(GameObj.version);