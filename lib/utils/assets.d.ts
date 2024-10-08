/// <reference types="node" />
import { RunnerOptions } from '../types/runner';
import { GeneratedAssets } from '../generators/generate-assets';
export declare type WriteResult = {
    content: string | Buffer;
    writePath: string;
};
export declare type WriteResults = WriteResult[];
export interface IconAsset {
    id: string;
    absolutePath: string;
    relativePath: string;
}
export interface AssetsMap {
    [key: string]: IconAsset;
}
export declare const ASSETS_EXTENSION = "svg";
export declare const loadPaths: (dir: string) => Promise<string[]>;
export declare const loadAssets: ({ inputDir, getIconId }: RunnerOptions) => Promise<AssetsMap>;
export declare const writeAssets: (assets: GeneratedAssets, { name, pathOptions, outputDir }: RunnerOptions) => Promise<WriteResults>;
