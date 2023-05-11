import React, { Component, Fragment, useContext } from "react";

export const UserContext = React.createContext();

class ContextApi extends Component {
  render() {
    return (
      <Fragment>
        <UserContext.Provider value={{ a: 12, b: 23, c: 35 }}>
          <ChildComp>Context Api</ChildComp>
          <ChildCompFunction></ChildCompFunction>
        </UserContext.Provider>
        <code>
            
        </code>
      </Fragment>
    );
  }
}

class ChildComp extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ a, b, c }) => <h1>{a}</h1>}
      </UserContext.Consumer>
    );
  }
}

const ChildCompFunction = () => {
  const value = useContext(UserContext);
  console.log(value);
  return <h1>ChildCompFunction a:{value.a}</h1>;
};
export default ContextApi;
