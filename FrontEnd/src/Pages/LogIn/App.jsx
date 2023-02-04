import React, { useEffect, useState } from "react";
import Form from "./Form";

import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";

import { ThemeProvider, createTheme } from "@mui/material/styles";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App({
  logState,
  setLogState,
  setRegNum,
  nope,
  setAdmin,
}) {
  const [session, setSession] = useState(true);

  useEffect(() => {
    // here will remove or add classes for the nope message
  }, [nope]);

  // check all cookies and print them
  useEffect(() => {
    setTimeout(() => {
      const cookies = document.cookie.split("=");
      console.log(cookies[1]);
      // if there is cookie, if not break the useEffect and console log "no session"
      if (cookies[1] > 0) {
        console.log(session);
        setRegNum(cookies[1]);
        setSession(false);

        setLogState(true);
        return;
      } else {
        console.log("no session");
        setSession(false);
      }
    }, 3000);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      {session ? (
        <>
          {/* center the CircularProgress */}
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh",
                width: "100vw",
              }}
            >
              <CircularProgress />
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Form
            logState={logState}
            setLogState={setLogState}
            setRegNum={setRegNum}
            nope={nope[0]}
            setAdmin={setAdmin}
          />
          <h1 className={nope[1]}>NOPE</h1>
        </>
      )}
    </ThemeProvider>
  );
}
