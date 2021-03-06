/**
 * @author WMXPY
 * @namespace Magic_Distance
 * @description IU Builder
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { IUDistanceBuilder } from '../../src';

describe('Given a {IUDistanceBuilder} class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('magic-distance-iu-builder');

    it('should be able to build foot', (): void => {

        const builder: IUDistanceBuilder = IUDistanceBuilder.from({
            mile: 5,
        });
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        expect(builder.inFoots()).to.be.equal(26400);
    });
});
