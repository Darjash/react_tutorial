//import { CenterFocusStrong } from "@mui/icons-material";
import { Box, Button, Card, Stack, TextField} from "@mui/material";
import { useState } from "react";
import Header from './header';

export default function Form() {
  const [price, setPrice] = useState('')
  const [comment, setComment] = useState('')

  const handleComment = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {setComment(e.target.value)
   // console.log(comment)
  }
  const handlePrice = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {setPrice(e.target.value)
  //console.log(price)
}
  const submitForm = () =>{console.log(price,comment)}
  return (
      <Box sx={{
        top:'0',
        left:'0',
        width: '100%',
        height: '100%',
        background:'rgb(146, 157, 183)',
      }}> 
        <Header/>
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 3, width: '30ch'},
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Set a height to center vertically on the page
        }}
        autoComplete="off"> 
       <Card sx={{maxWidth: 600 }}>
        <Stack direction='row' margin={2}>
          <TextField 
          label="Number" 
          variant="outlined" 
          placeholder="Enter your number" 
          required
          type="number"
          value={price}
          onChange={(event)=>handlePrice(event )}
          />

          <TextField 
          label="Text" 
          variant="outlined" 
          placeholder="Enter your text"
          required
          value={comment}
          onChange={(event)=>handleComment(event)}
          />
        </Stack>

        <Stack direction="column" alignItems="center" mx={5} my={3} >
          <Button 
          variant="contained"
          onClick={submitForm}
          type="button"> Submit </Button>
        </Stack>
        </Card>
        </Box>

      </Box>
    );
}
