/**
 * @author WMXPY
 * @namespace Magic_Distance
 * @description SI Builder
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { SIDistanceBuilder } from '../../src';

describe('Given a {SIDistanceBuilder} class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('magic-distance-si-builder');

    it('should be able to build meter', (): void => {

        const builder: SIDistanceBuilder = SIDistanceBuilder.from({
            kilometer: 5,
        });

        // tslint:disable-next-line: no-magic-numbers
        expect(builder.inMeters()).to.be.equal(5000);
    });

    it('should be able to convert to mile', (): void => {

        const builder: SIDistanceBuilder = SIDistanceBuilder.from({
            kilometer: 5,
        });

        // tslint:disable-next-line: no-magic-numbers
        expect(builder.convertToMiles().toFixed(2)).to.be.equal('3.11');
    });
});
