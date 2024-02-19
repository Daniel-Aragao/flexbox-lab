import { useState } from "react";

export default function useFlex() {
    const [options, setOptions] = useState(() => ({
        "flex-direction": "row",
        "flex-wrap": "nowrap",
        "justify-content": "flex-start",
        "align-items": "flex-start",
        "align-content": "flex-start",
        "gap": 0,
        "row-gap": undefined,
        "colum-gap": undefined
    }));

    return [options, setOptions];
}