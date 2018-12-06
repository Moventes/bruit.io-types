import { DocumentReference } from '@firebase/firestore-types';
import { BrtToken } from './brt-token';
export interface BrtAccount {
    projects?: Array<DocumentReference>;
    ownerEmail?: string;
    premium: boolean;
    tokens?: {
        [toolId: string]: BrtToken;
    };
}
