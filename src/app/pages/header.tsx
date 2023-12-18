import { IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

export default function Header () {
    return (
        <nav className="header">
            <IconButton href ="/" size="large">
                <HomeIcon />
            </IconButton>
        </nav>
    )
}