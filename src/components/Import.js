import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MoreVert } from '@mui/icons-material'
const Import = (props) => {
  // fill out this component
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
const handleRemoveMake = (el) => {
    console.log(el.id, "handleremovemake")
    props.deleteMake(el.id)
}
  console.log(props.makes, "import component");
  return (
    <div>
      {" "}
      <p>Import Component</p>
      <Button onClick={props.fetchMakes} variant="contained" color="primary">
        Import
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id </TableCell>
              <TableCell align="right">Make</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.makes.map((row) => (
              <TableRow
                key={row.MakeId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* {console.log(row, "row data")} */}
                <TableCell component="th" scope="row">
                  {row.MakeId}
                </TableCell>
                <TableCell align="right">{row.MakeName}</TableCell>
                <TableCell align="right">
                  <Button
                    id= {row.MakeId}
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                   <MoreVert/>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {console.log(anchorEl,"anchorelement")}
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={() => handleRemoveMake(anchorEl)}>Delete</MenuItem>
      </Menu>
    </div>
  );
};

export default Import;
