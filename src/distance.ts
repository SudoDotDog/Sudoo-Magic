/**
 * @author WMXPY
 * @namespace Magic
 * @description Distance
 */

export enum DISTANCE_CHANGE {

    METER_TO_KILO_METER = 1000,
}

export enum DISTANCE_IN_METERS {

    METER = 1,
    KILO_METER = DISTANCE_IN_METERS.METER * DISTANCE_CHANGE.METER_TO_KILO_METER,
}
