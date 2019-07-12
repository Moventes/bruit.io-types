import { BrtColors } from './brt-colors';
import { BrtField } from './brt-field';
import { BrtLabels } from './brt-labels';
import { BrtScreenshot } from './brt-screenshot';

export interface BrtConfig {
  form: Array<BrtField>;

  labels?: BrtLabels;
  colors?: BrtColors;
  closeModalOnSubmit?: boolean;
  durationBeforeClosing?: number;

  screenshot?: BrtScreenshot;
}
