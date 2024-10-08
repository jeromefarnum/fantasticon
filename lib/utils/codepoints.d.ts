import { AssetsMap } from './assets';
export declare type CodepointsMap = {
    [key: string]: number;
};
export declare const getCodepoints: (assets: AssetsMap, predefined?: CodepointsMap, start?: number) => CodepointsMap;
export declare const getHexCodepoint: (decimalCodepoint: number) => string;
