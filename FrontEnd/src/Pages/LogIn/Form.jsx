import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import LoadingButton from "@mui/lab/LoadingButton";

export default function App({
  logState,
  setLogState,
  setRegNum,
  nope,
  setAdmin,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // add class body to body and class head to head and class html to html

  useEffect(() => {
    document.body.classList.add("body");
    document.head.classList.add("head");
    document.documentElement.classList.add("html");

    // remove class login and nope
    if (document.getElementsByClassName(nope[0]).length > 0) {
      logState(false);
    }
  }, []);

  return (
    // align items center and justify content center

    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
      }}
      onSubmit={handleSubmit((data) => {
        setRegNum(data.regnum);
        setTimeout(() => {
          fetch(
            "http://127.0.0.1:5000/exist?regnum=" +
              data.regnum +
              "&password=" +
              data.password
          )
            .then((res) => {
              setTimeout(() => {
                setLoading(false);
              }, 1000);
              if (res.ok) {
                return res.text();
              } else {
                console.log("not ok");
                throw new Error("Something went wrong");
              }
            })
            .then((txtRes) => {
              if (txtRes === "True") {
                if (document.cookie.split("=")[1] !== data.regnum) {
                  console.log("new cookie");
                  console.log(document.cookie.split("=")[0]);
                  document.cookie = "regnum=" + data.regnum;
                }
                setTimeout(() => {
                  if (data.regnum === "211013214") setAdmin(true);
                  setLogState(true);
                }, 1000);
              } else if (txtRes === "False") {
                console.error("WrongRegNum");
              } else {
                console.error("WrongPassword");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }, 2000);
      })}
    >
      <Paper className={nope} elevation={3} sx={{ p: "2rem" }}>
        <Typography variant="h4" component="h2">
          Slide in
        </Typography>
        <TextField
          sx={{ marginTop: "1.5rem" }}
          {...register("regnum", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Min length is 8 digits.",
            },
            maxLength: {
              value: 10,
              message: "Max length is 10 digits.",
            },
          })}
          label="RegNum"
          type="number"
          min="0"
          max="9999999999"
          fullWidth
          helperText={errors.regnum ? errors.regnum?.message : " "}
          error={errors.regnum ? true : false}
        />

        <br />

        <FormControl variant="outlined" margin="normal">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            {...register("password", { required: "This field is required" })}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            error={errors.password ? true : false}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <Typography variant="caption" sx={{ color: "red" }}>
            &nbsp;{errors.password?.message}
          </Typography>
        </FormControl>
        {/* button centerd to slide */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoadingButton
            type="submit"
            loading={loading}
            onClick={() => setTimeout(() => setLoading(!loading), 1000)}
            variant="contained"
          >
            Log In
          </LoadingButton>
        </Box>
      </Paper>
    </Box>
  );
}
