import {useLiveQuery} from "dexie-react-hooks";
import {featureFlagsDB} from "../models/featureFlagsDB";
import {Checkbox, Label, ToggleSwitch} from "flowbite-react";
import {setEnabled} from "../lib/featureFlagUtils";

export default function FeatureFlags() {
    const features = useLiveQuery(async () => featureFlagsDB.featureFlags.toArray());

    if (!features) {
        return null;
    }

    return (
        <div>
            <ul>
                {features.map((feature) => (
                    <li key={feature.id} className="p-2">
                        <ToggleSwitch
                            checked={feature.enabled}
                            label={feature.name}
                            onChange={(e) => setEnabled(feature.id, e)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}