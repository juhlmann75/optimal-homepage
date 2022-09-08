import Dexie, {Table} from "dexie";
import {FeatureFlag} from "./featureFlag";
import {initializeFeatureFlags} from "../lib/featureFlagUtils";

export class FeatureFlagsDB extends Dexie {

    featureFlags!: Table<FeatureFlag, number>;

    constructor() {
        super('featureFlagsDB');
        this.version(1).stores({
            featureFlags: '++id'
        });
    }
}

export const featureFlagsDB = new FeatureFlagsDB();

featureFlagsDB.on('populate', initializeFeatureFlags);