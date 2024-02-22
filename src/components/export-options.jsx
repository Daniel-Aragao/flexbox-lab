import { useState } from "react"
import copyIcon from "../img/copy.svg"
import reactIcon from "../img/react.svg"
import cssIcon from "../img/css.svg"

const propertyNames = {
    css: {
        "flex-direction": "flex-direction",
        "flex-wrap": "flex-wrap",
        "justify-content": "justify-content",
        "align-items": "align-items",
        "align-content": "align-content",
        "gap": "gap",
        "row-gap": "row-gap",
        "column-gap": "column-gap",
    },
    reactNative: {
        "flex-direction": "flexDirection",
        "flex-wrap": "flexWrap",
        "justify-content": "justifyContent",
        "align-items": "alignItems",
        "align-content": "alignContent",
        "gap": "gap",
        "row-gap": "rowGap",
        "column-gap": "columnGap",
    }
}

const ponctuation = {
    css: ';',
    reactNative: ','
}

export default function ExportOptions({options}) {
    const [propertyFormat, setPropertyFormat] = useState('css');

    let text = `.container {\n    display:${propertyFormat === 'reactNative' ? "'flex',": "flex;" }\n`;

    for(let option in options) {
        if(options[option]) {
            if(option === 'align-content' && options['flex-wrap'] === 'nowrap') continue;
            if(option === 'gap' && options['gap'] === '0') continue;
            if(option === 'row-gap' && options['row-gap'] === '0') continue;
            if(option === 'column-gap' && options['column-gap'] === '0') continue;
            
            let isNumber = option.indexOf('gap') >= 0;

            let valueFormated = !isNumber && propertyFormat === 'reactNative' ? `'${options[option]}'` : options[option];

            text += `    ${propertyNames[propertyFormat][option]}: ${valueFormated}${ponctuation[propertyFormat]}\n`
        }
    }

    text += "}"

    return (
        <div className="export container-box">
            <div style={{display: "flex"}}>
                <div className="icon-wrapper" onClick={() =>  navigator.clipboard.writeText(text)}>
                    <img className="img-filter" src={copyIcon} alt="copy" />
                </div>
                <div className="spacer"></div>
                <div className={`icon-wrapper ${propertyFormat === "reactNative"? "selected":""}`} onClick={() =>  setPropertyFormat("reactNative")}>
                    <img className="img-filter" src={reactIcon} alt="copy" />
                </div>
                <div className={`icon-wrapper ${propertyFormat === "css"? "selected":""}`} onClick={() =>  setPropertyFormat("css")}>
                    <img className="img-filter" src={cssIcon} alt="copy" />
                </div>
            </div>
            <pre style={{textAlign: 'left', margin: 0}}>
                {text}
            </pre>
        </div>
    )
}