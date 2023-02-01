import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function App({ regnum }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [src, setSrc] = useState(
    "https://fakeinfo.net/static/img/userface.svg"
  );

  const handleData = () => {
    if (regnum === 0) return;
    try {
      fetch(`http://127.0.0.1:5000/user?regnum=${regnum}`, {
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "accept-language": "en-US,en;q=0.9,ar-EG;q=0.8,ar;q=0.7",
          "cache-control": "max-age=0",
          "sec-ch-ua":
            '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "none",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1",
        },
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "omit",
      })
        .then((res) => res.json())
        .then((json) => {
          setData(json[0]);
        });

      setLoading(false);
    } catch (error) {
      // handle error by putting empty fake data
      setData({
        name: "error",
        lastname: "error",
        gmail: "error",
        score: "error",
        phone: "error",
        g: "error",
        regnum: "error",
        discordId: "error",
        town: "error",
      });
      setLoading(false);
    }
  };

  const handleImg = (id, g) => {
    console.log(1);
    console.log(2);
    // check for src with the same regnum in localstorage
    if (localStorage.getItem(regnum)) {
      setSrc(localStorage.getItem(regnum));
      return;
    }
    setTimeout(() => {
      console.log(3);
      fetch(`https://avatar.mtolba2004.workers.dev/?userid=${id}`)
        .then((res) => res.text())
        .then((txt) => {
          // txt string has more than 1000 charchter then do else
          if (txt.length > 1000) {
            console.log(g);
            if (g === "f") {
              setSrc(
                "https://fakeinfo.net/static/userface_image/female/female38.png"
              );
            } else {
              setSrc("https://fakeinfo.net/static/img/userface.svg");
            }
          } else {
            // set localstorage src of the image with the name of regnum
            localStorage.setItem(regnum, txt);

            setSrc(txt);
          }
        });
      console.log(4);
    }, 4000);
  };

  useEffect(() => {
    handleData();
    console.log(data.discordid);
  }, []);
  useEffect(() => {
    handleImg(data.discordid, data.g);
  }, [data.discordid, data.g]);
  return (
    <>
      {loading ? (
        <Paper elevation={3}>
          <Box sx={{ p: 2 }}>
            <h1>Account</h1>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <ImageList cols={1}>
                  <ImageListItem>
                    <Avatar
                      id="img"
                      alt={data.name}
                      src={src}
                      sx={{ borderRadius: "50%" }}
                    />
                  </ImageListItem>
                </ImageList>
              </Grid>
              <Grid item xs={8}>
                <p>RegNum: Loading</p>
                <p>Name: Loading</p>
                <p>Lastname: Loading</p>
                <p>Gmail: Loading</p>
                <p>Score: Loading</p>
                <p>Phone: Loading</p>
                <p>Town: Loading</p>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      ) : (
        <Paper elevation={3}>
          <Box sx={{ p: 2 }}>
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
              <Grid item xs={4}>
                <ImageList cols={2}>
                  <ImageListItem>
                    <img id="img" src={src} alt="img" />
                  </ImageListItem>
                </ImageList>
              </Grid>
              <Grid item xs={4}>
                <Typography>Score: {data.score}</Typography>
                <br />
                <Typography>RegNum: {data.regnum}</Typography>
                <Typography>
                  Name: {data.name} {data.lastname}
                </Typography>
                <Typography>Gmail: {data.gmail}</Typography>
              </Grid>
            </Grid>
          </Box>
          <Paper elevation={3}>
            <Typography
              sx={{ ml: 2, pt: 2 }}
              variant="h5"
              id="tableTitle"
              component="div"
            >
              Attented Events
            </Typography>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Event Name</TableCell>
                  <TableCell align="right">
                    Date the event was attented
                  </TableCell>
                  <TableCell align="right">Score value of the event</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row"></TableCell>
                  <TableCell align="right">&nbsp;</TableCell>
                  <TableCell align="right">&nbsp;</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Paper>
      )}
    </>
  );
}
