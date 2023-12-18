import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function Template ({children} :{children: ReactNode}) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            width: '100%',
            minHeight: '100vh',
            background: 'rgb(209, 201, 201)'

        }}>
            {children}
        </Box>
    )
}