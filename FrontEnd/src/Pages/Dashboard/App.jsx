import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Login from "./../LogIn/App";
import Header from "../../components/Header";

export default function App() {
  const [admin, setAdmin] = useState(false);

  const [logState, setLogState] = useState(false);
  const [regnum, setRegNum] = useState(0);
  useEffect(() => {
    if (logState) {
      console.log(logState);
      console.log("REDIRECTING");

      document.body.classList.remove("body");
      document.head.classList.remove("head");
      document.documentElement.classList.remove("html");
    }
  }, [logState]);
  return (
    <>
      <Header title="Dashboard" logState={!logState} admin={admin} />
      {!logState ? (
        <Login
          logState={logState}
          setLogState={setLogState}
          setRegNum={setRegNum}
          nope={[" ", " "]}
          setAdmin={setAdmin}
        />
      ) : (
        <Dashboard regnum={regnum} />
      )}
    </>
  );
}
