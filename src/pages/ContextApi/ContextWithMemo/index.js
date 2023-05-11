import React, {
  createContext,
  Fragment,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { Button } from "react-bootstrap";
import { UserContext, themes } from "./contextData";

const style = {
  padding: 10,
  border: "solid",
};

const ABC = () => {
  const [userName, setUserName] = useState("John Smith");
  const value = useMemo(() => ({ userName, setUserName }), [userName]);

  return (
    <UserContext.Provider value={value}>
      <DEF></DEF>
    </UserContext.Provider>
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
  const { userName, setUserName } = useContext(UserContext);
  console.log(userName, "i m Out");
  return (
    <Fragment>
      <p>{userName}</p>
      <Button
        onClick={(e) => setUserName(userName === "Rama" ? "Karishna" : "Rama")}
      >
        Change Name
      </Button>
    </Fragment>
  );
};

export default ABC;
