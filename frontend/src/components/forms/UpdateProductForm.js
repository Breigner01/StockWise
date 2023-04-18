import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProduct, getCategories, updateProduct } from "../../redux/actions/productActions";

// MUI
import {
  Typography,
  Button,
  Box,
  Container,
  TextField,
  InputAdornment,
  Select,
  MenuItem
} from "@mui/material";

const UpdateProductForm = (props) => {
    const { sku, onClose } = props;

    const emptyProduct = {
      id: sku,
      name: "",
      brand: "",
      description: "",
      price: "",
      category: ""
    };
    
    const [productData, setProductData] = useState(emptyProduct);
    const [errors, setErrors] = useState({});

    useEffect(() => {
      props.getCategories(props.userId);
    }, []);

    useEffect(() => {
      props.getProduct(props.userId, sku);
    }, [props.categories]);

    useEffect(() => {
      if(props.product){
        const currentProduct = {
          id: sku,
          name: props.product.name,
          brand: props.product.brand,
          description: props.product.description,
          price: props.product.price,
          category: props.product.category
        };
        setProductData(currentProduct);
      }
    }, [props.product]);

    const onChange = (e) =>
      setProductData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
      }));

    const updateProduct = (e) => {
      e.preventDefault();
      if (validProduct()){
          productData.price = parseFloat(productData.price);
          props.updateProduct(props.userId, productData);
          onClose();
      }
    };

    const validProduct = () => {
      let temp = {};
  
      temp.name = (productData.name.length > 2)? "" : "Product name must have more than 2 characters";
      temp.price = (productData.price > 0)? "" : "Product cannot be free";
      
      setErrors({ ...temp });
  
      return Object.values(temp).every(helperText => helperText == "");
    };

  return (
    <Box component="form" onSubmit={updateProduct}>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            alignItems: "center",
          }}
        >
            <Typography  align="left" variant="subtitle1">
                Product Name
            </Typography>
            <TextField
                margin="dense"
                required
                placeholder="Name"
                name="name"
                autoFocus
                fullWidth
                onChange={onChange}
                value={productData.name}
                {...(errors.name && {error: true, helperText: errors.name} )}
            />
            <Typography  align="left" variant="subtitle1">
                Brand
            </Typography>
            <TextField
                margin="dense"
                required
                placeholder="Brand"
                name="brand"
                autoFocus
                fullWidth
                onChange={onChange}
                value={productData.brand}
                // {...(errors.brand && {error: true, helperText: errors.brand} )}
            />
            <Typography  align="left" variant="subtitle1">
                Description
            </Typography>
            <TextField
                margin="dense"
                required
                placeholder="Description"
                name="description"
                autoFocus
                fullWidth
                onChange={onChange}
                value={productData.description}
                // {...(errors.name && {error: true, helperText: errors.name} )}
            />
            <Typography  align="left" variant="subtitle1">
                Price
            </Typography>
            <TextField
                margin="dense"
                type="number"
                placeholder="0.00"
                required
                name="price"
                autoFocus
                fullWidth
                onChange={onChange}
                value={productData.price}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                // {...(errors.name && {error: true, helperText: errors.name} )}
            />
            <Typography  align="left" variant="subtitle1">
                Category
            </Typography>
            <Select
              margin="dense"
              required
              placeholder="Category"
              name="category"
              fullWidth
              value={productData.category}
              label="Category"
              onChange={onChange}
              align="left"
            >
              {props.categories.map((item, i) => (
                <MenuItem key={i} value={item["name"]}>{item["name"]}</MenuItem>
              ))}
            </Select>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Update
            </Button>
        </Box>
      </Container>
    </Box>
  );
}

UpdateProductForm.propTypes = {
  updateProduct: PropTypes.func.isRequired,
  getProduct: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  userId: state.authReducer.user.uid,
  categories: state.productReducer.categories,
  product: state.productReducer.product,
});


export default connect(mapStateToProps, { getProduct, getCategories, updateProduct })(UpdateProductForm);