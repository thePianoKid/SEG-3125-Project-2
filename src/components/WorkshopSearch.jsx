import { React, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { properties } from "../properties";

function createCityData(city, availableWorkshops, ageRange) {
  return { city, availableWorkshops, ageRange };
}

function createWorkshopData(name, educationCentre, ageRange) {
  return { name, educationCentre, ageRange };
}

function BootstrapDialogTitle(props) {
  const { children, onClose, searchForCity, setSearchForCity, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {searchForCity ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : (
        <Button
          sx={{
            color: properties.style.primary.grey,
            position: "absolute",
            right: 8,
            top: 8,
          }}
          // onClick={() => setSearchForCity(true)}
        >
          Back
        </Button>
      )}
    </DialogTitle>
  );
}

function WorkshopSearchCity({ onClose, selectedValue, open }) {
  const [searchForCity, setSearchForCity] = useState(true);

  const [rows, setRows] = useState([
    createCityData("Almer", 1, "6-14"),
    createCityData("Almonte", 4, "5-16"),
    createCityData("Carleton Place", 2, "8-12"),
    createCityData("Gatineau", 1, "8-14"),
    createCityData("Ottawa", 3, "8-12"),
    createCityData("Perth", 2, "9-12"),
    createCityData("Renfrew", 1, "8-14"),
    createCityData("Smith Falls", 2, "9-12"),
  ]);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleCityClick = (row) => {
    let workshopData = [];
    for (let i = 1; i < row.availableWorkshops + 1; i++) {
      workshopData.push(
        createWorkshopData(
          "Example workshop " + i.toString(),
          "Example Education Centre",
          row.ageRange
        )
      );
    }

    setSearchForCity(false);
    setRows(workshopData);
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={"md"}>
      <BootstrapDialogTitle onClose={handleClose} searchForCity={searchForCity} setSearchForCity={setSearchForCity}>
        Search for workshops near you
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "16px" }}>City</TableCell>
                <TableCell sx={{ fontSize: "16px" }}>
                  Available Workshops
                </TableCell>
                <TableCell sx={{ fontSize: "16px" }}>Age Range</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  hover
                  key={searchForCity ? row.city : row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": { cursor: "pointer" },
                  }}
                  onClick={() => handleCityClick(row)}
                >
                  <TableCell component="th" scope="row">
                    {searchForCity ? row.city : row.name}
                  </TableCell>
                  <TableCell>
                    {searchForCity
                      ? row.availableWorkshops
                      : row.educationCentre}
                  </TableCell>
                  <TableCell>{row.ageRange}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </Dialog>
  );
}

export default WorkshopSearchCity;
