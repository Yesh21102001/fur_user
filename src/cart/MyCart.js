import React from "react";
import { Box, Typography, Button, MenuItem, Divider } from '@mui/material';

const MyCart = () => {
    return (
        <Box>
            <Box>
                <Typography variant="h6" sx={{ marginTop: "30px", fontFamily: "Lexend, serif" }}>My Cart</Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: "30px", marginBottom: "30px" }}>

                <Box sx={{
                    height: "300px",
                    width: "700px",
                    borderRadius: "10px",
                    backgroundColor: "#E4E0E1",

                }}>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-around"
                    }}>
                        <Box>
                            <img src="https://img.freepik.com/free-photo/scandinavian-vintage-wood-cabinet-with-chair-by-dark-blue-wall_53876-98164.jpg?t=st=1734773331~exp=1734776931~hmac=364458b1c6fb12bd4656d78b4b5775578706c67716898f67e6e4c34e50af5c57&w=740"
                                style={{
                                    height: "200px",
                                    width: "200px",
                                    marginTop: "20px",
                                    borderRadius: "5px",
                                    marginLeft: "-50px"
                                }} />
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            marginTop: "20px",
                            marginLeft: "-50px"
                        }}>
                            <Box>
                                <Typography variant="h6">Name</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h6">Cost</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ color: "green" }}>InStock</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h6" >Category Name</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h6" >Quantity</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Divider sx={{ marginTop: "10px" }} />

                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Box>
                            <Button
                                variant="contained"
                                sx={{
                                    fontFamily: "Lexend, serif",
                                    background: "linear-gradient(to right, #D6C0B3, #493628)",
                                    transition: "background-color 0.3s ease",
                                    width: "200px",
                                    marginTop: "10px",
                                    '&:hover': {
                                        background: "#493628",
                                    },
                                }}
                            >
                                Add To Wishlist
                            </Button>
                        </Box>
                        <Box>
                            <Button
                                variant="contained"
                                sx={{
                                    fontFamily: "Lexend, serif",
                                    background: "linear-gradient(to right, #D6C0B3, #493628)",
                                    width: "200px",
                                    transition: "background-color 0.3s ease",
                                    marginTop: "10px",
                                    '&:hover': {
                                        background: "#493628",
                                    },
                                }}
                            >
                                Remove
                            </Button>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    height: "300px",
                    width: "300px",
                    borderRadius: "5px",
                    backgroundColor: "#E4E0E1",
                }}>
                    <Box>
                        <Typography variant="h6"
                            sx={{
                                marginTop: "20px",
                                fontFamily: "Lexend, serif",
                                color: "#493628"
                            }}>Order Summary</Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        alignItems: "flex-start"
                    }}>
                        <Box>
                            <Typography variant="h6" sx={{ marginTop: "20px", fontFamily: "Lexend, serif", marginLeft: "20px", color: "#AB886D" }}>Total Products</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" sx={{ fontFamily: "Lexend, serif", marginLeft: "20px", color: "#AB886D" }}>Total Cost</Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Button
                            variant="contained"
                            sx={{
                                fontFamily: "Lexend, serif",
                                background: "#493628",
                                transition: "background-color 0.3s ease",
                                marginTop: "10px",
                                '&:hover': {
                                    background: "linear-gradient(to right, #D6C0B3, #493628)",
                                },
                            }}
                        >
                            Proceed To Pay
                        </Button>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        marginTop: "10px",
                        marginLeft: "10px"
                    }}>
                        <Typography variant="h6" sx={{ fontFamily: "Lexend, serif", color: "#AB886D" }}>Any Queries?</Typography>
                        <Typography sx={{ fontFamily: "Lexend, serif", color: "#AB886D" }}>Please Contact us to 1234567890</Typography>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default MyCart;