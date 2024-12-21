import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const Products = () => {
    const productList = [
        {
            id: 1,
            name: "Chair",
            price: "1000/-",
            image: "https://img.freepik.com/free-photo/beautiful-shot-stylish-grey-chair-isolated-white-background_181624-25232.jpg?t=st=1734426411~exp=1734430011~hmac=d84e1d52ebf1f4fccce06a9ce2c2ea5bba2b97bb45f37411ada050885eab31e2&w=360",
        },
        {
            id: 2,
            name: "Table",
            price: "2000/-",
            image: "https://img.freepik.com/free-photo/wooden-table-isolated-white-background_181624-25382.jpg",
        },
        {
            id: 3,
            name: "Sofa",
            price: "5000/-",
            image: "https://img.freepik.com/free-photo/stylish-brown-sofa-isolated-white-background_181624-25262.jpg",
        },
    ];

    return (
        <Box sx={{ padding: "20px" }}>
            <Grid
                container
                spacing={4}
                sx={{
                    marginTop: "30px",
                    justifyContent: "center",
                }}
            >
                {productList.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Box
                            sx={{
                                maxWidth: "200px", 
                                margin: "0 auto", 
                                backgroundColor: "#D6C0B3",
                                borderRadius: "10px",
                                transition: "transform 0.3s, box-shadow 0.3s",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                                },
                                padding: "20px",
                                textAlign: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    height: "200px",
                                    width: "200px",
                                    borderRadius: "10px",
                                    overflow: "hidden",
                                    marginBottom: "10px",
                                }}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>
                            <Typography variant="h6" sx={{ fontFamily: "Lexend, serif" }}>
                                {product.name}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ fontFamily: "Lexend, serif" }}>
                                {product.price}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Products;
