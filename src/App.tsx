import { h, FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { Switch } from "@headlessui/react";

const IndexComp: FunctionComponent = () => {
    const [enabled, setEnabled] = useState(false);
    return (
        <div className="bg-slate-100 h-5  p-5">
            <div class="text-primary">hello1</div>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                    enabled ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
                <span
                    className={`${
                        enabled ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white`}
                />
            </Switch>{" "}
        </div>
    );
};

export default IndexComp;
