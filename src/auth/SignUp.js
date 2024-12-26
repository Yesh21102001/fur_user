import React, { useState } from "react";
import { Box, Typography, TextField, Button, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const theme = useTheme();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobileNumber: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.fullName) tempErrors.fullName = "Full Name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        if (!formData.mobileNumber) tempErrors.mobileNumber = "Mobile Number is required";
        if (!formData.password) tempErrors.password = "Password is required";
        if (!formData.confirmPassword) tempErrors.confirmPassword = "Confirm Password is required";
        if (formData.password !== formData.confirmPassword)
            tempErrors.confirmPassword = "Passwords do not match";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validate()) {
            console.log("Form data submitted:", formData);
            navigate("/signin");
        }
    };

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
                <TextField
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    error={!!errors.fullName}
                    helperText={errors.fullName}
                    sx={{
                        marginBottom: "10px",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "#493628" },
                            "&:hover fieldset": { borderColor: "#493628" },
                            "&.Mui-focused fieldset": { borderColor: "#493628" },
                        },
                        "& .MuiInputLabel-root": { fontFamily: "Lexend, serif" },
                    }}
                />
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    sx={{
                        marginBottom: "10px",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "#493628" },
                            "&:hover fieldset": { borderColor: "#493628" },
                            "&.Mui-focused fieldset": { borderColor: "#493628" },
                        },
                        "& .MuiInputLabel-root": { fontFamily: "Lexend, serif" },
                    }}
                />
                <TextField
                    fullWidth
                    label="Mobile Number"
                    variant="outlined"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    error={!!errors.mobileNumber}
                    helperText={errors.mobileNumber}
                    sx={{
                        marginBottom: "10px",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "#493628" },
                            "&:hover fieldset": { borderColor: "#493628" },
                            "&.Mui-focused fieldset": { borderColor: "#493628" },
                        },
                        "& .MuiInputLabel-root": { fontFamily: "Lexend, serif" },
                    }}
                />
                <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={!!errors.password}
                    helperText={errors.password}
                    sx={{
                        marginBottom: "10px",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "#493628" },
                            "&:hover fieldset": { borderColor: "#493628" },
                            "&.Mui-focused fieldset": { borderColor: "#493628" },
                        },
                        "& .MuiInputLabel-root": { fontFamily: "Lexend, serif" },
                    }}
                />
                <TextField
                    fullWidth
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                    sx={{
                        marginBottom: "10px",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "#493628" },
                            "&:hover fieldset": { borderColor: "#493628" },
                            "&.Mui-focused fieldset": { borderColor: "#493628" },
                        },
                        "& .MuiInputLabel-root": { fontFamily: "Lexend, serif" },
                    }}
                />
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        fontFamily: "Lexend, serif",
                        background: "linear-gradient(to right, #D6C0B3, #493628)",
                        width: "100%",
                        marginTop: "10px",
                        "&:hover": { background: "#493628" },
                    }}
                >
                    SignUp
                </Button>
                <Typography
                    sx={{
                        marginTop: "10px",
                        marginBottom: "10px",
                        textAlign: "center",
                        fontFamily: "Lexend, serif",
                    }}
                >
                    Already have an account?{" "}
                    <Link
                        to="/signin"
                        style={{
                            textDecoration: "none",
                            fontFamily: "Lexend, serif",
                            cursor: "pointer",
                            color: "#493628",
                        }}
                    >
                        SignIn
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default SignUp;
