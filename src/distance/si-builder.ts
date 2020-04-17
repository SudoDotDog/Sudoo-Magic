/**
 * @author WMXPY
 * @namespace Magic_Distance
 * @description SI Builder
 */

import { DISTANCE_IN_METERS } from "./distance";

export type SIDistanceBuilderArgs = {

    readonly kilometer?: number;
    readonly meter?: number;
};

export class SIDistanceBuilder {

    public static from(args: SIDistanceBuilderArgs): SIDistanceBuilder {
        return new SIDistanceBuilder(args);
    }

    private readonly _kilometer: number;
    private readonly _meter: number;

    private constructor(args: SIDistanceBuilderArgs) {

        this._kilometer = args.kilometer;
        this._meter = args.meter;
    }

    public inMeters(): number {

        return DISTANCE_IN_METERS.KILO_METER * this._kilometer
            + this._meter;
    }
}
