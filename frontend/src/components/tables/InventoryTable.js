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
    TextField,
    Button
} from "@mui/material";

const InventoryTable = (props) => {

    const { onClose, sku } = props;

    const baseInventory = {
        quantity: 10,
        available: 10,
        inTransit: 10,
        // quantity: props.inventory.quantity,
        // available: props.inventory.available,
        // inTransit: props.inventory.inTransit,
    };

    const [inventoryData, setInventoryData] = useState(baseInventory);
    const [modifyInventory, setModifyInventory] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        props.getInventory(props.userId, sku.toString());
    }, []);

    useEffect(() => {
        setModifyInventory(JSON.stringify(baseInventory) !== JSON.stringify(inventoryData));
    }, [inventoryData]);

    const onChange = (e) =>
        setInventoryData((prevState) => ({
          ...prevState,
          [e.target.name]: Number(e.target.value),
        }));

    const updateInventory = () => {
        if (validInventory()){
            props.addInventory(props.userId, inventoryData);
            onClose();
        }
    };

    const validInventory = () => {
        let temp = {};
        
        setErrors({ ...temp });
    
        return Object.values(temp).every(helperText => helperText === "");
    };
    
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
                                <TextField
                                    type="number"
                                    name="quantity"
                                    onChange={onChange}
                                    value={inventoryData.quantity}
                                    // {...(errors.name && {error: true, helperText: errors.name} )}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell style={{width: 100}}>Available</TableCell>
                            <TableCell style={{width: 200}}>
                                <TextField
                                    type="number"
                                    name="available"
                                    onChange={onChange}
                                    value={inventoryData.available}
                                    // {...(errors.name && {error: true, helperText: errors.name} )}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell style={{width: 100}}>In Transit</TableCell>
                            <TableCell style={{width: 200}}>
                                <TextField
                                    type="number"
                                    name="inTransit"
                                    onChange={onChange}
                                    value={inventoryData.inTransit}
                                    // {...(errors.name && {error: true, helperText: errors.name} )}
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            {modifyInventory && <Button
                variant="contained"
                sx={{ mb: 2 }}
                onClick={updateInventory}
            >
                Update
            </Button>}
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