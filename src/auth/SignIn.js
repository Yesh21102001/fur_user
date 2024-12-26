import {
    Box,
    Typography,
    useTheme,
    TextField,
    Button,
    Alert,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignIn = () => {
        if (!email || !password) {
            setError("Both fields are required!");
            return;
        }
        setError("");
        navigate("/");
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
                        SignIn
                    </Typography>
                </Box>
                {error && (
                    <Alert severity="error" sx={{ marginBottom: "10px" }}>
                        {error}
                    </Alert>
                )}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        gap: "10px",
                    }}>
                    <TextField
                        fullWidth
                        id="email"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    <Typography
                        sx={{
                            fontFamily: "Lexend, serif",
                        }}><Link
                            to="/forgot"
                            style={{
                                textDecoration: "none",
                                fontFamily: "Lexend, serif",
                                cursor: "pointer",
                                marginLeft: "5px",
                                display: "flex",
                                justifyContent: "flex-start"
                            }}>
                            Forgot Password?
                        </Link>
                    </Typography>
                </Box>
                <Box>
                    <Button
                        variant="contained"
                        onClick={handleSignIn}
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
                        SignIn
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
                        Don't have an account?
                        <Link
                            to="/signup"
                            style={{
                                textDecoration: "none",
                                fontFamily: "Lexend, serif",
                                cursor: "pointer",
                                marginLeft: "5px",
                            }}
                        >
                            SignUp
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SignIn;