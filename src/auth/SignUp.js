import React from "react";
import { Box, Typography, TextField, Button, useTheme } from "@mui/material";

const SignUp = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <Box
                sx={{
                    border: "1px solid #AB886D",
                    padding: "20px",
                    borderRadius: "5px",
                    width: "90%",
                    maxWidth: "500px",
                    [theme.breakpoints.down("sm")]: {
                        padding: "15px",
                    },
                }}
            >
                <Box>
                    <Typography
                        variant="h6"
                        sx={{
                            padding: "20px",
                            fontFamily: "Lexend, serif",
                            color: "#AB886D",
                            textAlign: "center",
                        }}
                    >
                        SignUp
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        gap: "10px",
                    }}
                >
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Full Name"
                        variant="outlined"
                        sx={{
                            marginBottom: "10px",
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#493628",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#493628",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#493628",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                fontFamily: "Lexend, serif",
                            },
                        }}
                    />
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        sx={{
                            marginBottom: "10px",
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#493628",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#493628",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#493628",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                fontFamily: "Lexend, serif",
                            },
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        gap: "10px",
                    }}
                >
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Mobile Number"
                        variant="outlined"
                        sx={{
                            marginBottom: "10px",
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#493628",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#493628",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#493628",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                fontFamily: "Lexend, serif",
                            },
                        }}
                    />
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="OTP"
                        variant="outlined"
                        sx={{
                            marginBottom: "10px",
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#493628",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#493628",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#493628",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                fontFamily: "Lexend, serif",
                            },
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        gap: "10px",
                    }}
                >
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        sx={{
                            marginBottom: "10px",
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#493628",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#493628",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#493628",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                fontFamily: "Lexend, serif",
                            },
                        }}
                    />
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Confirm Password"
                        variant="outlined"
                        sx={{
                            marginBottom: "10px",
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#493628",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#493628",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#493628",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                fontFamily: "Lexend, serif",
                            },
                        }}
                    />
                </Box>
                <Box>
                    <Button
                        variant="contained"
                        sx={{
                            fontFamily: "Lexend, serif",
                            background: "linear-gradient(to right, #D6C0B3, #493628)",
                            width: "100%",
                            marginTop: "10px",
                            "&:hover": {
                                background: "#493628",
                            },
                        }}
                    >
                        SignUp
                    </Button>
                </Box>
                <Box
                    sx={{
                        marginTop: "10px",
                        marginBottom: "10px",
                        textAlign: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Lexend, serif",
                        }}
                    >
                        Already have an account? <strong>SignIn</strong>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SignUp;
