import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCategories, addProduct } from "../../redux/actions/productActions";

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

const ProductForm = (props) => {
    const { onClose } = props;

    const emptyProduct = {
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

    const onChange = (e) =>
      setProductData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
      }));

    const createProduct = (e) => {
      e.preventDefault();
      if (validProduct()){
          productData.price = parseFloat(productData.price);
          props.addProduct(props.userId, productData);
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
    <Box component="form" onSubmit={createProduct}>
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
                Create
            </Button>
        </Box>
      </Container>
    </Box>
  );
}

ProductForm.propTypes = {
  addProduct: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  userId: state.authReducer.user.uid,
  categories: state.productReducer.categories,
});


export default connect(mapStateToProps, { getCategories, addProduct })(ProductForm);