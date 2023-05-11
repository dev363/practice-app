import React, {
  createContext,
  Fragment,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Button } from "react-bootstrap";
import { ThemeContext, themes } from "./contextData";

const style = {
  padding: 10,
  border: "solid",
};

const ABC = () => {
  const contextValues = useContext(ThemeContext); // only for test
  const [state, setState] = useState("dark");
  const [theme, setTheme] = useState(contextValues.theme);

  const toggleTheme = () => {
    console.log(90909, state);
    if (state === "dark") {
      setState("light");
    } else {
      setState("dark");
    }
  };

  useEffect(() => {
    if (state === "dark") {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  }, [state]);

  // const values = useMemo(() => ({ theme, toggleTheme }), [state]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* <ThemeContext.Provider value={values}> */}
      <div
        style={{
          background: theme.background,
          color: theme.foreground,
          ...style,
        }}
      >
        <DEF></DEF>
      </div>
    </ThemeContext.Provider>
  );
};

const DEF = () => {
  return (
    <Fragment>
      <ChangeThemeButton />
    </Fragment>
  );
};

const ChangeThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme, "i m Out");
  return <Button onClick={(e) => toggleTheme()}>Change Theme</Button>;
};

export default ABC;
