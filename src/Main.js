import * as React from 'react';
import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: "black",
  marginBottom: "1em"
}));

const dummyRestaurants = [
    {
        name: "Firehouse Subs",
        address: "9825 San Jose Blvd.",
        city: "Jacksonville",
        state: "Florida",
        miles: 0.64
    },
    {
        name: "Shoki Chan",
        address: "1234 Shoki Rd.",
        city: "Gainesville",
        state: "Florida",
        miles: 2.45
    }
    ,
    {
        name: "Hosungs",
        address: "131 Hosung Rd.",
        city: "Gainesville",
        state: "Florida",
        miles: 2.69
    }
    ,
    {
        name: "Pi House",
        address: "3141 Circle Blvd.",
        city: "Gainesville",
        state: "Florida",
        miles: 3.15
    }
    ,
    {
        name: "Gundaeria",
        address: "6979 Army Rd.",
        city: "Paju",
        state: "Korea",
        miles: 9999.39
    }
];

function Row() {
    return (<React.Fragment>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
    </React.Fragment>);
}

function RestaurantItem({name, address, city, state, miles}) {
    return (
        <Grid item xs={2}>
            <Item>
            <Grid container spacing={2} direction="row">
                <Grid item>
                    <Avatar sx={{ bgcolor: "orange" }}>{name}</Avatar>
                </Grid>
                <Grid container item xs={8} direction="column" spacing={1} sx={{textAlign: "left"}}>
                    <Grid item xs={3}>{name}</Grid>
                    <Grid item xs={3}>{address}</Grid>
                    <Grid item xs={3}>{city}</Grid>
                    <Grid item xs={3}>{state}</Grid>
                </Grid>
            </Grid>
            </Item>
            {miles} miles
        </Grid>)
}

function RestaurantList({restaurants}) {
    return (<React.Fragment>
      {restaurants.map(({name, address, city, state, miles})=>(<RestaurantItem name={name} address={address} city={city} state={state} miles={miles}/>))}
    </React.Fragment>);
}

export default function BasicGrid() {
    const [restaurants, setRestaurants] = useState(dummyRestaurants)
  return (
    <Box sx={{ flexGrow: 1 }} px={5} py={2}>
      <Grid container spacing={2}>
        <Grid container item spacing={3}>
          <RestaurantList restaurants={restaurants}/>
        </Grid>
        <Grid container item spacing={3}>
          <Row />
        </Grid>
        <Grid container item spacing={3}>
          <Row />
        </Grid>
      </Grid>
    </Box>
  );
}