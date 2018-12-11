import { BrtToolId } from "../enums/brt-tool-id";
import { BrtToolType } from "../enums/brt-tool-type";
export interface BrtTarget {
  toolId: BrtToolId;
  toolType: BrtToolType;
  apiAuthHeader?: string;
  apiEndPoint?: string;
  email?: string;
  labels?: Array<string>;
}
