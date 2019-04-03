import { BrtColors } from './brt-colors';
import { BrtField } from './brt-field';
import { BrtLabels } from './brt-labels';

export interface BrtConfig {
  apiKey?: string;
  form: Array<BrtField>;

  labels?: BrtLabels;
  colors?: BrtColors;
  closeModalOnSubmit?: boolean;
  durationBeforeClosing?: number;
  apiUrl?: string;
  elementToRenderSelector?: string;

  screenshot?: {
    maxWidth?: number,
    maxHeight?: number,
    imageType?: string,
    compression?: number
  }
}
