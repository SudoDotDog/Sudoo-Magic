import { TIME_IN_MILLISECONDS, TIME_IN_SECONDS } from "./time";

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
        return new TimeBuilder(args);
    }

    private readonly _year: number;
    private readonly _month: number;
    private readonly _week: number;
    private readonly _day: number;
    private readonly _hour: number;
    private readonly _minute: number;
    private readonly _second: number;
    private readonly _millisecond: number;

    private constructor(args: TimeBuilderArgs) {

        this._year = args.year ?? 0;
        this._month = args.month ?? 0;
        this._week = args.week ?? 0;
        this._day = args.day ?? 0;
        this._hour = args.hour ?? 0;
        this._minute = args.minute ?? 0;
        this._second = args.second ?? 0;
        this._millisecond = args.millisecond ?? 0;
    }

    public inMilliseconds(): number {

        return TIME_IN_MILLISECONDS.YEAR * this._year
            + TIME_IN_MILLISECONDS.MONTH * this._month
            + TIME_IN_MILLISECONDS.WEEK * this._week
            + TIME_IN_MILLISECONDS.DAY * this._day
            + TIME_IN_MILLISECONDS.HOUR * this._hour
            + TIME_IN_MILLISECONDS.MINUTE * this._minute
            + TIME_IN_MILLISECONDS.SECOND * this._second
            + this._millisecond;
    }

    public inSeconds(): number {

        return TIME_IN_SECONDS.YEAR * this._year
            + TIME_IN_SECONDS.MONTH * this._month
            + TIME_IN_SECONDS.WEEK * this._week
            + TIME_IN_SECONDS.DAY * this._day
            + TIME_IN_SECONDS.HOUR * this._hour
            + TIME_IN_SECONDS.MINUTE * this._minute
            + this._second;
    }
}
