import React, { useState } from "react";
import Navbar from "../Navbar";
import { Typography, TextField, Grid, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { properties } from "../../properties";
import { useLocation } from "react-router-dom";
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

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Quote() {
  const [confimation, setConfirmation] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  let quote = useQuery();
  let serviceName = properties.services[quote.get("service")];

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }

  return (
    <div>
      <Navbar />
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
          <StyledListItem sx={{ ml: 3 }}>
            Service: {serviceName}
          </StyledListItem>
          <StyledListItem sx={{ ml: 3 }}>
            Email: {email}
          </StyledListItem>
          <StyledListItem sx={{ ml: 3 }}>
            Other comments: {message}
          </StyledListItem>
        </div>
      ) : (
        <div>
          <SplashPageTitle sx={{ pt: 4, ml: 3 }}>Request Quote</SplashPageTitle>
          <SplashPageBody sx={{ pt: 2, pb: 3, ml: 3 }}>
            Requested Service: {serviceName}
          </SplashPageBody>
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
            btnText="Request Quote"
            onClick={() => setConfirmation(true)}
          />
        </div>
      )}
    </div>
  );
}

export default Quote;
