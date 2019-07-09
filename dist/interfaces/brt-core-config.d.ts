import { BrtLogCacheLength } from './brt-log-cache-length';
export interface BrtCoreConfig {
    apiKey?: string;
    apiUrl?: string;
    logCacheLength?: BrtLogCacheLength;
    addQueryParamsToLog?: boolean;
}
