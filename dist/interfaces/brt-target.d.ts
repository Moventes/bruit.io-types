import { BrtToolId } from "../enums/brt-tool-id";
import { BrtToolType } from "../enums/brt-tool-type";
export interface BrtTarget {
    toolId: BrtToolId;
    toolType: BrtToolType;
    apiAuthHeader?: string;
    email?: string;
    labels?: Array<string>;
    apiEndPoint?: string;
    attachmentsEndPoint?: string;
    incomingWebhook?: string;
    channelId?: string;
}
