/* tslint:disable */
/* eslint-disable */
import { Dimension } from '../models/dimension';
import { Tile } from '../models/tile';
export interface ContentCreateRequest {
  dimension?: Dimension;
  tiles?: Array<Tile> | null;
  userId: string;
}
