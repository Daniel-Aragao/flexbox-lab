import "./App.css";
import ExportOptions from "./components/export-options";
import FlexContainer from "./components/flex-container";
import Header from "./components/header";
import MenuOptions from "./components/menu-options";
import useTheme from "./hooks/useTheme";
import useFlex from "./hooks/useFlex";
import { useState } from "react";

function App() {
    const [theme, setTheme] = useTheme();
    const [options, setOptions] = useFlex();

    const [elements, setElements] = useState(1);

    return (
        <div className="App" data-theme={theme}>
            <Header theme={theme} toggleTheme={setTheme} />

            <div className="container">
                <div className="first-line">
                    <MenuOptions options={options} setOptions={setOptions} setElements={setElements} />
                    <FlexContainer options={options} elements={elements} />
                </div>
                    <ExportOptions options={options} />
            </div>
        </div>
    );
}

export default App;
