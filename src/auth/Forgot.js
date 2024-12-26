import React, { useState } from "react";
import { Box, useTheme, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setError("Email is required.");
        } else if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
        } else {
            setError("");
            console.log("Email submitted:", email);
            navigate("/verification");
        }
    };

    return (
        <Box
            sx={{
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
                <Typography
                    variant="h6"
                    sx={{
                        padding: "20px",
                        fontFamily: "Lexend, serif",
                        color: "#AB886D",
                        textAlign: "center",
                    }}
                >
                    Forgot Password
                </Typography>
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
                        id="email"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={Boolean(error)}
                        helperText={error}
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
                <Button
                    variant="contained"
                    onClick={handleSubmit}
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
                    Submit
                </Button>
            </Box>
        </Box>
    );
};

export default Forgot;