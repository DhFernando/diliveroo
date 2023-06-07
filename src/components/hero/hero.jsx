import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import img from '../../images/hero-image.png';
import { Typography } from '@mui/material';
import BasicCard from '../../atoms/basic_cards';
import AtomicButton from '../../atoms/button'; 
import GroupIcon from '@mui/icons-material/Group';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import Link from '@mui/material/Link';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import StarIcon from '@mui/icons-material/Star';
import ReviewModal from '../review_modal/review_modal';

import { useSelector, useDispatch } from 'react-redux' 
import { getRestaurants, toggleReviewModal } from '../../store/slices/restaurant'

const ImageWrapper = styled('div')({
  width: '100%',
  height: '90%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export default function Hero() {  
  
  const dispatch = useDispatch()
  const {currentResturentInformation,openReviewModal } = useSelector(state=> state.restaurant) 
  const [isDataFetchingComplete, setIsDataFetchingComplete] = React.useState(false)
  const handleReviewModalToggle = () => {
    dispatch(toggleReviewModal())
  }

  useEffect(()=>{
    // fetch restaurant info
    dispatch(getRestaurants())
  },[])

  useEffect(()=>{
    if(currentResturentInformation) {
      setIsDataFetchingComplete(true)
    }
  },[currentResturentInformation])

  if(!isDataFetchingComplete) {
    return <>loding...</>
  }
   
  return (
    <Box sx={{ flexGrow: 1, mb: 0, mt: 15 }}>
      <Grid container spacing={2}>
        <Grid item lg={4} md={6} sm={12}> 
            <ImageWrapper>
              <Image src={img} sx={{ borderRadius: 2 }} alt="Example of a beautiful landscape" />
            </ImageWrapper> 
        </Grid>
        <Grid item lg={5} md={6} sm={12}>
          <Typography variant="h4" gutterBottom>
            <strong>{currentResturentInformation.name}</strong>
          </Typography>
          <Typography variant="body" gutterBottom>
            { `${currentResturentInformation.openHours} - ${currentResturentInformation.tags}` } 
          </Typography>
          <br />
          <br />
          <Typography variant="body" gutterBottom>
            0.20 miles away - Closes at 21:00 - {currentResturentInformation.deliveryFee} delivery - £7.00 minimum
          </Typography>
          <BasicCard icon={<ErrorOutlineIcon  aria-label="recipe" /> } titleTypography='h6'  title={'Info'} subheader={'Map, allergens and hygiene rating'}/>
          <Box onClick={()=> handleReviewModalToggle()} sx={{ color: 'green' }} >
            <BasicCard icon={<StarIcon  aria-label="ratings" /> } titleTypography='h6' title={`${currentResturentInformation.hygieneRating} Ecellent`} subheader={`See all 500 reviews`}/>
          </Box>
           
        </Grid>
        <Grid item lg={3} md={12} sm={12} sx={{ pr: 4, mb: 5 }}> 
          <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
            <DirectionsBikeIcon sx={{ marginRight: 2 }} />
            <Typography variant="body" gutterBottom>
              Deliver in 10 - 20 min
            </Typography>
            <Link sx={{ ml: 2 }}>Change</Link>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row',  }}>
            <AtomicButton icon={<GroupIcon />} label="Start group order"  />
          </Box>  
        </Grid> 
      </Grid>
      <ReviewModal openReviewModal={openReviewModal} handleReviewModalToggle={handleReviewModalToggle}/>
    </Box>
  );
}
