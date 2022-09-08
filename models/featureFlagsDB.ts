import Dexie, {Table} from "dexie";
import {FeatureFlag} from "./featureFlag";

export class FeatureFlagsDB extends Dexie {

    featureFlags!: Table<FeatureFlag, number>;

    constructor() {
        super('bookmarksDB');
        this.version(1).stores({
            featureFlags: '++id'
        });
    }
}

export const featureFlagsDB = new FeatureFlagsDB();