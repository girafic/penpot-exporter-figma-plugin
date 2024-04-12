import { Uuid } from '../utils/uuid';

export const CIRCLE_TYPE: unique symbol = Symbol.for('circle');

export type CircleAttributes = {
  type: 'circle' | typeof CIRCLE_TYPE;
  id?: Uuid;
};
