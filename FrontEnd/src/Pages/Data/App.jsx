import React, { useState, useEffect } from "react";
import Data from "./Data";
import Login from "./../LogIn/App";
import Header from "../../components/Header";

export default function App() {
  const [nope, setNope] = useState(["", ""]);

  const [logState, setLogState] = useState(false);
  const [regnum, setRegNum] = useState(0);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (logState) {
      document.documentElement.classList.remove("html");
      console.log(logState);
      console.log("REDIRECTING");
      document.body.classList.remove("body");
      document.head.classList.remove("head");

      setNope(["login", "nope"]);
      if (!(regnum == "211013214")) {
        setTimeout(() => {
          setNope(["", ""]);
          document.body.classList.add("body");
          document.head.classList.add("head");
        }, 12000);
        console.log(document.body.classList + "\n" + document.head.classList);
      } else {
        // document.documentElement.classList.remove("html");
        console.log(document.body.classList + "\n" + document.head.classList);
      }
    }
    console.log(regnum);
  }, [logState]);

  return (
    <>
      <Header title="Data" logState={!logState} admin={admin} />
      {!(logState && !admin && regnum == "211013214") ? (
        <Login
          className="login"
          logState={!logState}
          setLogState={setLogState}
          setRegNum={setRegNum}
          nope={nope}
          setAdmin={setAdmin}
        />
      ) : (
        <Data />
      )}
    </>
  );
}
