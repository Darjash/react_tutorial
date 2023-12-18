import { Box, IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

export default function Header () {
    return (
        <Box sx={{
            display: 'flex',
            width: '100%',
            padding: '1em',
            backgroundColor:'ghostwhite',
        }}>
            <IconButton href ="/" size="large">
                <HomeIcon />
            </IconButton>
        </Box>
    )
}