import github from "../img/github.svg";
import moon from "../img/moon.svg";
import sun from "../img/sun.svg";
import cssTricks from "../img/css-tricks.svg";

export default function Header({ theme, toggleTheme }) {
    return (
        <header className="App-header">
            <span>Flexbox lab</span>
            <span className="header-right-btns">
                <span onClick={toggleTheme} className="icon-wrapper">
                    {theme === "dark" ? (
                        <img className="img-filter" src={moon} alt="dark" />
                    ) : (
                        <img className="img-filter" src={sun} alt="light" />
                    )}
                </span>
                <span className="spacer"></span>
                <a
                    href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-wrapper"
                >
                    <img className="img-filter" src={cssTricks} alt="css tricks" />
                </a>
                <a
                    href="https://github.com/Daniel-Aragao/flexbox-lab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-wrapper"
                >
                    <img className="img-filter" src={github} alt="github-logo" />
                </a>
            </span>
        </header>
    );
}
