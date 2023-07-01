import React from "react";
import Navbar from "../Navbar";
import { Typography, TextField, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { properties } from "../../properties";
import ThemedButton from "../ThemedButton";

const SplashPageTitle = styled(Typography)(() => ({
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: properties.style.primary.grey,
}));

const Contact = () => {
  return (
    <div>
      <div>
        <Navbar />

        <SplashPageTitle sx={{ pt: 4, pb: 2, ml: 3 }}>Contact Steampunk</SplashPageTitle>
        <Grid sx={{ pb: 3 }} container>
          <TextField
            sx={{ ml: 3, width: 400 }}
            label="Enter your work email..."
            variant="filled"
          />
        </Grid>
        <Grid sx={{ pb: 3 }}>
          <TextField
            sx={{ ml: 3, width: 600 }}
            label="Questions or comments?"
            variant="filled"
            multiline
            rows={5}
          />
        </Grid>
        <ThemedButton
          sx={{ ml: 3 }}
          btnText="Submit"
        />
      </div>
    </div>
  );
};

export default Contact;
