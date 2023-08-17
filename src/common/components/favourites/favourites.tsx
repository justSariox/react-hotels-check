import React from 'react';
import {Box, Card, Rating, Typography} from "@mui/material";
import {Favorite} from "@mui/icons-material";

export const Favourites = () => {
    return (
        <Box sx={{backgroundColor: '#ffffff', borderRadius: '16px'}} padding={4}>
            <Typography variant={'h5'}>Избранное</Typography>
            <div style={{display: 'flex', gap: '10px'}}>
                <div>select1</div>
                <div>select2</div>
            </div>
            <Box>
                <Card sx={{marginTop: '10px', display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography>Moscow Marriott Grand Hotel</Typography>
                        <Favorite/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-start', gap: '15px'}}>
                        <Typography>28 June, 2020 </Typography>
                        <Typography >-</Typography>
                        <Typography >1 день</Typography>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Rating name="read-only" value={5} readOnly />
                        <Typography variant={"caption"} sx={{display: 'flex', gap: '5px'}}>Price: {<Typography>
                            23 924 Р
                        </Typography>}</Typography>
                    </div>
                </Card>
                <Card sx={{marginTop: '10px', display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography>Moscow Marriott Grand Hotel</Typography>
                        <Favorite/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-start', gap: '15px'}}>
                        <Typography>28 June, 2020 </Typography>
                        <Typography >-</Typography>
                        <Typography >1 день</Typography>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Rating name="read-only" value={5} readOnly />
                        <Typography variant={"caption"} sx={{display: 'flex', gap: '5px'}}>Price: {<Typography>
                            23 924 Р
                        </Typography>}</Typography>
                    </div>
                </Card>
                <Card sx={{marginTop: '10px', display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography>Moscow Marriott Grand Hotel</Typography>
                        <Favorite/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-start', gap: '15px'}}>
                        <Typography>28 June, 2020 </Typography>
                        <Typography >-</Typography>
                        <Typography >1 день</Typography>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Rating name="read-only" value={5} readOnly />
                        <Typography variant={"caption"} sx={{display: 'flex', gap: '5px'}}>Price: {<Typography>
                            23 924 Р
                        </Typography>}</Typography>
                    </div>
                </Card>
            </Box>
        </Box>
    );
};

