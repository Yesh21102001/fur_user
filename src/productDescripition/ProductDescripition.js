import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { FaHeart } from "react-icons/fa";

const ProductDescripition = () => {
  return (
    <Box>
      <Box sx={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px"
      }}>
        <Box sx={{ flexDirection: "column", marginLeft: "-60px", marginTop: "30px" }}>
          <Box sx={{ border: "1px solid #AB886D" }}>
            <img src="https://img.freepik.com/free-vector/classic-interior-design_1284-18964.jpg?t=st=1734762430~exp=1734766030~hmac=86cfd7c2e06ab137b4da0012469173da6dedfed9a45ab54729196c41ceaebe77&w=740"
              style={{
                width: "100px",
                height: "100px"
              }} />
          </Box>
          <Box sx={{ border: "1px solid #AB886D", marginTop: "10px", marginBottom: "10px" }} >
            <img src="https://img.freepik.com/free-vector/classic-interior-design_1284-18964.jpg?t=st=1734762430~exp=1734766030~hmac=86cfd7c2e06ab137b4da0012469173da6dedfed9a45ab54729196c41ceaebe77&w=740"
              style={{
                width: "100px",
                height: "100px"
              }} />
          </Box>
          <Box sx={{ border: "1px solid #AB886D" }}>
            <img src="https://img.freepik.com/free-vector/classic-interior-design_1284-18964.jpg?t=st=1734762430~exp=1734766030~hmac=86cfd7c2e06ab137b4da0012469173da6dedfed9a45ab54729196c41ceaebe77&w=740"
              style={{
                width: "100px",
                height: "100px"
              }} />
          </Box>
        </Box>

        <Box sx={{ position: "relative", maxWidth: "500px" }}>
          <FaHeart
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "black",
              width: "20px",
              height: "20px",
            }}
          />
          <img
            src="https://img.freepik.com/free-vector/red-leather-sofa-realistic-illustration_1284-12133.jpg?t=st=1734712220~exp=1734715820~hmac=4e46af069c4065a5ad32beef72a4067ef6fcd94d3b3cd1c139e1da81316627be&w=826"
            style={{
              maxWidth: "500px",
            }}
          />
        </Box>


        <Box sx={{
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "flex-start"
        }}>
          <Box>
            <Typography variant="h5" sx={{
              fontFamily: "Lexend, serif"
            }}>Product Name</Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{
              fontFamily: "Lexend, serif"
            }}>Cost</Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{
              fontFamily: "Lexend, serif"
            }}>MRP Incl. of all taxes</Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{
              fontFamily: "Lexend, serif"
            }}>Quantity</Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{
              fontFamily: "Lexend, serif"
            }}>Category</Typography>
          </Box>
          <Box>
            <Button variant="contained" sx={{
              fontFamily: "Lexend, serif",
              background: "#493628",
              transition: "background-color 0.3s ease",
              '&:hover': {
                background: "linear-gradient(to right, #D6C0B3, #493628)",
              }
            }}>Add To Cart</Button>
          </Box>
        </Box>
      </Box>


      <Divider sx={{ marginTop: "30px", color: "black", height: "10px" }} />

      <Box sx={{
        alignItems: "flex-start", display: "flex",
        flexDirection: "column",
        marginLeft: "20px"
      }}>
        <Typography variant="h6" sx={{ color: "#D6C0B3", fontFamily: "Lexend, serif" }}>Overview</Typography>
        <Typography sx={{ marginTop: "10px", color: "#493628", fontFamily: "Lexend, serif" }}>A sofa is a comfortable seating piece typically designed for multiple people, often cushioned and upholstered, used in living rooms or lounges.</Typography>
      </Box>

      <Divider sx={{ color: "black", height: "10px" }} />

      <Box sx={{
        alignItems: "flex-start", display: "flex",
        flexDirection: "column",
        marginLeft: "20px"
      }}>
        <Typography variant="h6" sx={{ color: "#D6C0B3", fontFamily: "Lexend, serif" }}>Dimension</Typography>
        <Typography sx={{ marginTop: "10px", color: "#493628", fontFamily: "Lexend, serif" }}>Queen - 1525 x 2000 mm.</Typography>
        <Typography sx={{ color: "#493628", fontFamily: "Lexend, serif" }}>King - 1828 x 2000 mm.</Typography>
      </Box>

      <Divider sx={{ color: "black", height: "10px" }} />

      <Box sx={{
        alignItems: "flex-start", display: "flex",
        flexDirection: "column",
        marginLeft: "20px"
      }}>
        <Typography variant="h6" sx={{ color: "#D6C0B3", fontFamily: "Lexend, serif" }}>Features</Typography>
        <Typography sx={{ marginTop: "10px", color: "#493628", fontFamily: "Lexend, serif" }}>Hand-tufted</Typography>
        <Typography sx={{ color: "#493628", fontFamily: "Lexend, serif" }}>No turn mattress</Typography>
        <Typography sx={{ color: "#493628", fontFamily: "Lexend, serif" }}>Quilted borders</Typography>
      </Box>

    </Box>
  );
};

export default ProductDescripition;
