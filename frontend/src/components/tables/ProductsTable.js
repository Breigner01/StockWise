import React, { useState } from "react";
import { connect } from "react-redux";
import { loadProducts, addProduct } from "../../redux/actions/productActions";
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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,

} from "@mui/material";

const ProductTable = (props) => {
  const { products } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [showAddProductForm, setShowAddProductForm] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    const newProduct = {
      id: products.length + 1, // Set the new product ID to the current length of products array + 1
      name: event.target.name.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
    };
  
    props.addProduct(newProduct);
    setShowAddProductForm(false);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const renderProductRows = () => {
    return products
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((product) => (
        <TableRow key={product.id}>
          <TableCell>{product.id}</TableCell>
          <TableCell>{product.name}</TableCell>
          <TableCell>{product.price}</TableCell>
          <TableCell>{product.quantity}</TableCell>
        </TableRow>
      ));
  };

  return (
    <div>
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{borderRadius: 1, }}>
          <TableRow>
            <TableCell sx={{backgroundColor:"black", color:'white'}}>Product ID</TableCell>
            <TableCell sx={{backgroundColor:"black", color:'white'}}>Product Name</TableCell>
            <TableCell sx={{backgroundColor:"black", color:'white'}}>Price</TableCell>
            <TableCell sx={{backgroundColor:"black", color:'white'}}>Quantity</TableCell>
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
    <Button onClick={handleClickOpen} variant="contained" color="primary" sx={{mt: 5}}>
  Add Product
</Button>
<Dialog open={open} onClose={handleClose}>
  <DialogTitle>Add a new product</DialogTitle>
  <form onSubmit={handleAddProduct}>
    <DialogContent>
      <DialogContentText>
        Please fill in the product details below.
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        name="name"
        label="Product Name"
        type="text"
        fullWidth
        required
      />
      <TextField
        margin="dense"
        name="price"
        label="Price"
        type="number"
        fullWidth
        required
      />
      <TextField
        margin="dense"
        name="quantity"
        label="Quantity"
        type="number"
        fullWidth
        required
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary" >
        Cancel
      </Button>
      <Button type="submit" color="primary">
        Add Product
      </Button>
    </DialogActions>
  </form>
</Dialog>
  </div>
    
  );
};
const mapStateToProps = (state) => ({
  products: state.productReducer.products,
});

export default connect(mapStateToProps, { loadProducts, addProduct })(ProductTable);
