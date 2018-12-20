import { BrtData } from './brt-data';
import { BrtNavigatorInfo } from './brt-navigator-info';
import { BrtScreenInfo } from './brt-screen-info';
import { BrtCookies } from './brt-cookies';
import { BrtLog } from './brt-log';
import { BrtServiceWorker } from './brt-service-worker';

export interface BrtFeedback {
  apiKey?: string;
  canvas?: string;
  url?: string;
  cookies?: BrtCookies;
  navigator?: BrtNavigatorInfo;
  display?: BrtScreenInfo;
  logs?: Array<BrtLog>;
  data: Array<BrtData>;
  serviceWorkers: Array<BrtServiceWorker>;
}
