import React, { useState } from "react";
import { Box, Typography, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { FaUserCircle, FaCartArrowDown, FaHeart } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleOpenProfile = () => {
        navigate("/profile");
        setDrawerOpen(false);
    };

    const handleOpenWishlist = () => {
        navigate("/wishlist");
        setDrawerOpen(false);
    };

    const handleOpenCart = () => {
        navigate("/cart");
        setDrawerOpen(false);
    };

    const handleHome = () => {
        navigate("/");
    };

    return (
        <Box
            sx={{
                height: "50px",
                display: "flex",
                alignItems: "center",
                paddingLeft: "20px",
                backgroundColor: "#AB886D",
                justifyContent: "space-between",
            }}
        >
            {/* Logo Section */}
            <Typography
                variant="h5"
                sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "Lexend, serif",
                    cursor: "pointer",
                }}
                onClick={handleHome}
            >
                Furniture
            </Typography>

            {/* Responsive Menu */}
            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", }} >
                <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: "white" }}>
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    sx={{ "& .MuiDrawer-paper": { backgroundColor: "#D6C0B3" } }}
                >
                    <List>
                        <ListItem button onClick={handleOpenProfile}>
                            <FaUserCircle style={{ marginRight: "10px" }} />
                            <ListItemText
                                primary="Profile"
                                primaryTypographyProps={{ fontFamily: "Lexend, serif" }}
                            />
                        </ListItem>
                        <ListItem button onClick={handleOpenWishlist}>
                            <FaHeart style={{ marginRight: "10px" }} />
                            <ListItemText
                                primary="Wishlist"
                                primaryTypographyProps={{ fontFamily: "Lexend, serif" }}
                            />
                        </ListItem>
                        <ListItem button onClick={handleOpenCart}>
                            <FaCartArrowDown style={{ marginRight: "10px" }} />
                            <ListItemText
                                primary="Cart"
                                primaryTypographyProps={{ fontFamily: "Lexend, serif" }}
                            />
                        </ListItem>
                    </List>
                </Drawer>

            </Box>

            {/* Desktop Icons */}
            <Box
                sx={{
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    marginRight: "50px",
                }}
            >
                <FaUserCircle
                    style={{
                        color: "white",
                        width: "20px",
                        height: "20px",
                        marginLeft: "40px",
                        cursor: "pointer",
                    }}
                    onClick={handleOpenProfile}
                />
                <FaHeart
                    style={{
                        color: "white",
                        width: "20px",
                        height: "20px",
                        marginLeft: "20px",
                        cursor: "pointer",
                    }}
                    onClick={handleOpenWishlist}
                />
                <FaCartArrowDown
                    style={{
                        color: "white",
                        width: "20px",
                        height: "20px",
                        marginLeft: "20px",
                        cursor: "pointer",
                    }}
                    onClick={handleOpenCart}
                />
            </Box>
        </Box>
    );
};

export default Header;