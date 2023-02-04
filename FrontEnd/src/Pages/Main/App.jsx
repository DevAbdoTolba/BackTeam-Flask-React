import { Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import Header from "../../components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

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

  const secret_input = document.getElementById("secret_input");
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isDelete = false;
    if ("key" in evt) {
      isDelete =
        evt.key === "Escape" || evt.key === "Esc" || evt.key === "Backspace";
    }
    if (
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(
        evt.key
      ) ||
      isDelete
    ) {
      if (secret_input.value === "backtea" && "mM".includes(evt.key)) {
        secret_egg(true);
      } else {
        if (isDelete) {
          secret_input.value = "";
          try {
            document
              .getElementsByClassName("addBackTeam")[0]
              .classList.remove("BackTeam");
          } catch (error) {}
        } else {
          secret_input.value += evt.key;
        }
      }
    }
  };

  function secret_egg(isWorking) {
    if (isWorking) {
      console.log("working");

      secret_input.value = "";

      document
        .getElementsByClassName("addBackTeam")[0]
        .classList.add("BackTeam");
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Header logState={!logState} />
      <br />

      <Paper
        sx={{
          height: "87vh",
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
            <div class="night">
              <div class="shooting_star"></div>
              <div class="shooting_star"></div>
              <div class="shooting_star"></div>
              <div class="shooting_star"></div>
              <div class="shooting_star"></div>
              <div class="shooting_star"></div>
              <div class="shooting_star"></div>
              <div class="shooting_star"></div>
              <div class="shooting_star"></div>
              <div class="shooting_star"></div>
              <div class="shooting_star"></div>
              <div class="shooting_star"></div>
              <div class="shooting_star"></div>
              <div class="shooting_star"></div>
              <div class="shooting_star"></div>
              <div class="shooting_star"></div>
              <div class="shooting_star"></div>
              <div class="shooting_star"></div>
              <div class="shooting_star"></div>
              <div class="shooting_star"></div>
            </div>
            <img
              className="logo"
              src="https://theday-2110.web.app/res/images/logo2.png"
              alt="Logo"
              border="0"
              width="100%"
            />
            <div className="shadow"></div>
          </Grid>
          <Grid item xs={5}>
            <div className=" addBackTeam ">
              <div
                className="BackTeamBlack"
                onClick={() => {
                  secret_input.value = "";
                  try {
                    document
                      .getElementsByClassName("addBackTeam")[0]
                      .classList.remove("BackTeam");
                  } catch (error) {}
                }}
              ></div>
              <Typography
                className="BackTeamText"
                component="div"
                variant="h2"
                sx={{ textAlign: "center" }}
              >
                Welcome, <br /> To <span className="BackTeamTitle"></span>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
