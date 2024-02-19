export default function FlexContainer({options, elements}) {
    let reactStyles = {};

    for(let option in options) {
        if(options[option]) {
            const value = options[option];
            const splited = option.split('-');
            let optionName = splited[0];
    
            if(splited[1]) {
                optionName += splited[1][0].toUpperCase() + splited[1].slice(1);
            }
    
            reactStyles[optionName] = isNaN(value)? value : Number(value);
        }
    }

    return (
        <div style={reactStyles} className="flex-container container-box">
            {new Array(elements).fill(0).map((e, i) => {
                const color = ["primary","secondary", "accent"][i%3];

                return <div className={`flex-element flex-element-${color}`} key={i}></div>
            })}
        </div>
    )
}