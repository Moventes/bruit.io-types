import { BrtLogCacheLength } from './brt-log-cache-length';

export interface BrtCoreConfig {
  logCacheLength?: BrtLogCacheLength;
  addQueryParamsToLog?: boolean;
}
