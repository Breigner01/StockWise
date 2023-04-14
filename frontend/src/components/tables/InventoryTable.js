import React, { Fragment, useEffect } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getInventory } from "../../redux/actions/inventoryActions";

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from "@mui/material";

const InventoryTable = (props) => {

    useEffect(() => {
        props.getInventory(props.auth.user.uid, props.sku.toString());
    }, []);
    
    return (
        <Fragment>
            <Typography variant="h3" component="div" align="center" sx={{ my: 3 }}>
                Inventory
            </Typography>
            <TableContainer
            component={Paper}
            sx={{ width: "100%", margin: "auto", my: 6 }}
            >
                <Table sx={{ minWidth: "sm" }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Field</TableCell>
                        <TableCell>Value</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell>Quantity</TableCell>
                            <TableCell>{props.inventory.quantity}</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell>Available</TableCell>
                            <TableCell>{props.inventory.available}</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell>In Transit</TableCell>
                            <TableCell>{props.inventory.inTransit}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}

InventoryTable.propTypes = {
  auth: PropTypes.object.isRequired,
  inventory: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  inventory: state.inventoryReducer.inventory,
});

export default connect(mapStateToProps, {
    getInventory
})(InventoryTable);