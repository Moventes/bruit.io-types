import { HttpRequest } from './../enums/http-request';
import { BrtLogHttpType } from './../enums/brt-log-http-type';
export interface BrtLogHttp {
    type: BrtLogHttpType;
    timestamp: Date;
    method: HttpRequest;
    url: string;
    body?: any;
    headers?: any;
    status?: number;
    response?: any;
}
