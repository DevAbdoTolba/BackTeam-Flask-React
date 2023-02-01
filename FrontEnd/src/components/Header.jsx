import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import StorageIcon from "@mui/icons-material/Storage";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Link from "@mui/material/Link";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";

export default function ButtonAppBar({ title, admin, logState, src }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#fff" }}>
            <Typography
              variant="h6"
              component={Link}
              href="/"
              style={{ color: "#fff" }}
            >
              {title ? title : "BackTeam"}
            </Typography>
          </Typography>
          {admin && (
            <IconButton
              href="/Data"
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <StorageIcon />
            </IconButton>
          )}

          {!logState && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                // delete all cookies
                document.cookie.split(";").forEach(function (c) {
                  document.cookie = c
                    .replace(/^ +/, "")
                    .replace(
                      /=.*/,
                      "=;expires=" + new Date().toUTCString() + ";path=/"
                    );
                });
                window.location.href = "/";
              }}
            >
              <LogoutIcon />
            </IconButton>
          )}

          <IconButton
            href="/Dashboard"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {logState ? <DownhillSkiingIcon /> : <AccountCircleIcon />}
          </IconButton>

          <IconButton
            href="/Events"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <EmojiEventsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
