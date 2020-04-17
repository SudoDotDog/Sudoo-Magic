/**
 * @author WMXPY
 * @namespace Magic_Distance
 * @description IU Builder
 */

export type IUDistanceBuilderArgs = {
};

export class IUDistanceBuilder {

    public static from(args: IUDistanceBuilderArgs): IUDistanceBuilder {
        return new IUDistanceBuilder(args);
    }

    private constructor(args: IUDistanceBuilderArgs) {
    }
}
