import { BrtPermissionStatus } from './../enums/brt-permission-status';
import { BrtPermissionName } from '../enums/brt-permission-name';
export declare type BrtPermissions = {
    [name in BrtPermissionName]?: BrtPermissionStatus;
};
