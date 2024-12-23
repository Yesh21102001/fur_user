import React from "react";
import { Box, Divider, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/editprofile");
  }

  return (
    <Box
      sx={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: isMobile ? "20px" : "0",
      }}
    >
      {/* Profile Container */}
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
          padding: isMobile ? "10px" : "20px",
        }}
      >
        {/* Profile Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginTop: "20px",
            color: "#AB886D",
            fontFamily: "Lexend, serif",
            fontSize: isMobile ? "18px" : "inherit",
          }}
        >
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
            flexDirection: isMobile ? "row" : "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "30px",
            gap: isMobile ? "10px" : "20px",
          }}
        >
          {/* Label Column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "flex-end" : "flex-end",
              marginRight: isMobile ? "0" : "20px",
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: "Lexend, serif", fontSize: isMobile ? "16px" : "20px" }}>
              Full Name:
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: "Lexend, serif", fontSize: isMobile ? "16px" : "20px" }}>
              Mobile Number:
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: "Lexend, serif", fontSize: isMobile ? "16px" : "20px" }}>
              Email:
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: "Lexend, serif", fontSize: isMobile ? "16px" : "20px" }}>
              Gender:
            </Typography>
          </Box>

          {/* Value Column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: "Lexend, serif", fontSize: isMobile ? "16px" : "20px" }}>
              John Doe
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: "Lexend, serif", fontSize: isMobile ? "16px" : "20px" }}>
              123-456-7890
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: "Lexend, serif", fontSize: isMobile ? "16px" : "20px" }}>
              john.doe@example.com
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: "Lexend, serif", fontSize: isMobile ? "16px" : "20px" }}>
              Male
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <Button
            variant="contained"
            onClick={handleEdit}
            sx={{
              width: isMobile ? "300px" : "400px",
              fontFamily: "Lexend, serif",
              background: "linear-gradient(to right, #D6C0B3, #493628)",
              transition: "background-color 0.3s ease",
              "&:hover": {
                background: "#493628",
              },
            }}
          >
            Edit
          </Button>
        </Box>

        <Divider
          sx={{
            width: "90%",
            my: 1,
            backgroundColor: "#AB886D",
            marginTop: "20px",
          }}
        />

        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              marginTop: "20px",
              color: "#AB886D",
              fontFamily: "Lexend, serif",
              fontSize: isMobile ? "18px" : "inherit",
            }}
          >
            Orders
          </Typography>
        </Box>

        <Box>
          <Box
            sx={{
              width: isMobile ? "300px" : "400px",
              height: "250px",
              backgroundColor: "#E4E0E1",
              borderRadius: "5px",
              marginTop: "10px",
              marginLeft: "20px",
              marginRight: "20px"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: "40px",
                paddingTop: "10px"
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "green", fontFamily: "Lexend, serif", fontSize: isMobile ? "16px" : "20px" }}
              >
                Delivered
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontFamily: "Lexend, serif", fontSize: isMobile ? "16px" : "20px" }}>
                On Wed, 21 Aug
              </Typography>
            </Box>
            <Divider
              sx={{
                width: "80%",
                my: 1,
                backgroundColor: "#AB886D",
                margin: "20px auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            />

            <Box sx={{ padding: "10px" }}>
              <Box sx={{ display: "flex", justifyContent: "space-around", padding: "10px", marginTop: "-10px" }}>
                <Box>
                  <img
                    src="https://img.freepik.com/free-photo/scandinavian-vintage-wood-cabinet-with-chair-by-dark-blue-wall_53876-98164.jpg?t=st=1734773331~exp=1734776931~hmac=364458b1c6fb12bd4656d78b4b5775578706c67716898f67e6e4c34e50af5c57&w=740"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "5px",
                    }}
                    alt="Product"
                  />
                </Box>
                <Box sx={{marginTop: "10px"}}>
                  <Typography variant="h6"
                    sx={{ fontFamily: "Lexend, serif", fontSize: isMobile ? "16px" : "20px", display: "flex", justifyContent: "flex-start" }}>Category Name</Typography>
                  <Typography variant="h6"
                    sx={{ fontFamily: "Lexend, serif", fontSize: isMobile ? "16px" : "20px", display: "flex", justifyContent: "flex-start" }}>Product Name</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider
          sx={{
            width: "90%",
            my: 1,
            backgroundColor: "#AB886D",
            marginTop: "20px",
          }}
        />
      </Box>
    </Box>
  );
};

export default Profile;