import React, { useEffect } from "react";
import { useFormik } from "formik";
import "./addPage.scss";
import { v4 as uuidv4 } from "uuid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";

import Paper from "@mui/material/Paper";
import {
  getAllData,
  deleteProduct,
  addProduct,
  filter,
} from "../../redux/slices/slice";
import NavbarTwo from "../../components/navbar2/navbarTwo/NavbarTwo";
function AddPage() {
  const dispatch = useDispatch();

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  useEffect(() => {
    dispatch(getAllData());
  }, []);
  const data = useSelector((state) => state.products.products);
  const data2 = useSelector((state) => state.products.products2);
  //   console.log(data);
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less";
    }

    if (!values.price) {
      errors.price = "Required";
    } else if (values.price.length > 20) {
      errors.price = "Must be 20 characters or less";
    }

    // if (!values.email) {
    //   errors.email = "Required";
    // } else if (
    //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    // ) {
    //   errors.email = "Invalid email address";
    // }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
    },
    validate,
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      console.log(values.name);
      let obj = {
        id: uuidv4(),
        name: values.name,
        price: values.price,
      };
      console.log(obj);
      dispatch(addProduct(obj));
    },
  });

  return (
    <>
      <NavbarTwo />
      <div className="addPage">
        <h1>Add Page</h1>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            className="input"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? <div>{formik.errors.name}</div> : null}

          <label htmlFor="price">Price</label>
          <input
            className="input"
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.errors.price ? <div>{formik.errors.price}</div> : null}

          {/* <label htmlFor="email">Email Address</label>
        <input
          className="input"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null} */}

          <button type="submit">Submit</button>
        </form>
        <div className="sort">
          <Button
            onClick={() => {
              dispatch(filter(data2));
            }}
            variant="contained"
          >
            Default
          </Button>
          <Button
            onClick={() => {
              let arr = [...data].sort((a, b) => (a.name < b.name ? -1 : 1));
              console.log(arr);
              dispatch(filter(arr));
            }}
            variant="contained"
          >
            A-Z
          </Button>
          <Button
            onClick={() => {
              let arr = [...data].sort((a, b) => (a.name > b.name ? -1 : 1));
              console.log(arr);
              dispatch(filter(arr));
            }}
            variant="contained"
          >
            Z-A
          </Button>
          <Button
            onClick={() => {
              let arr = [...data].sort((a, b) => (a.price > b.price ? -1 : 1));
              console.log(arr);
              dispatch(filter(arr));
            }}
            variant="contained"
          >
            Price
          </Button>
        </div>
        <div className="table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>name</TableCell>
                  <TableCell align="right">price</TableCell>
                  <TableCell align="right">ddelete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={() => {
                          dispatch(deleteProduct(row));
                        }}
                        variant="outlined"
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

export default AddPage;
