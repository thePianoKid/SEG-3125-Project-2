import React, { useState } from "react";
import { Typography, TextField, Grid, ListItem } from "@mui/material";
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

const StyledListItem = styled(ListItem)(() => ({
  fontFamily: "Roboto",
  color: properties.style.primary.grey,
  fontSize: "16px",
}));

function ContactForm(props) {
  const { titleText, submitBtnText } = props;

  const [confimation, setConfirmation] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      {confimation ? (
        <div>
          <SplashPageTitle sx={{ pt: 4, ml: 3 }}>Success!</SplashPageTitle>
          <SplashPageBody sx={{ pt: 2, pb: 1, ml: 3 }}>
            Thank you for your interest. We will get back to you in 1-2 business
            days.
          </SplashPageBody>

          <SplashPageBody sx={{ pt: 2, pb: 1, ml: 3 }}>
            Submission details
          </SplashPageBody>
          <StyledListItem sx={{ ml: 3 }}>Email: {email}</StyledListItem>
          <StyledListItem sx={{ ml: 3 }}>
            Other comments: {message}
          </StyledListItem>
        </div>
      ) : (
        <div>
          <SplashPageTitle sx={{ pt: 4, pb: 2, ml: 3 }}>
            { titleText }
          </SplashPageTitle>
          <Grid sx={{ pb: 3 }} container>
            <TextField
              sx={{ ml: 3, width: 400 }}
              label="Enter your work email..."
              variant="filled"
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid sx={{ pb: 3 }}>
            <TextField
              sx={{ ml: 3, width: 600 }}
              label="Questions or comments?"
              variant="filled"
              multiline
              rows={5}
              onChange={handleMessageChange}
            />
          </Grid>
          <ThemedButton
            sx={{ ml: 3 }}
            btnText={submitBtnText}
            onClick={() => setConfirmation(true)}
          />
        </div>
      )}
    </div>
  );
}

export default ContactForm;
