import React from "react";
import Navbar from "../Navbar";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { properties } from "../../properties";
import ThemedButton from "../ThemedButton";
import { Link } from "react-router-dom";

const SplashPageTitle = styled(Typography)(() => ({
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: properties.style.primary.grey,
}));

const SplashPageBody = styled(Typography)(() => ({
  fontSize: "18px",
  color: properties.style.primary.grey,
}));

const TimeRemaining = styled(Typography)(() => ({
  fontFamily: "Roboto",
  fontSize: "18px",
  color: properties.style.primary.grey,
}));

function Quiz(props) {
  const { targetAudience } = props;

  return (
    <div>
      <Navbar />
      <SplashPageTitle sx={{ pt: 4, ml: 3 }}>Quiz Time!</SplashPageTitle>
      <SplashPageBody sx={{ pt: 2, pb: 3, ml: 3}}>
        This is an example quiz description, depending on the button that was
        clicked on the home page, the quiz content will be different. I.e. the
        quiz for the education centre will ask questions about learning goals
        and the size of the page. The quiz for the students or parents is more
        focused on the student’s proficiency in STEM.
      </SplashPageBody>
      <TimeRemaining sx={{ pb: 2, ml: 3 }}>Time to complete: <strong>2 min</strong></TimeRemaining>
      <Link to="/quizcontent">
        <ThemedButton sx={{ ml: 3 }} btnText="Start Quiz" />
      </Link>
    </div>
  );
}

export default Quiz;
