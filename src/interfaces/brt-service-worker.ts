import { BrtServiceWorkerState } from './brt-service-worker-state';

export interface BrtServiceWorker {
  scope: string;
  state: BrtServiceWorkerState;
}
