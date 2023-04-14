import React, { Fragment, useEffect, useState } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts, deleteProduct } from "../../redux/actions/productActions";

import AddCircleIcon from '@mui/icons-material/AddCircle';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import InventoryDialog from "../dialogs/InventoryDialog";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Tooltip,
    IconButton,
    Typography,
} from "@mui/material";

import CreateProductDialog from "../dialogs/CreateProductDialog";

const ProductsTable = (props) => {

    const [open, setOpen] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [sku, setSku] = useState(null);

    useEffect(() => {
        props.getProducts("QQP4wAWbWaeO2sDdSfvU0Ac3NTg2");
    }, []);

    const handleDialogOpen = (id) => {
        // setSku(id);
        setSku("111");
        setOpen(true);
    };

    const handleDialogClose = () => {
        setOpen(false);
    };

    const handleFormDialogOpen = () => {
        setOpenForm(true);
    };

    const handleFormDialogClose = () => {
        setOpenForm(false);
    };

    const dropProduct = (id) => {
        props.deleteProduct(props.userId, id);
    };

    if (props.products.length == 0) {
        return (
            <Fragment>
                <InventoryDialog open={open} onClose={handleDialogClose} sku={sku} />
                <CreateProductDialog open={openForm} onClose={handleFormDialogClose} />
                <Typography variant="h3" component="div" align="center" sx={{ my: 3 }}>
                    No Products!
                    <Tooltip title="Create Product">
                        <IconButton sx={{ ml: 1 }} size="large" color="success" onClick={handleFormDialogOpen} >
                            <AddCircleIcon />
                        </IconButton>
                    </Tooltip>
                </Typography>
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <InventoryDialog open={open} onClose={handleDialogClose} sku={sku} />
                <CreateProductDialog open={openForm} onClose={handleFormDialogClose} />
                <Typography variant="h3" component="div" align="center" sx={{ my: 3 }}>
                    Products
                    <Tooltip title="Create Product">
                        <IconButton sx={{ ml: 1 }} size="large" color="success" onClick={handleFormDialogOpen} >
                            <AddCircleIcon />
                        </IconButton>
                    </Tooltip>
                </Typography>
                <TableContainer
                component={Paper}
                sx={{ width: "100%", margin: "auto", my: 2 }}
                >
                <Table sx={{ minWidth: "sm" }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Brand</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>View Inventory</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.products.map((item, i) => (
                        <TableRow
                        key={i + "0"}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                        <TableCell key={i + "1"}>{item["id"]}</TableCell>
                        <TableCell key={i + "2"}>{item["name"]}</TableCell>
                        <TableCell key={i + "3"}>{item["brand"]}</TableCell>
                        <TableCell key={i + "4"}>{item["description"]}</TableCell>
                        <TableCell key={i + "5"}>{item["price"]}$</TableCell>
                        <TableCell key={i + "6"}>{item["category"]}</TableCell>
                        <TableCell>
                            <Tooltip title="View Inventory">
                                <IconButton 
                                    sx={{ ml: 1 }} 
                                    size="large" 
                                    color="primary" 
                                    onClick={() => handleDialogOpen(item["id"])}
                                >
                                    <Inventory2OutlinedIcon />
                                </IconButton>
                            </Tooltip>
                        </TableCell>
                        <TableCell>
                            <Tooltip title="Remove Product">
                            <IconButton 
                                sx={{ ml: 1 }} 
                                size="large" 
                                color="error" 
                                onClick={() => dropProduct(item["id"])}
                            >
                                <HighlightOffIcon />
                            </IconButton>
                        </Tooltip>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Fragment>
        );
    }
}

ProductsTable.propTypes = {
    products: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    products: state.productReducer.products,
    userId: state.authReducer.user.uid,
});

export default connect(mapStateToProps, {
    getProducts, deleteProduct
})(ProductsTable);