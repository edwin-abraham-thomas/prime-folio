export interface Layout {
    dimension: Dimension;
    tiles: Array<Tile>;
}

export interface Tile {
    dimension: Dimension
    content: TileContent
}

export interface Dimension {
    colSpan: number;
    rowSpan: number;
}

export interface TileContent {
    title: string;
    discription?: string;
    type: ContentType
}

export type ContentType = 'header' | 'section';