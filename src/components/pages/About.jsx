import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, ListItem, Typography } from "@mui/material";

const AboutTitle = styled(Typography)(() => ({
  margin: "auto",
  textAlign: "center",
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: "#6D6D6D",
}));

function About() {
  return (
    <div>
      <AboutTitle sx={{ pt: 18, pb: 7 }}>How can we help?</AboutTitle>
      <Grid container spacing={2}>
        <Grid xs={3}></Grid>
        <Grid xs={9}>
          <ListItem sx={{ display: "list-item" }}>
            Steampunk creates programs that teach the basics of STEM
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Each program is created to fit the specific needs of your education
            centre
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Steampunk has partnered with schools, libraries & community centres
            across Ontario & Québec
          </ListItem>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
