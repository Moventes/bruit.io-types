import { BrtStorageEstimate } from "./brt-storage-estimate";
import { BrtNetwork } from "./brt-network";
import { BrtPermissions } from "./brt-permissions";
export interface BrtNavigatorInfo {
    cookieEnabled: boolean;
    serviceWorkersSupported: boolean;
    userAgent: string;
    platform: string;
    language: string;
    doNotTrack: string;
    privateMode: boolean;
    permissions: BrtPermissions;
    network: BrtNetwork;
    storage: BrtStorageEstimate;
    plugins: Array<string>;
}
