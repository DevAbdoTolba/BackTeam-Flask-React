import { Grid, Paper } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../../components/Header";
import Accordion from "./Accordion";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { dark } from "@mui/material/styles/createPalette";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const [logState, setLogState] = React.useState(false);
  useEffect(() => {
    const cookies = document.cookie.split("=");
    console.log(cookies[1]);
    // if there is cookie, if not break the useEffect and console log "no session"
    if (cookies[1] > 0) {
      setLogState(true);
      return;
    }
  }, []);

  const [events, setEvents] = React.useState([]);
  useEffect(() => {
    // get data from localhose:5000/events
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => {
        // set events to data
        setEvents(data);
      });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Header title="Events" logState={!logState} />
      <br />
      <Paper
        sx={{
          height: "85vh",
        }}
      >
        <Accordion events={events} />
      </Paper>
    </ThemeProvider>
  );
}
