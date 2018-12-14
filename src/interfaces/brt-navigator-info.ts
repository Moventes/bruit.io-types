import { BrtPermissions } from './brt-permissions';
export interface BrtNavigatorInfo {
  cookieEnabled: boolean;
  userAgent: string;
  platform: string;
  language: string;
  doNotTrack: string;
  permissions: BrtPermissions;
}
