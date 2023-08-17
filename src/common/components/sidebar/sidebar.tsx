import React from 'react';
import {Box, Grid, Select, Typography} from "@mui/material";
import {PickLocation} from "../pick-location/pick-location";
import {Favourites} from "../favourites/favourites";

export const Sidebar = () => {
    return (
        <Grid item xs={12} sm={3} md={2}>
            <Box sx={{ p: 2, bgcolor: '#f4f4f4', width: 380, gap: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <PickLocation/>
                <Favourites/>
            </Box>
        </Grid>
    );
};

