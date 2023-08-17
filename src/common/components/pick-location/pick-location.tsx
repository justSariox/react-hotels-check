import React from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";

export const PickLocation = () => {
    return (
        <Box sx={{backgroundColor: '#ffffff', borderRadius: '16px'}} padding={4}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <div>
                    <Typography variant={'subtitle1'}>Локация</Typography>
                    <TextField fullWidth/>
                </div>
                <div>
                    <Typography variant={'subtitle1'}>Дата заселения</Typography>
                    <TextField fullWidth/>
                </div>
                <div>
                    <Typography variant={'subtitle1'}>Количество дней</Typography>
                    <TextField fullWidth/>
                </div>
                <Button sx={{height: '50px'}} fullWidth variant={"contained"}>Найти</Button>
            </div>
        </Box>
    );
};

