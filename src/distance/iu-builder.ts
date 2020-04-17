/**
 * @author WMXPY
 * @namespace Magic_Distance
 * @description IU Builder
 */

import { DISTANCE_IN_FOOT } from "./distance";

export type IUDistanceBuilderArgs = {

    readonly foot?: number;
    readonly yard?: number;
    readonly mile?: number;
};

export class IUDistanceBuilder {

    public static from(args: IUDistanceBuilderArgs): IUDistanceBuilder {
        return new IUDistanceBuilder(args);
    }

    private readonly _foot: number;
    private readonly _yard: number;
    private readonly _mile: number;

    private constructor(args: IUDistanceBuilderArgs) {

        this._foot = args.foot ?? 0;
        this._yard = args.yard ?? 0;
        this._mile = args.mile ?? 0;
    }

    public inFoots(): number {

        return DISTANCE_IN_FOOT.MILE * this._mile
            + DISTANCE_IN_FOOT.YARD * this._yard
            + this._foot;
    }
}
