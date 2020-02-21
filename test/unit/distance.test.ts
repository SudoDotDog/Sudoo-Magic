/**
 * @author WMXPY
 * @namespace Magic
 * @description Distance
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { DISTANCE_CHANGE, DISTANCE_IN_FOOT, DISTANCE_IN_METERS } from '../../src/distance';

describe('Given a [Distance] enums', (): void => {

    const chance: Chance.Chance = new Chance('magic-distance');

    it('should be able to convert from mile to meter', (): void => {

        const mile: number = chance.natural({
            max: 5,
        });
        const expectedKilometer = mile * DISTANCE_CHANGE.MILE_TO_KILO_METER;

        expect(DISTANCE_IN_METERS.MILE * mile).to.be.equal(expectedKilometer);
    });

    it('should be able to convert from meter to mile', (): void => {

        const kilometer: number = chance.natural({
            max: 5,
        });
        const expectedMile = kilometer / DISTANCE_CHANGE.MILE_TO_KILO_METER;

        expect(DISTANCE_IN_FOOT.KILO_METER * kilometer).to.be.equal(expectedMile);
    });
});
