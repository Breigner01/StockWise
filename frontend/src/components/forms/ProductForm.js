import React, { useState } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProduct } from "../../redux/actions/productActions";

// MUI
import {
  Typography,
  Button,
  Box,
  Container,
  TextField
} from "@mui/material";

const ProductForm = (props) => {
    const { onClose } = props;

    const emptyProduct = {
        name: "",
        quantity: 0,
    };
    
    const [productData, setProductData] = useState(emptyProduct);
    const [errors, setErrors] = useState({});

    const onChange = (e) =>
        setProductData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));

    const createProduct = (e) => {
        e.preventDefault();
        if (true || validProduct()){
            const productData2 = {
              id: 5,
              name: "name",
              brand: "gucci",
              description: "sick product trust",
              price: 20.99,
              categeory: "A",
            }
            props.addProduct(productData2);
            onClose();
        }
    };

    const validProduct = () => {
        let temp = {};
    
        temp.name = (productData.name.length > 2)? "" : "Product name must have more than 2 characters";
        temp.quantity = (productData.quantity > 0)? "" : "Quantity must be more than 0";
        
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
                placeholder="Product Name"
                name="name"
                autoFocus
                fullWidth
                onChange={onChange}
                value={productData.name}
                {...(errors.name && {error: true, helperText: errors.name} )}
            />
            <Typography  align="left" variant="subtitle1">
                Quantity
            </Typography>
            <TextField
                margin="dense"
                required
                placeholder="Quantity"
                name="quantity"
                autoFocus
                fullWidth
                onChange={onChange}
                value={productData.quantity}
                {...(errors.name && {error: true, helperText: errors.name} )}
            />
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
};

export default connect(null, { addProduct })(ProductForm);