import { BrtEffectiveType } from './../enums/brt-effective-type';
import { BrtConnectionType } from './../enums/brt-connection-type';

export interface BrtNetwork {
  downlink: number;
  effectiveType: BrtEffectiveType;
  type: BrtConnectionType;
}
