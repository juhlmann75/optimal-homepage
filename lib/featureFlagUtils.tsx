import {featureFlagsDB} from "../models/featureFlagsDB";

export async function initializeFeatureFlags() {

    await featureFlagsDB.featureFlags.bulkAdd([
            {
                id: 1,
                name: "Bookmarks",
                enabled: true
            },
            {
                id: 2,
                name: "Daily Motivational Quote",
                enabled: true
            },
            {
                id: 3,
                name: "Search Engine",
                enabled: true
            },
            {
                id: 4,
                name: "To-Do List",
                enabled: true
            }
        ]
    )

}

export async function setEnabled(featureId: number, enabled: boolean) {
    await featureFlagsDB.featureFlags.update(featureId, {enabled: enabled});
}