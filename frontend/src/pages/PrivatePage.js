import React, { useEffect } from "react";
import "../App.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProdcuctTable from "../components/tables/ProductsTable"
import { loadProducts } from "../redux/actions/productActions";


import {
    Button,
    Box,
    Typography,
    Grid
} from "@mui/material";

const PrivatePage = (props) => {

    const handleButton = (e) => {
        e.preventDefault();
        console.log("Button Works");
      };

      const { loadProducts } = props;
        useEffect(() => {
        loadProducts();
        }, [loadProducts]);


    return (
        <Grid container spacing={1} >
            <Grid item xs={12}>
                <header className="App-header">
                    <Typography> Private Access </Typography>
                    <Typography variant="h5">
                        Welcome {props.auth.user.email}!
                    </Typography>
                    <Box component="form" onSubmit={handleButton} sx={{ mt: 1 }}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="success"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Test Action
                        </Button>

                        <Box ></Box>
                    </Box>
                </header>
            </Grid>
                    <Grid item xs={12} mt={5}>
                        <Box sx={{
                            bgcolor: 'background.paper',
                            boxShadow: 1,
                            borderRadius: 2,
                            p: 2,
                            minWidth: 300,
                            }}></Box>
                        <ProdcuctTable products={props.products}/>
                    </Grid>
        </Grid>
    );
}

PrivatePage.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.authReducer,
    products: state.productReducer.products,
});



export default connect(mapStateToProps,{ loadProducts })(PrivatePage);
