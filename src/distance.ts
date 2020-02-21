/**
 * @author WMXPY
 * @namespace Magic
 * @description Distance
 */

export enum DISTANCE_CHANGE {

    METER_TO_KILO_METER = 1000,

    INCH_TO_FOOT = 12,
    FOOT_TO_YARD = 3,
    YARD_TO_MILE = 1760,
    FOOT_TO_MILE = DISTANCE_CHANGE.YARD_TO_MILE * DISTANCE_CHANGE.FOOT_TO_YARD,

    FOOT_TO_METER = 3.28,
    MILE_TO_KILO_METER = 0.625,
    KILO_METER_TO_MILE = 1.6,
}

export enum DISTANCE_IN_METERS {

    METER = 1,
    KILO_METER = DISTANCE_IN_METERS.METER * DISTANCE_CHANGE.METER_TO_KILO_METER,

    MILE = DISTANCE_IN_METERS.KILO_METER * DISTANCE_CHANGE.KILO_METER_TO_MILE,
}

export enum DISTANCE_IN_FOOT {

    FOOT = 1,
    YARD = DISTANCE_IN_FOOT.FOOT * DISTANCE_CHANGE.FOOT_TO_YARD,
    MILE = DISTANCE_IN_FOOT.YARD * DISTANCE_CHANGE.YARD_TO_MILE,

    METER = DISTANCE_IN_FOOT.FOOT * DISTANCE_CHANGE.FOOT_TO_METER,
    KILO_METER = DISTANCE_IN_FOOT.MILE * DISTANCE_CHANGE.MILE_TO_KILO_METER,
}
