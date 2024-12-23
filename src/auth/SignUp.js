import React from "react";
import { Box, Typography, TextField } from "@mui/material";

const SignUp = () => {
    return (
        <Box sx={{ padding: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{
                border: "1px solid #AB886D",
                height: "auto",
                width: "500px"
            }}>
                <Box>
                    <Typography variant="h6" sx={{ padding: "20px", fontFamily: "Lexend, serif", color: "#AB886D" }}>SignUp</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                    <Box>
                        <TextField id="outlined-basic" label="Full Name" variant="outlined"
                            sx={{
                                marginBottom: "10px", '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#493628',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#493628',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#493628',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    fontFamily: "Lexend, serif",
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    fontFamily: "Lexend, serif",
                                }
                            }} />
                    </Box>
                    <Box>
                        <TextField id="outlined-basic" label="Email" variant="outlined"
                            sx={{ marginBottom: "10px" }} />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                    <Box>
                        <TextField id="outlined-basic" label="Mobile Number" variant="outlined"
                            sx={{ marginBottom: "10px" }} />
                    </Box>
                    <Box>
                        <TextField id="outlined-basic" label="Mobile Number" variant="outlined"
                            sx={{ marginBottom: "10px" }} />
                    </Box>
                </Box>

            </Box>
        </Box>
    );
}

export default SignUp;
