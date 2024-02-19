import useLocalStorage from "./useLocalStorage";

export default function useTheme() {
    const [theme, setTheme] = useLocalStorage("theme", "dark");

    const toggleTheme = () => {
        setTheme((current) => (current === "light" ? "dark" : "light"));
    };

    return [theme, toggleTheme];
}