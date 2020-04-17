/**
 * @author WMXPY
 * @namespace Magic_Distance
 * @description IU Builder
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { IUDistanceBuilder } from '../../src/distance/iu-builder';

describe('Given a {IUDistanceBuilder} class', (): void => {

    const chance: Chance.Chance = new Chance('magic-distance-iu-builder');

    it('should be able to build foot', (): void => {

        const builder: IUDistanceBuilder = IUDistanceBuilder.from({
            mile: 5,
        });

        // tslint:disable-next-line: no-magic-numbers
        expect(builder.inFoot()).to.be.equal(26400);
    });
});
