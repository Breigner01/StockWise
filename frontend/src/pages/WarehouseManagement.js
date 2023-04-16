import { React } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ProductsTable from "../components/tables/ProductsTable";

import {
    Typography,
    Card,
    CardContent,
    Divider,
    Grid
  } from "@mui/material";

const WarehouseManagement = (props) => {

    return (
        <Card align="center">
            <CardContent>
                <Typography
                variant="h5"
                align="left"
                gutterBottom
                component="div"
                >
                    Welcome {props.auth.user.email}!
                </Typography>

                <Divider />

                <Grid 
                container
                spacing={1}
                >
                    <Grid item xs={12} sx={{mx: 5}}>
                        <ProductsTable inventory_id={69} />
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}

WarehouseManagement.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.authReducer,
});

export default connect(mapStateToProps)(WarehouseManagement);