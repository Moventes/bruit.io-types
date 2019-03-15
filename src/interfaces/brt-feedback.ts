import { BrtCookies } from "./brt-cookies";
import { BrtData } from "./brt-data";
import { BrtLog } from "./brt-log";
import { BrtNavigatorInfo } from "./brt-navigator-info";
import { BrtScreenInfo } from "./brt-screen-info";
import { BrtServiceWorker } from "./brt-service-worker";

export interface BrtFeedback {
  date: string;
  apiKey?: string;
  canvas?: string | Blob;
  url?: string;
  version?: string;
  cookies?: BrtCookies;
  navigator?: BrtNavigatorInfo;
  display?: BrtScreenInfo;
  logs?: Array<BrtLog>;
  data: Array<BrtData>;
  serviceWorkers: Array<BrtServiceWorker>;
}
