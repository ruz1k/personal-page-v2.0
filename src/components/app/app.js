import React, {useEffect} from 'react';

import Navigation from "../navigation";
import Route from "../route";

const App = (props) => {
  useEffect(() => {
    const {history} = props
    window.addEventListener("popstate", () => {
      history.go(0);
    });

  }, [])
  return (
    <>
      <Navigation/>
      <Route/>
    </>
  );
}

export default App;
