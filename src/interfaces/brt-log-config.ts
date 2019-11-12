import { BrtLogCacheLength } from './brt-log-cache-length';

export interface BrtLogConfig {
    logCacheLength?: BrtLogCacheLength;
    addQueryParamsToLog?: boolean;
}