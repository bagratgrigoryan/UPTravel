import React from 'react';
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
function Header(props) {
  const navigate = useNavigate();
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar  style={{
                background: "magenta"
            }}>
                <Toolbar>
                    <Typography style={{
                        border: "1px solid white",
                        borderRadius: "25px",
                        textAlign: "center",
                        width: "50px",
                        height: "50px",
                        background: "orange",
                        cursor:"pointer"
                    }}
                                component={"span"}
                                variant={"h6"}

                                onClick={() => {
                                    navigate("/cms")
                                }}
                    >
                     UP
                    </Typography>
                    <Typography style={{
                        marginLeft: "10px"
                    }}>
                        Travel
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;