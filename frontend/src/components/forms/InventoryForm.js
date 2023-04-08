import React, { useState } from "react";
// To be uncommented when we integrate inventory redux
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { addInventory } from "../../redux/actions/inventoryActions";

// MUI
import {
  Typography,
  Button,
  Box,
  Container,
  TextField
} from "@mui/material";

const InventoryForm = (props) => {
    const { onClose } = props;

    const emptyInventory = {
        name: "",
    };
    
    const [inventoryData, setInventoryData] = useState(emptyInventory);
    const [errors, setErrors] = useState({});

    const onChange = (e) =>
        setInventoryData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));

    const createInventory = (e) => {
        e.preventDefault();
        if (validInventory()){
            // props.addInventory(inventoryData);
            console.log("ADD INVENTORY");
            console.log(inventoryData);
            onClose();
        }
    };

    const validInventory = () => {
        let temp = {};
    
        temp.name = (inventoryData.name.length > 2)? "" : "Inventory name must have more than 2 characters";
        
        setErrors({ ...temp });
    
        return Object.values(temp).every(helperText => helperText == "");
    };

  return (
    <Box component="form" onSubmit={createInventory}>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            alignItems: "center",
          }}
        >
            <Typography  align="left" variant="subtitle1">
                Inventory Name
            </Typography>
            <TextField
                margin="dense"
                required
                placeholder="Inventory Name"
                name="name"
                autoFocus
                fullWidth
                onChange={onChange}
                value={inventoryData.name}
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

// InventoryForm.propTypes = {
//   addInventory: PropTypes.func.isRequired,
// };

// export default connect(null, { addInventory })(InventoryForm);

export default InventoryForm;