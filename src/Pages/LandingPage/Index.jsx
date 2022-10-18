import React from "react";
import "./Index.css";
import Logo from "../../Assests/Images/Group 2757.svg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Stack, Typography } from "@mui/material";
import DropDownMenu from "../../Components/LandingPage/LPDD";
import ExampleContent from "../../Components/LandingPage/ExampleContent";

function LandingPage() {
  return (
    <>
      <Box className="card" sx={{ flexGrow: 1 }}>
        <Grid container>
          <Stack
            className="menu-bar"
            display="flex"
            direction={"row"}
            justifyContent="space-between"
          >
            <Stack>
              <Grid xs={8} md={8}>
                <header className="header">
                  <img className="logo" src={Logo} alt={"LOGO"} />
                </header>
              </Grid>
            </Stack>
            <Stack>
              <Grid xs={8} md={4}>
                <Stack
                  sx={{
                    display: {
                      xs: "flex",
                      sm: "flex",
                      md: "none",
                      lg: "none",
                    },
                  }}
                >
                  <DropDownMenu />
                </Stack>
                <Stack
                  fontSize={18}
                  className="menu-list"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "flex",
                      lg: "flex",
                    },
                  }}
                  spacing={5}
                  direction={"row"}
                >
                  <Stack>Pricing</Stack>
                  <Stack>Features</Stack>
                  <Stack>Support</Stack>
                </Stack>
              </Grid>
            </Stack>
          </Stack>
          <Grid xs={12} md={12}>
            <p className="header-text">
              The Form Solution For Any
              <span className="text-highlight">&nbsp;Developer</span>
            </p>
            <p className="header-text-secondary">
              Use your own front-end code. Submit to our API. We'll handle the
              rest.
            </p>
          </Grid>
          <Grid xs={12} md={12}>
            <div className="btns">
              <button className="btn-gs">Get Started</button>
              <button className="btn-r">Register</button>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box className="text-editor">
        <Grid container>
          <Stack
            direction={"row"}
            display={"flex"}
            className="text-editor-header"
            spacing={15}
            alignItems={"center"}
          >
            <Grid xs={4} md={4}>
              <Stack
                spacing={1}
                direction={"row"}
                display={"flex"}
                alignItems={"center"}
              >
                <Stack marginLeft={0.8} className="three-dot"></Stack>
                <Stack className="three-dot"></Stack>
                <Stack className="three-dot"></Stack>
              </Stack>
            </Grid>
            <Grid xs={8} md={8}>
              <Stack direction={"row"} display={"flex"}>
                <Stack className="text-box">Demo code</Stack>
              </Stack>
            </Grid>
          </Stack>
          <Stack className="text-editor-body">
            <Grid xs={12} md={12} lg={12}>
              <Stack
                sx={{ color: "white", width: "80%" }}
                paddingLeft={2}
                paddingTop={1}
              >
                <Typography>
                  {`<form action="https://formspree.io/f/{form_id}" method="post">`}
                </Typography>
                <Typography display={"flex"} flexWrap="wrap">
                  &nbsp;&nbsp;&nbsp;{`<label for="email">Your Email</label>`}
                </Typography>
                <Typography display={"flex"} flexWrap="wrap">
                  &nbsp;&nbsp;&nbsp;
                  {`<input name="Email" id="email" type="email">`}
                </Typography>
                <Typography display={"flex"} flexWrap="wrap">
                  &nbsp;&nbsp;&nbsp;{`<button type="submit">Submit</button>`}
                </Typography>
                <Typography>{`</form>`}</Typography>
              </Stack>
            </Grid>
          </Stack>
        </Grid>
      </Box>
      <Box justifyContent={'center'} display={"flex"} className="body-stack">
        <Grid container>
          <Stack justifyContent={'center'} display={"flex"}>
            <Grid xs={12} md={12}>
              <Stack className="body-text">
                <Stack className="body-text-1">
                  Secure, easy to use and all essential
                  <span className="text-highlight">&nbsp;features!</span>
                </Stack>
              </Stack>
              <Stack>
                <p className="body-text-2">
                  A simple, no-code and complete Form solution for your next web
                  project
                </p>
              </Stack>
            </Grid>
          </Stack>
        </Grid>
      </Box>
      <Box className="body-stack">
        <Grid container>
          <Grid md={12}>
            <ExampleContent />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default LandingPage;
