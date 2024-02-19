import "../css/menu-options.css";
import clearImg from "../img/clear.png";

const flexProperties = {
    "flex-direction": ["row", "row-reverse", "column", "column-reverse"],
    "flex-wrap": ["nowrap", "wrap", "wrap-reverse"],
    "justify-content": [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
    ],
    "align-items": ["stretch", "flex-start", "flex-end", "center", "baseline"],
    "align-content": [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
    ],
    gap: 0,
    "row-gap": 0,
    "colum-gap": 0,
};

export default function MenuOptions({ options, setOptions, setElements }) {
    function onOptionClick(option, newValue) {
        setOptions((current) => ({ ...current, [option]: newValue }));
    }

    function loadOptionsItems(flexProperty) {
        const flexPropertyOptions = flexProperties[flexProperty];

        if (flexPropertyOptions) {
            return flexPropertyOptions.map((flexPropertyOption) => {
                const cssClass =
                    options[flexProperty] === flexPropertyOption
                        ? "selected"
                        : "";

                return (
                    <div
                        onClick={() =>
                            onOptionClick(flexProperty, flexPropertyOption)
                        }
                        key={flexPropertyOption}
                        className={`flex-option ${cssClass}`}
                    >
                        {flexPropertyOption}
                    </div>
                );
            });
        } else if (flexPropertyOptions === 0) {
            return (
                <input
                    onChange={(e) =>
                        onOptionClick(flexProperty, e.target.value)
                    }
                    value={options[flexProperty]}
                    type="number"
                    name={flexPropertyOptions}
                    className="flex-option-number"
                    placeholder=" "
                />
            );
        }
    }

    function loadOptions() {
        let divs = [];

        for (let option in options) {
            let showWarning =
                option === "align-content" && options["flex-wrap"] === "nowrap";

            divs.push(
                <div key={option} className="option-block">
                    <div>
                        {option}
                        {showWarning && (
                            <span
                                style={{ fontSize: "x-small" }}
                            >{` (The flex-wrap: nowrap property prevents align-content from having an effect )`}</span>
                        )}
                    </div>
                    <div className="flex-option-container">
                        {loadOptionsItems(option)}
                    </div>
                </div>
            );
        }

        return divs;
    }

    return (
        <div className="menu container-box">
            {loadOptions()}
            <div className="buttons">
                <div>Elements</div>
                <button
                    className="button button-primary add-remove"
                    onClick={() => setElements((e) => ++e)}
                >
                    +
                </button>
                <button
                    className="button button-accent add-remove"
                    onClick={() => setElements((e) => (e === 1 ? e : --e))}
                >
                    -
                </button>
                <div
                    onClick={() => setElements((e) => 1)}
                    className="icon-wrapper"
                >
                    <img
                        src={clearImg}
                        alt="clear elements"
                        className="img-filter"
                    />
                </div>
            </div>
        </div>
    );
}
