import { Box, useTheme, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Verification = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const [otpError, setOtpError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleVerification = () => {
        let isValid = true;
        
        if (!/^\d{6}$/.test(otp)) {
            setOtpError("OTP must be a 6-digit number.");
            isValid = false;
        } else {
            setOtpError("");
            navigate("/signin");
        }

        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(password)) {
            setPasswordError("Password must be at least 8 characters, include a number, an uppercase letter, and a special character.");
            isValid = false;
        } else {
            setPasswordError("");
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match.");
            isValid = false;
        } else {
            setConfirmPasswordError("");
        }

        if (isValid) {
            console.log("Form submitted successfully!");
        }
    };

    return (
        <Box
            sx={{
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
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
                }}>
                <Typography
                    variant="h6"
                    sx={{
                        padding: "20px",
                        fontFamily: "Lexend, serif",
                        color: "#AB886D",
                        textAlign: "center",
                    }}>
                    Verification
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        gap: "10px",
                    }}>
                    <TextField
                        fullWidth
                        id="otp"
                        label="OTP"
                        variant="outlined"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        error={Boolean(otpError)}
                        helperText={otpError}
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
                        id="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={Boolean(passwordError)}
                        helperText={passwordError}
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
                        id="confirm-password"
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={Boolean(confirmPasswordError)}
                        helperText={confirmPasswordError}
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
                        justifyContent: "center",
                    }}>
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
                        onClick={handleVerification}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Verification;
