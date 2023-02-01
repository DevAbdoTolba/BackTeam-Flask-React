import { Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import Header from "../../components/Header";

export default function App() {
  const [logState, setLogState] = React.useState(false);
  React.useEffect(() => {
    const cookies = document.cookie.split("=");
    // if there is cookie, if not break the useEffect and console log "no session"
    if (cookies[1] > 0) {
      setLogState(true);
      console.log("LOGSTATE: " + logState);
      return;
    }
  }, []);

  return (
    <>
      <Header logState={!logState} />
      <Paper
        sx={{
          height: "89vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Grid item xs={4}>
            <img
              className="logo"
              src="https://theday-2110.web.app/res/images/logo2.png"
              alt="Logo"
              border="0"
              width="100%"
            />
            <div class="shadow"></div>
          </Grid>
          <Grid item xs={5}>
            <Typography
              component="div"
              variant="h2"
              sx={{ textAlign: "center" }}
            >
              Welcome, <br /> To BackTeam
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
