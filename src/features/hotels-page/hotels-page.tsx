import React from 'react';
import {Sidebar} from "../../common/components/sidebar/sidebar";
import {Box, Container, Grid} from "@mui/material";
import {Hotels} from "../../common/components/hotels/hotels";

export const HotelsPage = () => {
    return (
            <Container maxWidth={'lg'} sx={{marginTop: '10px'}}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Sidebar/>
                        <Hotels/>
                    </Grid>
                </Box>
            </Container>
    );
};

