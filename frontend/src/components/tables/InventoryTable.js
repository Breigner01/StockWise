import React, { Fragment, useEffect, useState } from "react";
// To be uncommented when we integrate inventory redux
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { getInventories, deleteInventory } from "../../redux/actions/inventoryActions";

import AddCircleIcon from '@mui/icons-material/AddCircle';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    IconButton,
    Paper,
    Typography,
} from "@mui/material";

import CreateInventoryDialog from "../dialogs/CreateInventoryDialog";
import InventoryDialog from "../dialogs/InventoryDialog";

const InventoryTable = (props) => {
    const [open, setOpen] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [inventoryId, setInventoryId] = useState(null);

    useEffect(() => {
        // props.getInventories();
        console.log("GET INVENTORIES");
    }, []);

    const handleDialogOpen = (id) => {
        setInventoryId(id);
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

    const removeInventory = (id) => {
        // props.deleteInventory(code);
        console.log("DELETE INVENTORY " + id);
    };

    if (props.inventories.length == 0) {
        return (
            <Fragment>
                <InventoryDialog open={open} onClose={handleDialogClose} inventory_id={inventoryId} />
                <CreateInventoryDialog open={openForm} onClose={handleFormDialogClose} />
                <Typography variant="h3" component="div" align="center" sx={{ my: 3 }}>
                    No Inventories!
                    <Tooltip title="Create Inventory">
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
            <InventoryDialog open={open} onClose={handleDialogClose} inventory_id={inventoryId} />
            <CreateInventoryDialog open={openForm} onClose={handleFormDialogClose} />
            <Typography variant="h3" component="div" align="center" sx={{ my: 3 }}>
                Inventories
                <Tooltip title="Create Inventory">
                    <IconButton sx={{ ml: 1 }} size="large" color="success" onClick={handleFormDialogOpen} >
                        <AddCircleIcon />
                    </IconButton>
                </Tooltip>
            </Typography>
            <TableContainer
            component={Paper}
            sx={{ width: "100%", margin: "auto", my: 6 }}
            >
            <Table sx={{ minWidth: "sm" }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>View Inventory</TableCell>
                    <TableCell></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {props.inventories.map((item, i) => (
                    <TableRow
                    key={i + "0"}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                    <TableCell key={i + "1"}>{item["inventory_id"]}</TableCell>
                    <TableCell key={i + "2"}>{item["name"]}</TableCell>
                    <TableCell>
                        <Tooltip title="View Inventory">
                            <IconButton 
                                sx={{ ml: 1 }} 
                                size="large" 
                                color="primary" 
                                onClick={() => handleDialogOpen(item["inventory_id"])}
                            >
                                <Inventory2OutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </TableCell>
                    <TableCell>
                        <Tooltip title="Remove Inventory">
                            <IconButton 
                                sx={{ ml: 1 }} 
                                size="large" 
                                color="error" 
                                onClick={() => removeInventory(item["inventory_id"])}
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

// InventoryTable.propTypes = {
//   auth: PropTypes.object.isRequired,
//   inventories: PropTypes.array.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.authReducer,
//   inventories: state.inventoryReducer.inventories,
// });

// export default connect(mapStateToProps, {
//     getInventories, 
//     deleteInventory
// })(InventoryTable);

export default InventoryTable;