import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Divider, Grid, LinearProgress, Rating } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'; 
import { getReviewsByResturantId } from '../../store/slices/restaurant'
import { useSelector, useDispatch } from 'react-redux'
import { Stack } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  border: '1px solid #f0f0f0',
  boxShadow: 24, 
  borderRadius: 1
};

export default function ReviewModal({openReviewModal, handleReviewModalToggle}) {
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(getReviewsByResturantId())
    }, [])
    const { reviews } = useSelector(state=> state.restaurant) 

    if(reviews === null){
        return <>loading...!</>
    }
  return (
    <div>
      <Modal
        open={openReviewModal}
        onClose={handleReviewModalToggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" align='center' sx={{ p: 2 }}>
            <strong>Reviews</strong>
          </Typography>
          <Divider />
          <Box sx={{ p: 4 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={3} textAlign={'center'}>
                        <Typography variant='h4' color={'#00ccbc'}><strong>4.3</strong></Typography>
                        
                        <Rating
                            sx={{color: '#00ccbc'}}
                            name="simple-controlled"
                            value={4.3} 
                        />
                        <Typography component="legend">500+ reviews</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Stack spacing={2} sx={{ flex: 1 }}>
                           { [60, 10, 5, 25, 15].map((rate, index) => (
                            <>
                                <LinearProgress key={index} sx={{
                                    height: 7,
                                    borderRadius: 1, 
                                    backgroundColor: '#f0f0f0',
                                    '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#00ccbc'
                                        }
                                    }}  
                                    variant="determinate" value={rate} />
                            </>
                           ))}
                        </Stack> 
                    </Grid>  
                </Grid>
                <Divider />
                <Box sx={{ mt: 3, mb:1 }}>
                    <Typography variant='h6'><strong>All Reviews</strong></Typography>
                </Box>
                <Divider />
                <Box sx={{ height: '400px' }}>
                    <Box  sx={{ overflow: 'hidden', overflowY: 'scroll' }}>
                        {reviews.slice(0,2).map((element)=>(
                            <Box  key={element.id}>
                                <Box sx={{ mb: 1 }}>
                                    <Box sx={{ mt: 2, mb: 2 }}>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'row'
                                        }}>
                                            <AccountCircleIcon sx={{ mr: 2 }} />
                                            <Typography variant='body'>{element.customerName}</Typography>
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'row'
                                        }}>
                                            <Rating 
                                                sx={{ mr: 2, color: '#00ccbc' }}
                                                name="simple-controlled"
                                                value={element.stars} 
                                            />
                                            <Typography variant='body2'>{element.date}</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ mb:2 }}>
                                        <Typography variant='legend'>{element.content}</Typography>
                                    </Box>
                                    <Box sx={{
                                            color: '#00ccbc',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            mb: 2
                                        }}
                                            >
                                                <InsertEmoticonIcon sx={{ mr: 2 }}/>
                                        <Typography variant='body2'>Great selection</Typography>
                                    </Box> 
                                </Box>
                                <Divider />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
          </Box> 
          <Box sx={{ width: 500, position: "absolute", bottom: "0px" }}>
            <Button sx={{ m:4, width: '95%', height: 50, backgroundColor: '#00ccbc'  }} onClick={()=>{handleReviewModalToggle()}} variant="contained">Back to menu</Button>
          </Box> 
        </Box>
      </Modal>
    </div>
  );
}