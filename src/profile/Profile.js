import React from "react";
import { Box, Divider, Typography, Button } from "@mui/material";

const Profile = () => {
  return (
    <Box
      sx={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
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
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginTop: "20px",
            color: "#AB886D",
            fontFamily: "Lexend, serif",
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
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            gap: "20px",
          }}
        >
          {/* Label Column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              marginRight: "20px",
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: "Lexend, serif" }}>
              Full Name:
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: "Lexend, serif" }}>
              Mobile Number:
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: "Lexend, serif" }}>
              Email:
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: "Lexend, serif" }}>
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
            <Typography variant="h6" sx={{ fontFamily: "Lexend, serif" }}>
              John Doe
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: "Lexend, serif" }}>
              123-456-7890
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: "Lexend, serif" }}>
              john.doe@example.com
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: "Lexend, serif" }}>
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
            sx={{
              width: "400px",
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
            }}
          >
            Orders
          </Typography>
        </Box>

        <Box>
          <Box
            sx={{
              width: "700px",
              height: "250px",
              backgroundColor: "#E4E0E1",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: "20px",
                marginTop: "40px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "green", fontFamily: "Lexend, serif" }}
              >
                Delivered
              </Typography>
              <Typography sx={{ fontFamily: "Lexend, serif" }}>
                On Wed, 21 Aug
              </Typography>
            </Box>
            <Divider
              sx={{
                width: "90%",
                my: 1,
                backgroundColor: "#AB886D",
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: "30px"
              }}
            />
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
