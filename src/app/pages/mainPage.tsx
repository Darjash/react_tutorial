import { Box, Button, Card, IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function MainPage() {
    return(
        <Box
        sx={{
          '& .MuiTextField-root': { m: 3, width: '30ch'},
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
          background:'rgb(168, 209, 193)',
        }}> 
        <Card sx={{
        minWidth: 500, 
        minHeight: 200}}>
            <Stack alignItems="center" > 
            <Stack> <h3>Welcome!</h3> </Stack>
            <Stack> <h5>Choose page</h5> </Stack>
            
            <Stack alignItems="center" direction='row' spacing={5}>
            <Button 
            component={Link} to="/form" 
            variant="contained" 
            color="primary"
            >Form</Button>
    
            <Button 
            component={Link} to="/game" 
            variant="contained" 
            color="primary"
            >Game</Button>

            </Stack>
            </Stack>
        </Card> 
        </Box>
    )
}