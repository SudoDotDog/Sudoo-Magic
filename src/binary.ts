/**
 * @author WMXPY
 * @namespace Magic
 * @description Binary
 */

export enum BINARY_CONVERT {

    UNIT = 1024,
}

export enum BINARY_SIZE {

    BYTE = 1,
    KB = BINARY_SIZE.BYTE * BINARY_CONVERT.UNIT,
    MB = BINARY_SIZE.KB * BINARY_CONVERT.UNIT,
    GB = BINARY_SIZE.MB * BINARY_CONVERT.UNIT,
    TB = BINARY_SIZE.GB * BINARY_CONVERT.UNIT,
}
