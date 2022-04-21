import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import TwitterIcon from '@mui/icons-material/Twitter';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';





const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  


export default function AutoGrid() {
  return (

    <Box sx={{ flexGrow: 1 ,padding: '2rem', bgcolor:'#2C3F40'}}>
      <Typography style={{textAlign:'center', padding:'10px', color: '#fff', fontSize:'1.5em'}}>
          CONTACT US
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs>
          <Item>FOLLOW US <br />
     

          <BottomNavigationAction sx={{color:'#000'}} icon={<FacebookIcon />} /> 
                                
         <BottomNavigationAction  sx={{color:'#000'}}icon={<InstagramIcon />} />
                       
         <BottomNavigationAction sx={{color:'#000'}} icon={<SubscriptionsIcon />} />

        
       
          </Item>
        </Grid>


        <Grid item xs={6} >
          <Item style={{JustifyContent:'center'}}>
              
          NEWSLETTER <br/>
          Sign up for our newsletter and get emails you love filled
          with great inspirations and tips of the latest memories releases and
          the most recommended. 

          <Box 
           component="form"
             sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
             }}
                 noValidate
            autoComplete="off"
              >
                 <TextField id="outlined-basic" label="Email" variant="outlined" />
                 
                 <Stack spacing={2} direction="row">
            
                 <Button  variant="outlined">SUBMIT</Button>
                </Stack>
              </Box>

             


          </Item>
        </Grid>


        <Grid item xs>
          <Item>WRITE US</Item>
        </Grid>
      </Grid>

    </Box>
   
  );
}