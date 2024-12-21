import React from "react";
import { Box, Divider, Typography, Button } from "@mui/material";

const Profile = () => {
    return (
        <Box sx={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>

            {/* Profile Container */}
            <Box
                sx={{
                    border: "1px solid #AB886D",
                    height: "auto",
                    width: "800px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "20px",
                }}
            >
                {/* Profile Title */}
                <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: "20px" }}>
                    Profile Details
                </Typography>
                <Divider
                    sx={{
                        width: "90%",
                        my: 1,
                        backgroundColor: "#AB886D",
                    }}
                />

                {/* Profile Details */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center", 
                        alignItems: "center", 
                        marginTop: "30px",
                        gap: "20px",
                    }}
                >
                    {/* Label Column */}
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", marginRight: "20px" }}>
                        <Typography variant="h6">Full Name:</Typography>
                        <Typography variant="h6">Mobile Number:</Typography>
                        <Typography variant="h6">Email:</Typography>
                        <Typography variant="h6">Gender:</Typography>
                    </Box>

                    {/* Value Column */}
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        <Typography variant="h6">John Doe</Typography>
                        <Typography variant="h6">123-456-7890</Typography>
                        <Typography variant="h6">john.doe@example.com</Typography>
                        <Typography variant="h6">Male</Typography>
                    </Box>

                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Button variant="contained" sx={{ width: "400px" }}>Edit</Button>
                </Box>

                <Divider
                    sx={{
                        width: "90%",
                        my: 1,
                        backgroundColor: "#AB886D",
                        marginTop: "20px"
                    }}
                />
            </Box>


        </Box>
    );
};

export default Profile;
