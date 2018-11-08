import { DocumentReference } from "@firebase/firestore-types";
import { BrtTarget } from "./brt-target";
export interface BrtProject {
    targets: Array<BrtTarget>;
    privateKey: string;
    projectName?: string;
    creationDate: Date;
    account?: DocumentReference;
    premium: boolean;
}
