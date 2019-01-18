import { BrtToolId } from "../enums/brt-tool-id";
import { BrtToolType } from "../enums/brt-tool-type";

export interface BrtTarget {
  toolId: BrtToolId;
  toolType: BrtToolType;
  apiAuthHeader?: string;
  email?: string;
  labels?: Array<string>;
  // GITHUB
  apiEndPoint?: string;
  attachmentsEndPoint?: string;
  // SLACK
  incomingWebhook?: string;
  channelId?: string;
  // ZENDESK
  groupId?: string;
}