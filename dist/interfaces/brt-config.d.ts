import { BrtLabels } from './brt-labels';
import { BrtColors } from './brt-colors';
import { BrtField } from './brt-field';
export interface BrtConfig {
    apiKey?: string;
    form: Array<BrtField>;
    labels?: BrtLabels;
    colors?: BrtColors;
    closeModalOnSubmit?: boolean;
    durationBeforeClosing?: number;
    apiUrl?: string;
}
