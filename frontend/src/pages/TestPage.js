import React from "react";

import {
    Button,
    Box,
    Typography,
    Grid
} from "@mui/material";

const TestPage = () => {

    const handleGetStudents = (e) => {
        e.preventDefault();
        console.log("button works")
    };

    return (
        <Grid container spacing={1} >
            <Grid item xs={12}>
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
            </Grid>
        </Grid>
    );
}

export default TestPage