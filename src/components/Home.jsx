import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

import { useNavigate } from 'react-router-dom';
import './Home.css';
const Item = styled(Paper)(({ theme }) => ({
   
  
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Home = () => {
    const navigate = useNavigate(0);
    const goToProductConfiguration = (productId) => {
  
        // This will navigate to first component
        navigate('configuration/'+productId); 
      };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Item onClick={()=>goToProductConfiguration(101)}>               
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader

                                title="H200"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://homelift-configurator.tkelevator.com/media/altura.png"
                                alt="Paella dish"
                            />
                            <CardContent className='card-content'>
                                <Typography variant="body2" color="text.secondary">
                                    Our hydraulic home lift is reliable and remarkably versatile and adaptable.
                                </Typography>
                            </CardContent>


                        </Card>                   
                    </Item>
                </Grid>
                <Grid item xs={3}>
                <Item onClick={()=>goToProductConfiguration(102)}>        
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader

                                title="H300"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://homelift-configurator.tkelevator.com/media/altura.png"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Our premium gearless technology offers a fully electric solution which is extremely energy efficient and is near silent.
                                </Typography>
                            </CardContent>


                        </Card>
                    </Item>
                </Grid>

            </Grid>
        </Box>
    );
}


export default Home