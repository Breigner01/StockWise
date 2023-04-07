import React, { useState } from "react";
import { connect } from "react-redux";
import { loadProducts, addProduct } from "../../redux/actions/productActions";
import AddProducts from "../Buttons/AddProducts";
import {

  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Button,
  TextField,
  

} from "@mui/material";

const ProductTable = (props) => {
  const { products } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderProductRows = () => {
    return products
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((product) => (
        <TableRow key={product.id}>
          <TableCell>{product.ownerId}</TableCell>
          <TableCell>{product.sku}</TableCell>
          <TableCell>{product.quantity}</TableCell>
          <TableCell>
            <TextField
              type="number"
            ></TextField>
          </TableCell>
          <TableCell>
            <form>
            <Button>Add</Button>
            <Button>Remove</Button>
            </form>
            </TableCell>
        </TableRow>
      ));
  };

  return (
    <div>
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{borderRadius: 1, }}>
          <TableRow>
            <TableCell sx={{backgroundColor:"black", color:'white'}}>Owner ID</TableCell>
            <TableCell sx={{backgroundColor:"black", color:'white'}}>SKU</TableCell>
            <TableCell sx={{backgroundColor:"black", color:'white'}}>Quantity</TableCell>
            <TableCell sx={{backgroundColor:"black", color:'white'}}></TableCell>
            <TableCell sx={{backgroundColor:"black", color:'white'}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderProductRows()}</TableBody>
      </Table>
      <TablePagination
        component="div"
        count={products.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </TableContainer>
    <AddProducts />
  </div>
    
  );
};
const mapStateToProps = (state) => ({
  products: state.productReducer.products,
});

export default connect(mapStateToProps, { loadProducts, addProduct })(ProductTable);
