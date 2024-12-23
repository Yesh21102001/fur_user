import React, { useState } from "react";
import {
    Box,
    Typography,
    Grid,
    useMediaQuery,
    useTheme,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [gender, setGender] = useState(""); 
    const navigate = useNavigate();
    const [address, setAddress] = useState({
        street: "",
        city: "",
        state: "",
        zipCode: ""
    }); 

    const handleGenderChange = (event) => {
        setGender(event.target.value); 
    };

    const handleAddressChange = (event) => {
        const { name, value } = event.target;
        setAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }));
    };

    const handleEdit = () => {
        navigate("/profile");
      }

    return (
        <Box sx={{ padding: "20px" }}>
            <Grid
                container
                sx={{
                    backgroundColor: "#E4E0E1",
                    height: "60px",
                    display: "flex",
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Grid item>
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: "Lexend, serif",
                            fontWeight: "bold",
                            marginLeft: "20px",
                            color: "#AB886D",
                        }}
                    >
                        Edit Profile
                    </Typography>
                </Grid>
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box
                    sx={{
                        border: "1px solid #AB886D",
                        height: "auto",
                        width: isMobile ? "100%" : "800px",
                        marginTop: "20px",
                        marginBottom: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        padding: isMobile ? "10px" : "20px",
                        justifyContent: "center",
                    }}
                >
                    <Box sx={{ width: "100%", marginBottom: "15px" }}>
                        <TextField
                            id="number"
                            label="Mobile Number"
                            variant="outlined"
                            fullWidth
                            sx={{ paddingBottom: "20px" }}
                        />
                        <TextField
                            id="fullName"
                            label="Full Name"
                            variant="outlined"
                            fullWidth
                            sx={{ paddingBottom: "20px" }}
                        />
                        <TextField
                            id="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            sx={{ paddingBottom: "20px" }}
                        />

                        <FormControl fullWidth sx={{ paddingBottom: "20px" }}>
                            <InputLabel id="gender-label">Gender</InputLabel>
                            <Select
                                labelId="gender-label"
                                id="gender"
                                value={gender}
                                onChange={handleGenderChange}
                                label="Gender"
                            >
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            id="street"
                            label="Street"
                            variant="outlined"
                            fullWidth
                            name="street"
                            value={address.street}
                            onChange={handleAddressChange}
                            sx={{ paddingBottom: "20px" }}
                        />
                        <TextField
                            id="city"
                            label="City"
                            variant="outlined"
                            fullWidth
                            name="city"
                            value={address.city}
                            onChange={handleAddressChange}
                            sx={{ paddingBottom: "20px" }}
                        />
                        <TextField
                            id="state"
                            label="State"
                            variant="outlined"
                            fullWidth
                            name="state"
                            value={address.state}
                            onChange={handleAddressChange}
                            sx={{ paddingBottom: "20px" }}
                        />
                        <TextField
                            id="zipCode"
                            label="Zip Code"
                            variant="outlined"
                            fullWidth
                            name="zipCode"
                            value={address.zipCode}
                            onChange={handleAddressChange}
                            sx={{ paddingBottom: "20px" }}
                        />
                        <Box>
                            <Button
                                variant="contained"
                                onClick={handleEdit}
                                sx={{
                                    width: isMobile ? "90%" : "400px",
                                    fontFamily: "Lexend, serif",
                                    background: "linear-gradient(to right, #D6C0B3, #493628)",
                                    transition: "background-color 0.3s ease",
                                    "&:hover": {
                                        background: "#493628",
                                    },
                                    padding: isMobile ? "10px" : "15px",
                                }}
                            >
                                Edit Profile
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>


        </Box>
    );
};

export default EditProfile;