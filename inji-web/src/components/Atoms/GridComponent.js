import * as React from 'react';
import {experimentalStyled as styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InteractiveCard from './Card';

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function GridComponent({cards}) {
    return (
        <Box>
            <Grid container spacing={{xs: 2, md: 2}} direction="row">
                {cards.map((card, index) => (
                    <Grid
                        item
                        xs={12}
                        md={4}
                        lg={4}
                        key={index}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <InteractiveCard
                            clickable={card.clickable}
                            title={card.title}
                            imageURL={card.imageUrl}
                            actionIcon={card.icon}
                            onClick={card.onClick}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
