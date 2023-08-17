import React from 'react';
import {Breadcrumbs, Typography} from "@mui/material";

export const BBreadcrumbs = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Breadcrumbs separator={'>'} aria-label={'1'}>
                <Typography variant={'h5'}>Отели</Typography>
                <Typography variant={'h5'}>Москва</Typography>
            </Breadcrumbs>
            <Typography>07 июля 2020</Typography>
        </div>
    );
};

