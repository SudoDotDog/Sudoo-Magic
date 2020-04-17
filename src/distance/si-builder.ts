/**
 * @author WMXPY
 * @namespace Magic_Distance
 * @description SI Builder
 */

export type SIDistanceBuilderArgs = {
};

export class SIDistanceBuilder {

    public static from(args: SIDistanceBuilderArgs): SIDistanceBuilder {
        return new SIDistanceBuilder(args);
    }

    private constructor(args: SIDistanceBuilderArgs) {
    }
}
