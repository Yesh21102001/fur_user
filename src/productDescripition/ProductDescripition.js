import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const ProductDescripition = () => {
  return (
    <Box>
      <Box sx={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px"
        }}>
        <Box>
            <img src="https://img.freepik.com/free-vector/red-leather-sofa-realistic-illustration_1284-12133.jpg?t=st=1734712220~exp=1734715820~hmac=4e46af069c4065a5ad32beef72a4067ef6fcd94d3b3cd1c139e1da81316627be&w=826"
            style={{
                maxWidth: "600px"
            }}/>
        </Box>
        <Box>
            <Typography>Luxury Sofa</Typography>
            <Typography>50000/-</Typography>
            <Typography>MRP Incl. of all taxes</Typography>
        </Box>   
      </Box>
    </Box>
  );
};

export default ProductDescripition;
