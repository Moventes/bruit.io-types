import { DocumentReference } from '@firebase/firestore-types';

export interface BrtAccount {
  projects: Array<DocumentReference>;
  ownerEmail: string;
  premium: boolean;
}