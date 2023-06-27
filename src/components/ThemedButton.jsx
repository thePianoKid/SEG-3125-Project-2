import React from "react";
import { Button } from "@mui/material";
import { properties } from "../properties";

function ThemedButton({ btnText }) {
  return (
    <Button
      className="btn"
      variant="contained"
      disableRipple={true}
      disableTouchRipple={true}
      disableFocusRipple={true}
      sx={{
        "&:hover": {
          backgroundColor: properties.style.primary.main,
        },
        marginRight: "40px",
      }}
    >
      {btnText}
    </Button>
  );
}

export default ThemedButton;
