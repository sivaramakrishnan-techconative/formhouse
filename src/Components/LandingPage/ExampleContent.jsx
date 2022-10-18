import { Box, Chip, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useEffect, useState } from "react";
import "./Index.css";
import Laptop from "../../Assests/Images/Image placeholder.svg";

function ExampleContent() {
  const [active, setActive] = useState("");
  const handleClick = (id) => {
    setActive(id);
  };
  useEffect(() => {
    handleClick("1");
  }, []);
  return (
    <>
      <Stack
        display={"flex"}
        justifyContent="center"
        sx={{ cursor: "pointer" }}
        spacing={8}
        direction={"row"}
      >
        <Stack
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          className={active === "1" ? "btn-active" : "btn-inactive"}
          id={"1"}
          onClick={() => handleClick("1")}
        >
          HTML
        </Stack>
        <Stack
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          className={active === "2" ? "btn-active" : "btn-inactive"}
          id={"2"}
          onClick={() => handleClick("2")}
        >
          REDIRECTION
        </Stack>
        <Stack
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          className={active === "3" ? "btn-active" : "btn-inactive"}
          id={"3"}
          onClick={() => handleClick("3")}
        >
          EASY INSTALL
        </Stack>
      </Stack>
      <Stack>
        <Grid
          display={"flex"}
          alignItems="center"
          justifyContent="center"
          container
        >
          <Stack
            sx={{
              flexDirection: { xs: "column", md: "row" },
              width: { xs: "280px", md: "1000px" },
            }}
            margin={2}
          >
            <Grid xs={12} md={4}>
              <Stack marginTop={2}>
                <Box
                  component="img"
                  sx={{
                    height: { xs: "15em", md: "14em" },
                    width: { xs: "20em", md: "20em" },
                  }}
                  alt="Laptop"
                  src={Laptop}
                />
              </Stack>
            </Grid>
            <Grid xs={12} md={8}>
              <Stack
                display={"flex"}
                sx={{
                  height: { xs: "15em", md: "9.3em" },
                  width: { xs: "19.8em", md: "40.7em" },
                  margin: { md: 8 },
                  marginTop: { xs: "-10%" },
                  marginLeft: { md: "-12%" },
                  backgroundColor: "white",
                }}
                direction="row"
                className="img-content"
              >
                <Stack>
                  <Grid xs={12} md={4}>
                    <Box
                      component="img"
                      sx={{
                        height: { xs: "3em", md: "3em" },
                        width: { xs: "7em", md: "5em" },
                        marginTop: { xs: 2 },
                      }}
                      alt="New Laptop"
                      src={Laptop}
                    />
                  </Grid>
                </Stack>
                <Stack>
                  <Grid xs={12} md={8}>
                    <Typography marginTop={2} sx={{ fontSize:{xs:'15px',md:"1.5em"}, fontWeight:'bold' }}>
                      Powerful JavaScript forms
                    </Typography>
                    <Typography>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </Typography>
                  </Grid>
                </Stack>
              </Stack>
            </Grid>
          </Stack>
        </Grid>
        <Stack display={"flex"} justifyContent="center" alignItems={"center"}>
          <Stack
            sx={{
              height: { xs: "3em", md: "3em" },
              width: { xs: "20em", md: "57em" },
              marginTop: { xs: "-1.2em", md: "-7.3rem" },
              marginLeft: { xs: "2.5em", md: "-6em" },
            }}
          >
            <Chip
              sx={{
                color: "white",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to right bottom, #29EFBB, #311996)",
              }}
            />
          </Stack>
          <Stack>
            <Stack>Tech Stack</Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default ExampleContent;
