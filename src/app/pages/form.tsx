//import { CenterFocusStrong } from "@mui/icons-material";
import { Box, Button, Card, Stack, TextField} from "@mui/material";
import { useState } from "react";

export default function Form() {
  const [price, setPrice] = useState('')
  const [comment, setComment] = useState('')

  const handleComment = (e)=> {setComment(e.target.value)
    console.log(comment)}
  const handlePrice = (e)=> {setPrice(e.target.value)
  console.log(price)}
  const submitForm = () =>{console.log(price,comment)}
  return (
      <> 
        <Box
        component="form"
        sx={{'& .MuiTextField-root': { m: 3, width: '30ch'},
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
          onChange={(event)=>handlePrice(event)}
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

        <Stack direction='row' mx={5} >
          <Button 
          variant="contained"
          onClick={submitForm}
          type="button"> Submit </Button>
        </Stack>
        </Card>
        </Box>

      </>
    );
}
