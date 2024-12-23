import React from "react";
import { Box, Typography, Button, Grid, Divider, useMediaQuery } from "@mui/material";

const MyCart = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid
        container
        style={{
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
            style={{
              fontFamily: "Lexend, serif",
              fontWeight: "bold",
              marginLeft: "20px",
              color: "#AB886D",
            }}
          >
            My Cart
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-around",
          marginTop: "30px",
          marginBottom: "30px",
          gap: isMobile ? "20px" : "0",
        }}
      >
        <Box
          sx={{
            height: "auto",
            width: isMobile ? "90%" : "700px",
            borderRadius: "10px",
            backgroundColor: "#E4E0E1",
            padding: "20px",
            alignItems: isMobile ? "flex-start" : "flex-start",
            textAlign: isMobile ? "center" : "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-around",
              alignItems: isMobile ? "center" : "flex-start",
            }}
          >
            <Box>
              <img
                src="https://img.freepik.com/free-photo/scandinavian-vintage-wood-cabinet-with-chair-by-dark-blue-wall_53876-98164.jpg?t=st=1734773331~exp=1734776931~hmac=364458b1c6fb12bd4656d78b4b5775578706c67716898f67e6e4c34e50af5c57&w=740"
                style={{
                  height: "200px",
                  width: "200px",
                  borderRadius: "5px",
                }}
                alt="Product"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: isMobile ? "center" : "flex-start",
                textAlign: isMobile ? "center" : "left",
                marginTop: isMobile ? "10px" : "30px",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontFamily: "Lexend, serif", fontWeight: "bold" }}
              >
                Name
              </Typography>
              <Typography variant="h6" sx={{ fontFamily: "Lexend, serif" }}>
                Cost
              </Typography>
              <Typography sx={{ color: "green", fontFamily: "Lexend, serif" }}>
                InStock
              </Typography>
              <Typography variant="h6" sx={{ fontFamily: "Lexend, serif" }}>
                Category Name
              </Typography>
              <Typography variant="h6" sx={{ fontFamily: "Lexend, serif" }}>
                Quantity
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ marginTop: "10px" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: isMobile ? "center" : "space-around",
              flexDirection: isMobile ? "column" : "row",
              gap: "10px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                fontFamily: "Lexend, serif",
                background: "linear-gradient(to right, #D6C0B3, #493628)",
                width: "200px",
                marginTop: "10px",
                "&:hover": {
                  background: "#493628",
                },
              }}
            >
              Add To Wishlist
            </Button>
            <Button
              variant="contained"
              sx={{
                fontFamily: "Lexend, serif",
                background: "linear-gradient(to right, #D6C0B3, #493628)",
                width: "200px",
                marginTop: "10px",
                "&:hover": {
                  background: "#493628",
                },
              }}
            >
              Remove
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            height: "auto",
            width: isMobile ? "90%" : "300px",
            borderRadius: "5px",
            backgroundColor: "#E4E0E1",
            padding: "20px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Lexend, serif",
              color: "#493628",
              textAlign: isMobile ? "center" : "center",
            }}
          >
            Order Summary
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: isMobile ? "flex-start" : "flex-start",
              textAlign: isMobile ? "left" : "left",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Lexend, serif",
                color: "#AB886D",
              }}
            >
              Total Products
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Lexend, serif",
                color: "#AB886D",
              }}
            >
              Total Cost
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              fontFamily: "Lexend, serif",
              background: "#493628",
              width: "100%",
              marginTop: "10px",
              "&:hover": {
                background: "linear-gradient(to right, #D6C0B3, #493628)",
              },
            }}
          >
            Proceed To Pay
          </Button>
          <Box
            sx={{
              marginTop: "10px",
              textAlign: isMobile ? "left" : "left",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontFamily: "Lexend, serif", color: "#AB886D" }}
            >
              Any Queries?
            </Typography>
            <Typography sx={{ fontFamily: "Lexend, serif", color: "#AB886D" }}>
              Please Contact us at 1234567890
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MyCart;
