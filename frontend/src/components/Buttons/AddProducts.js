import React, { useState } from "react";
import { connect } from "react-redux";
import { addProduct } from "../../redux/actions/productActions";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@mui/material";

const AddProduct = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    const newProduct = {
      id: props.products.length + 1,
      name: event.target.name.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
    };

    props.addProduct(newProduct);
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen} variant="contained" color="primary" sx={{ mt: 5 }}>
        Add Product
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a new product</DialogTitle>
        <form onSubmit={handleAddProduct}>
          <DialogContent>
            <DialogContentText>Please fill in the product details below.</DialogContentText>
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
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add Product
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.productReducer.products,
});

export default connect(mapStateToProps, { addProduct })(AddProduct);
