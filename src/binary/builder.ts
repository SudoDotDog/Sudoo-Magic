/**
 * @author WMXPY
 * @namespace Magic_Binary
 * @description Builder
 */

import { BINARY_SIZE } from "./binary";

export type BinaryBuilderArgs = {

    readonly byte?: number;
    readonly kilobyte?: number;
    readonly megabyte?: number;
    readonly gigabyte?: number;
    readonly terabyte?: number;
    readonly petabyte?: number;
    readonly exabyte?: number;
};

export class BinaryBuilder {

    public static from(args: BinaryBuilderArgs): BinaryBuilder {
        return new BinaryBuilder(args);
    }

    private readonly _byte: number;
    private readonly _kilobyte: number;
    private readonly _megabyte: number;
    private readonly _gigabyte: number;
    private readonly _terabyte: number;
    private readonly _petabyte: number;
    private readonly _exabyte: number;

    private constructor(args: BinaryBuilderArgs) {

        this._byte = args.byte ?? 0;
        this._kilobyte = args.kilobyte ?? 0;
        this._megabyte = args.megabyte ?? 0;
        this._gigabyte = args.gigabyte ?? 0;
        this._terabyte = args.terabyte ?? 0;
        this._petabyte = args.petabyte ?? 0;
        this._exabyte = args.exabyte ?? 0;
    }

    public inBytes(): number {

        return BINARY_SIZE.EB * this._exabyte
            + BINARY_SIZE.PB * this._petabyte
            + BINARY_SIZE.TB * this._terabyte
            + BINARY_SIZE.GB * this._gigabyte
            + BINARY_SIZE.MB * this._megabyte
            + BINARY_SIZE.KB * this._kilobyte
            + this._byte;
    }
}
