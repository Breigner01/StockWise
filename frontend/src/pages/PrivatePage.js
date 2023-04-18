import React, { useEffect } from "react";
import "../App.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  getProducts,
  addProduct,
  deleteProduct,
} from "../redux/actions/productActions";
import {
  getInventory,
  addInventory,
  decreaseInventory,
} from "../redux/actions/inventoryActions";

import { Button, Box, Typography, Grid } from "@mui/material";

const PrivatePage = (props) => {
  const handleGetProducts = (e) => {
    e.preventDefault();
    props.getProducts(props.auth.user.uid);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const productData = {
      id: 5,
      name: "name",
      brand: "gucci",
      description: "sick product trust",
      price: 20.99,
      category: "A",
    };
    props.addProduct("abc123", productData);
  };

  const handleDeleteProduct = (e) => {
    e.preventDefault();
    props.deleteProduct("abc123", 23);
  };

  const handleGetInventory = (e) => {
    e.preventDefault();
    props.getInventory("firebase_id", "sku");
    console.log("object");
  };

  const handleAddInventory = (e) => {
    e.preventDefault();
    const invData = {
      ownerId: "firebase_id",
      sku: 1,
      quantity: 1,
    };
    props.addInventory("firebase_id", invData);
  };

  const handleDecreaseInventory = (e) => {
    e.preventDefault();
    const invData = {
      ownerId: "firebase_id",
      sku: 1,
      quantity: 1,
    };
    props.decreaseInventory("firebase_id", invData);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <header className="App-header">
          <Typography> Private Access </Typography>
          <Typography variant="h5">Welcome {props.auth.user.email}!</Typography>
          <Box component="form" onSubmit={handleGetProducts} sx={{ mt: 1 }}>
            <Button type="submit" fullWidth variant="contained" color="success">
              Get Products
            </Button>
          </Box>
          <Box component="form" onSubmit={handleAddProduct} sx={{ mt: 1 }}>
            <Button type="submit" fullWidth variant="contained" color="success">
              Add Products
            </Button>
          </Box>
          <Box component="form" onSubmit={handleDeleteProduct} sx={{ mt: 1 }}>
            <Button type="submit" fullWidth variant="contained" color="success">
              Delete Product
            </Button>
          </Box>
          <Box component="form" onSubmit={handleGetInventory} sx={{ mt: 1 }}>
            <Button type="submit" fullWidth variant="contained" color="success">
              Get Inventory
            </Button>
          </Box>
          <Box component="form" onSubmit={handleAddInventory} sx={{ mt: 1 }}>
            <Button type="submit" fullWidth variant="contained" color="success">
              Add Inventory
            </Button>
          </Box>
          <Box
            component="form"
            onSubmit={handleDecreaseInventory}
            sx={{ mt: 1 }}
          >
            <Button type="submit" fullWidth variant="contained" color="success">
              Decrease Inventory
            </Button>
          </Box>
        </header>
      </Grid>
    </Grid>
  );
};

PrivatePage.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, {
  getProducts,
  addProduct,
  deleteProduct,
  getInventory,
  addInventory,
  decreaseInventory,
})(PrivatePage);
