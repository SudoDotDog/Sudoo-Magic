/**
 * @author WMXPY
 * @namespace Magic_Distance
 * @description SI Builder
 */

import { DISTANCE_CHANGE, DISTANCE_IN_FOOT, DISTANCE_IN_METERS } from "./distance";

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

        this._kilometer = args.kilometer ?? 0;
        this._meter = args.meter ?? 0;
    }

    public inMeters(): number {

        return DISTANCE_IN_METERS.KILO_METER * this._kilometer
            + this._meter;
    }

    public convertToMiles(): number {

        const meters: number = this.inMeters();
        const foots: number = DISTANCE_IN_FOOT.METER * meters;
        const miles: number = foots / DISTANCE_CHANGE.FOOT_TO_MILE;
        return miles;
    }
}
