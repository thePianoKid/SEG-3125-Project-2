import React, { useState } from "react";
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

const SplashPageBody = styled(Typography)(() => ({
  fontSize: "18px",
  color: properties.style.primary.grey,
}));

const Contact = () => {
  const [showConfirmationPage, setShowConfirmationPage] = useState(false);

  return (
    <div>
      <Navbar />
      {!showConfirmationPage ? (
        <div>
          <SplashPageTitle sx={{ pt: 4, pb: 2, ml: 3 }}>
            Contact Steampunk
          </SplashPageTitle>
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
            onClick={() => setShowConfirmationPage(true)}
          />
        </div>
      ) : (
        <div>
          <SplashPageTitle sx={{ pt: 4, pb: 2, ml: 3 }}>
            Submission Successful!
          </SplashPageTitle>
          <SplashPageBody sx={{ pt: 2, pb: 1, ml: 3 }}>
            Thank you for your interest. We will get back to you in 1-2 business
            days.
          </SplashPageBody>
        </div>
      )}
    </div>
  );
};

export default Contact;
