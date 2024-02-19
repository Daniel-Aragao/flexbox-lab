import github from "../img/github.svg";
import moon from "../img/moon.svg";
import sun from "../img/sun.svg";

export default function Header({ theme, toggleTheme }) {
    return (
        <header className="App-header">
            <span>Flexbox lab</span>
            <span className="header-right-btns">
                <span onClick={toggleTheme}>
                    {theme === "dark" ? (
                        <img className="logo-filter" src={moon} alt="dark" />
                    ) : (
                        <img className="logo-filter" src={sun} alt="light" />
                    )}
                </span>
                <a
                    href="https://github.com/Daniel-Aragao/flexbox-lab"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="logo-filter"
                        src={github}
                        alt="github-logo"
                    />
                </a>
            </span>
        </header>
    );
}
