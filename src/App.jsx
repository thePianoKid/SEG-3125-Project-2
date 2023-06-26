import React from "react";
import "./style/fonts/josefin-slab.css";
import "./style/App.css";
import { properties } from "./properties";
import ThemedButton from "./components/ThemedButton";
import Navbar from './components/Navbar';
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      main: properties.style.primary.main,
    },
  },

  typography: {
    button: {
      fontFamily: "Josefin Slab",
      fontSize: "18px",
      textTransform: "none",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <ThemedButton btnText={"Educators"} />
        <ThemedButton btnText={"Students"} />
        <ThemedButton btnText={"Parents"} />
      </div>
    </ThemeProvider>
  );
}

export default App;
