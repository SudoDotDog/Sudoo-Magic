/**
 * @author WMXPY
 * @namespace Magic_Time
 * @description Builder
 */

export type TimeBuilderArgs = {

    readonly year?: number;
    readonly month?: number;
    readonly week?: number;
    readonly day?: number;
    readonly hour?: number;
    readonly minute?: number;
    readonly second?: number;
    readonly millisecond?: number;
};

export class TimeBuilder {

    public static from(args: TimeBuilderArgs): TimeBuilder {

        return new TimeBuilder();
    }

    private _year?: number;
    private _month?: number;
    private _week?: number;
    private _day?: number;
    private _hour?: number;
    private _minute?: number;
    private _second?: number;
    private _millisecond?: number;
}
