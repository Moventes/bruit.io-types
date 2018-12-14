import { BrtPermissionName } from '../enums/brt-permission-name';

export type BrtPermissions = { [name in BrtPermissionName]?: boolean };
