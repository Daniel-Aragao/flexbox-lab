import { useState } from "react";

export default function useFlex() {
    const [options, setOptions] = useState(() => ({
        "flex-direction": "row",
        "flex-wrap": "nowrap",
        "justify-content": "flex-start",
        "align-items": "flex-start",
        "align-content": "flex-start",
        "gap": 3,
        "row-gap": undefined,
        "column-gap": undefined
    }));

    return [options, setOptions];
}