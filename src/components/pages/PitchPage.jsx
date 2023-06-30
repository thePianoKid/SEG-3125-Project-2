import React from "react";
import Navbar from "../Navbar";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { properties } from "../../properties";
import ThemedButton from "../ThemedButton";

const SplashPageTitle = styled(Typography)(() => ({
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: properties.style.primary.grey,
}));

const SplashPageBody = styled(Typography)(() => ({
  fontSize: "18px",
  color: properties.style.primary.grey,
}));

function PitchPage(props) {
  const { titleText } = props;

  return (
    <div>
      <Navbar />
      <SplashPageTitle sx={{ pt: 4, ml: 3 }}>{titleText}</SplashPageTitle>
      <SplashPageBody sx={{ pt: 2, pb: 4, ml: 3 }}>
        Here are the services we suggest for your education centre.
      </SplashPageBody>
      <Grid container spacing={2} alignItems="center" alignContent="center" justifyContent="center">
        <Grid item xs={4}>
            <SplashPageTitle sx={{ pt: 4, ml: 3 }}>Service 1</SplashPageTitle>
            <SplashPageBody sx={{ pt: 2, pb: 4, ml: 3 }}>
                Lorem ipsum dolor sit amet, consectetur. Lorem ipsum.
            </SplashPageBody>
            <ThemedButton sx={{ ml: 3 }} btnText="Get Quote" />
        </Grid>
        <Grid item xs={4}>
            <SplashPageTitle sx={{ pt: 4, ml: 3 }}>Service 1</SplashPageTitle>
            <SplashPageBody sx={{ pt: 2, pb: 4, ml: 3 }}>
                Lorem ipsum dolor sit amet, consectetur. Lorem ipsum.
            </SplashPageBody>
            <ThemedButton sx={{ ml: 3 }} btnText="Get Quote" />
        </Grid>
        <Grid item xs={4}>
            <SplashPageTitle sx={{ pt: 4, ml: 3 }}>Service 1</SplashPageTitle>
            <SplashPageBody sx={{ pt: 2, pb: 4, ml: 3 }}>
                Lorem ipsum dolor sit amet, consectetur. Lorem ipsum.
            </SplashPageBody>
            <ThemedButton sx={{ ml: 3 }} btnText="Get Quote" />
        </Grid>
      </Grid>
    </div>
  );
}

export default PitchPage;
