import { BrtLabels } from './brt-labels';
import { BrtColors } from './brt-colors';
import { BrtLogLevels } from './brt-log-levels';
import { BrtField } from './brt-field';

export interface BrtConfig {
  apiKey: string;
  form: Array<BrtField>;

  labels?: BrtLabels;
  logLevels?: BrtLogLevels;
  maxLogLines?: number;
  colors?: BrtColors;
  closeModalOnSubmit?: boolean;
  durationBeforeClosing?: number;
  apiUrl?: string;
}
