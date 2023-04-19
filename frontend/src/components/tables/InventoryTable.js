import React, { Fragment, useEffect, useState } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getInventory, addInventory } from "../../redux/actions/inventoryActions";

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Button
} from "@mui/material";

const InventoryTable = (props) => {

    const { sku } = props;

    useEffect(() => {
        props.getInventory(props.userId, sku);
    }, []);
    
    return (
        <Fragment>
            <Typography variant="h3" component="div" align="center" sx={{ my: 3 }}>
                Inventory
            </Typography>
            <TableContainer
            component={Paper}
            sx={{ width: "70%", margin: "auto", my: 6 }}
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
                            <TableCell style={{width: 100}}>Quantity</TableCell>
                            <TableCell style={{width: 200}}>
                                {props.inventory.quantity}
                            </TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell style={{width: 100}}>Available</TableCell>
                            <TableCell style={{width: 200}}>
                                {props.inventory.available}
                            </TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell style={{width: 100}}>In Transit</TableCell>
                            <TableCell style={{width: 200}}>
                                {props.inventory.inTransit}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}

InventoryTable.propTypes = {
  inventory: PropTypes.object.isRequired,
  addInventory: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userId: state.authReducer.user.uid,
  inventory: state.inventoryReducer.inventory,
});

export default connect(mapStateToProps, {
    getInventory, addInventory
})(InventoryTable);