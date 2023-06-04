import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, CardMedia, Divider } from '@mui/material';  
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; 
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useState } from 'react';

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

export default function DishModal({openDishModal, handleDishModalToggle}) {
    const itemprice = 14.98;
    const [itemCount, setItemCount] = useState(1);
    const addItem = () => { setItemCount(itemCount+1); };
    const removeItem = () => {
        if (itemCount > 1){
            setItemCount(itemCount-1)
        }
    };

  return (
    <div>
      <Modal
        open={openDishModal}
        onClose={handleDishModalToggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CardMedia
            sx={{ height: 400 }}
            image="https://media.istockphoto.com/id/175197961/photo/salad-plate.jpg?s=612x612&w=0&k=20&c=9lxiIPsTBH7ytCXWuC__FvWyxkPxtkJ2evoNLrwhOVA="
            title="green iguana"
        />
          <Box sx={{ p: 4 ,mb: 20}}>
            <Box sx={{ flexGrow: 1,  }}> 
                <Box sx={{ mb:1 }}>
                    <Typography variant='h4'><strong>Salab Bundle</strong></Typography>
                </Box>
                <Box sx={{ mb:1 }}>
                    <Typography variant='body'>A perfect healthy & delicious meal.</Typography>
                    <Typography variant='body'> Choose from one of our favourite salads, add a drink and snack for just</Typography>
                    <Typography sx={{ mt: 1 }} variant='h6'> $14.98</Typography>
                </Box>
                <Divider />
                <Box sx={{ mb:1, mt: 2 }}>
                    <Typography variant='p'><strong>Contains No known allergens.</strong></Typography>
                    <Typography variant='body2'>Questions about allergens, ingredients or cooking methods?</Typography>
                    <Typography sx={{ mt: 1, color: '#00ccbc' }} variant='body2'>Please contact the restaurant.</Typography>
                </Box>  
            </Box>
          </Box> 
          <Box sx={{ width: 500, position: "absolute", bottom: "0px" }}>

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <AddCircleOutlineIcon  sx={{fontSize: 40, color: 'gray'}} onClick={()=>{ addItem() }}/>
                <Box sx={{ ml: 7, mr: 7, mb: 1 }} ><Typography variant='h4'>{itemCount}</Typography></Box>
                <RemoveCircleOutlineIcon sx={{fontSize: 40, color: 'gray'}} onClick={()=>{ removeItem() }} />
            </Box>
            <Button sx={{ mb:4, ml:4, mt: 1, width: '95%', height: 50, backgroundColor: '#00ccbc', fontSize: 17, fontWeight: 1000  }} onClick={()=>{handleDishModalToggle()}} variant="contained">Add for ${itemprice*itemCount }</Button>
          </Box> 
        </Box>
      </Modal>
    </div>
  );
}