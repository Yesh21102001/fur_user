import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem } from '@mui/material';
import { FaUserCircle, FaCartArrowDown, FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const MenuDropdown = ({ label, options }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleMouseLeave = () => {
        setOpen(false);
    };

    return (
        <Box
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{ display: "inline-block", marginLeft: "20px" }}
        >
            <Typography variant="h6" sx={{ color: "white", fontFamily: "Lexend, serif" }}>
                {label}
            </Typography>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMouseLeave}
                MenuListProps={{
                    onMouseLeave: handleMouseLeave,
                }}
            >
                {options.map((option, index) => (
                    <MenuItem key={index}>{option}</MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

const Header = () => {
    const navigate = useNavigate();

    const handleOpenProfile = () => {
        navigate("/profile");
    }

    const handleOpenWishlist = () => {
        navigate("/wishlist");
    }

    const handleHome = () => {
        navigate("/");
    }

    return (
        <Box sx={{
            height: "50px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
            backgroundColor: "#AB886D",
            justifyContent: "space-between"
        }}>

            <Box>
                <Typography
                    variant="h5"
                    sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontFamily: "Lexend, serif"
                    }}
                    onClick={handleHome}
                >
                    Furniture
                </Typography>
            </Box>

            <Box sx={{
                marginRight: "50px"
            }}>
                <FaUserCircle style={{ color: "white", width: "20px", height: "20px", marginLeft: "40px" }} onClick={handleOpenProfile} />
                <FaHeart style={{ color: "white", width: "20px", height: "20px", marginLeft: "20px" }} onClick={handleOpenWishlist} />
                <FaCartArrowDown style={{ color: "white", width: "20px", height: "20px", marginLeft: "20px" }} />
            </Box>
        </Box>
    );
};

export default Header;