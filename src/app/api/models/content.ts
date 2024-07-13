/* tslint:disable */
/* eslint-disable */
import { Dimension } from '../models/dimension';
import { Tile } from '../models/tile';
export interface Content {
  '_id'?: string | null;
  dimension?: Dimension;
  tiles?: Array<Tile> | null;
  userId?: string | null;
}
