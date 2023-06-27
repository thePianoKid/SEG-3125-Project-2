import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

const ServicesTitle = styled(Typography)(() => ({
    margin: "auto",
    textAlign: "center",
    fontFamily: "Josefin Sans",
    fontSize: "30px",
    color: "#6D6D6D",
  }));

function Services() {
  return (
    <div>
      <ServicesTitle sx={{ pt: 18, pb: 7 }}>Why Steampunk?</ServicesTitle>
      <Grid container spacing={2}>
        <Grid xs={3}></Grid>
        <Grid xs={9}>
          <Typography variant="p" sx={{ fontFamily: "Roboto" }}>
            Steampunk provides the hardware, educators and infrastructure
            required to run a successful STEM education program
          </Typography>

          <br />
          <br />

          <Typography variant="p" sx={{ fontFamily: "Roboto" }}>
            Whether you're planning a half-day workshop, or a multi-year
            initiative to improve STEM education, we provide course content and
            hardware that that is tailored to your needs.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Services;
