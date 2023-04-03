import React from "react";

import {
    Button,
    Box,
    Typography
} from "@mui/material";

const TestPage = () => {

    const handleGetStudents = (e) => {
        e.preventDefault();
        console.log("button works")
    };

    return (
        <header className="App-header">
            <Typography> Welcome! </Typography>
            <Box component="form" onSubmit={handleGetStudents} sx={{ mt: 1 }}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="success"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Test
                </Button>
            </Box>
        </header>
    );
}

export default TestPage