/* tslint:disable */
/* eslint-disable */
import { Dimension } from '../models/dimension';
import { Tile } from '../models/tile';
export interface Content {
  dimension?: Dimension;
  tiles?: Array<Tile> | null;
}
