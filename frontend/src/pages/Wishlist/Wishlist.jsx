import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import "./wishlist.scss";

import { deleteFav } from "../../redux/slices/slice";
import { useNavigate } from "react-router-dom";
import NavbarTwo from "../../components/navbar2/navbarTwo/NavbarTwo";
function Wishlist() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fav = useSelector((state) => state.products.fav);
  let localFav = JSON.parse(localStorage.getItem("fav"));
  console.log(localFav);
  function createData(name, price, button) {
    return { name, price, button };
  }

  return (
    <>
      <NavbarTwo />

      <div>
        <div className="table">
          {/* <Button
            onClick={() => {
              navigate("/");
            }}
            variant="outlined"
          >
            Back Home Page
          </Button> */}

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert name</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {localFav?.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={() => {
                          dispatch(deleteFav(row));
                        }}
                        variant="contained"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
