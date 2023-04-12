import { React } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import InventoryTable from "../components/tables/InventoryTable";

import {
    Typography,
    Card,
    CardContent,
    Divider,
    Grid
  } from "@mui/material";

const WarehouseManagement = (props) => {

    const inventories = [
        { inventory_id: 1, name: "Inventory A" },
        { inventory_id: 2, name: "Inventory B" },
        { inventory_id: 3, name: "Inventory C" },
        { inventory_id: 4, name: "Inventory D" },
    ];

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
                        <InventoryTable inventories={inventories} />
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