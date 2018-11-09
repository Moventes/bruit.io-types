import { BrtLogType } from './../enums/brt-log-type';

export interface BrtLog {
  type: BrtLogType;
  timestamp: Date;
  arguments: Array<any>;
}
