import * as React from 'react';
import {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear'
import axios from 'axios';
import { IconButton, InputBase } from '@mui/material';

const PaperBox = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: "black",
}));

function Row() {
    return (<React.Fragment>
      <Grid item xs={4}>
        <PaperBox>Item</PaperBox>
      </Grid>
      <Grid item xs={4}>
        <PaperBox>Item</PaperBox>
      </Grid>
      <Grid item xs={4}>
        <PaperBox>Item</PaperBox>
      </Grid>
    </React.Fragment>);
}

function RestaurantItem({name, address, city, state, miles, zip}) {
    return (
      <Box mx={1}>
            <PaperBox sx={{width: 230, height: 120}} px={2}>
            <Grid container spacing={2} direction="row">
                <Grid item>
                    <Avatar sx={{ bgcolor: "orange" }}>{name}</Avatar>
                </Grid>
                <Grid item sx={{textAlign: "left"}}>
                    <Typography>{name}</Typography>
                    <Typography>{address}</Typography>
                    <Typography>{city}</Typography>
                    <Typography>{state}</Typography>
                    <Typography>{zip}</Typography>
                </Grid>
            </Grid>
            </PaperBox>
            <p>{miles} miles</p>
      </Box>
            )
}

function RestaurantList({restaurants}) {
    return (<Box sx={{display: 'flex', maxWidth: "100%", overflow: "auto", justifyContent: "flex-start"}}>
      {restaurants.map(({name, address, city, state, miles, zip})=>(<RestaurantItem name={name} address={address} city={city} state={state} miles={miles} zip={zip}/>))}
    </Box>);
}

function SearchBar({value, onChange, onClear}) {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for Restaurants"
        inputProps={{ 'aria-label': 'search for restaurants' }}
        value={value}
        onChange={onChange}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="clear" onClick={onClear}>
        <ClearIcon />
      </IconButton>
    </Paper>
  )
}

export default function Main() {
  // restaurant 리스트를 불러오기 위한 변수
  const [restaurants, setRestaurants] = useState([])

  // 검색어 변수
  const [query, setQuery] = useState("");

  // 검색창 지우는 함수
  function handleClear() {
    setQuery("");
  }

  // 검색창 입력값 처리 함수
  function handleChange(e) {
    setQuery(e.target.value);
  }

  // 페이지가 로드 될 때 레스토랑 불러오기
  useEffect(
    () => {
      // axios로 레스토랑 리스트 뽑아오기
      axios.get("/restaurant").then((restaurants) => {
        // 레스토랑 변수 업데이트
        setRestaurants(restaurants.data);
      })
    },
    [] // 리스트가 비어있으면 페이지 로드될때 한번 실행
  )

    
  return (
    <Box>
      <Box ml={2} my={2}>
        <SearchBar value={query} onChange={handleChange} onClear={handleClear}/>
      </Box>
      <Box my={2}>
        <RestaurantList restaurants={restaurants}/>
      </Box>
      <Box my={2}>
        <Grid container item spacing={3}>
          <Row />
        </Grid>
      </Box>
    </Box>
  );
}