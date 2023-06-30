import React, { forwardRef } from "react";
import "../../style/fonts/roboto.css";
import { styled } from "@mui/material/styles";
import { Grid, ListItem, Typography, Container } from "@mui/material";
import ThemedButton from "../ThemedButton";
import { properties } from "../../properties";

const AboutTitle = styled(Typography)(() => ({
  margin: "auto",
  textAlign: "center",
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: properties.style.primary.grey,
}));

const StyledListItem = styled(ListItem)(() => ({
  fontFamily: "Roboto",
  fontSize: "18px",
}))

function About() {
  return (
    <div>
      <AboutTitle sx={{ pt: 18, pb: 7 }}>How can we help?</AboutTitle>
      <Grid container>
        <Grid xs={6}></Grid>
        <Grid xs={6}>
          <StyledListItem sx={{ display: "list-item" }}>
            Steampunk creates programs that teach the basics of STEM
          </StyledListItem>
          <StyledListItem sx={{ display: "list-item" }}>
            Each program is created to fit the specific needs of your education
            centre
          </StyledListItem>
          <StyledListItem sx={{ display: "list-item" }}>
            Steampunk has partnered with schools, libraries & community centres
            across Ontario & Québec
          </StyledListItem>
          <Container sx={{ pb: "30px" }}></Container>
          <ThemedButton btnText={"Educators, start here"} />
        </Grid>
      </Grid>
    </div>
  );
}

export default forwardRef(About);
