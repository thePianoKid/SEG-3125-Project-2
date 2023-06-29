import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

function createData(city, availableWorkshops, ageRange) {
  return { city, availableWorkshops, ageRange };
}

const rows = [
  createData("Almer", 1, "6-14"),
  createData("Almonte", 4, "5-16"),
  createData("Carleton Place", 2, "8-12"),
  createData("Gatineau", 1, "8-14"),
  createData("Ottawa", 3, "8-12"),
  createData("Perth", 2, "9-12"),
  createData("Renfrew", 1, "8-14"),
  createData("Smith Falls", 2, "9-12"),
];

function WorkshopSearchCity({ onClose, selectedValue, open }) {
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleCityClick = (city) => {
    onClose(city);
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={"md"}>
      <DialogTitle>Search for workshops near you</DialogTitle>
      <DialogContent dividers>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "16px" }}>City</TableCell>
                <TableCell sx={{ fontSize: "16px" }} align="right">Available Workshops</TableCell>
                <TableCell sx={{ fontSize: "16px" }} align="right">Age Range</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.city}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={() => handleCityClick(row.city)}
                >
                  <TableCell component="th" scope="row">
                    {row.city}
                  </TableCell>
                  <TableCell align="right">{row.availableWorkshops}</TableCell>
                  <TableCell align="right">{row.ageRange}</TableCell>
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
