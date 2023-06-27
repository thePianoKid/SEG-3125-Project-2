import React from 'react'
import "../../style/fonts/josefin-sans.css";
import Navbar from '../Navbar';
import ThemedButton from '../ThemedButton';
import Grid from '@mui/system/Unstable_Grid';
import { Typography } from '@mui/material'
import { styled } from "@mui/material/styles";

const SplashPageTitle = styled(Typography)(() => ({
    fontFamily: "Josefin Sans",
    fontSize: "30px",
    color: "#6D6D6D",
}));

const SplashPageBody = styled(Typography)(() => ({
    fontSize: "18px",
    color: "#6D6D6D",
}));

const Home = () => {
  return (
    <div>
        <Navbar />
        <Grid container spacing={2}>
            <Grid xs={6}></Grid>
            <Grid xs={6}>
                <SplashPageTitle sx={{ pt: 23 }}>
                    Unlock the potential of future <strong>scientists</strong> and <strong>engineers</strong>
                </SplashPageTitle>
                <SplashPageBody sx={{ pt: 2, pb: 3 }}>
                    Revolutionize your education centre with educational resources and passionate instructors who specialize in teaching STEM.
                </SplashPageBody>
                <ThemedButton btnText={ "Educators" } />
                <ThemedButton btnText={ "Students" } />
                <ThemedButton btnText={ "Parents" } />
            </Grid>
        </Grid>
    </div>
  )
}

export default Home;