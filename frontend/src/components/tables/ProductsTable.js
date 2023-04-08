import React, { Fragment, useEffect, useState } from "react";
// To be uncommented when we integrate product redux
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { getProducts, deleteProduct } from "../../redux/actions/productActions";

import AddCircleIcon from '@mui/icons-material/AddCircle';
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

    const { inventory_id } = props;

    const [openForm, setOpenForm] = useState(false);

    useEffect(() => {
        // props.getProducts(inventory_id);
        console.log("GET PRODUCTS #" + inventory_id);
    }, []);

    const handleFormDialogOpen = () => {
        setOpenForm(true);
    };

    const handleFormDialogClose = () => {
        setOpenForm(false);
    };

    const dropProduct = (id) => {
        // props.deleteProduct(id, inventory_id);
        console.log("DELETE PRODUCT " + id);
    };

    if (props.products.length == 0) {
        return (
            <Fragment>
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
                        <TableCell>Quantity</TableCell>
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
                        <TableCell key={i + "3"}>{item["quantity"]}</TableCell>
                        <TableCell>
                            <Button
                            size="small"
                            variant="contained"
                            color="error"
                            onClick={() => dropProduct(item["id"])}
                            >
                            Drop
                            </Button>
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

// ProductsTable.propTypes = {
//     products: PropTypes.array.isRequired,
// };

// const mapStateToProps = (state) => ({
//     products: state.productsReducer.products,
// });

// export default connect(mapStateToProps, {
//     getProducts,
//     deleteProduct,
// })(ProductsTable);

export default ProductsTable;