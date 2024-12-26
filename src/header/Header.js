import React, { useState } from "react";
import { Box, Typography, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem, Button } from "@mui/material";
import { FaUserCircle, FaCartArrowDown, FaHeart } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn }) => {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenProfile = () => {
        navigate("/profile");
        setDrawerOpen(false);
    };

    const handleLogin = () => {
        navigate("/signin");
    }

    const handleSignup = () => {
        navigate("/signup");
    }

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

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
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
            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
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
                        <ListItem button onClick={handleMenuClick}>
                            <FaUserCircle style={{ marginRight: "10px" }} />
                            <ListItemText
                                primary="Profile"
                                primaryTypographyProps={{ fontFamily: "Lexend, serif" }}
                            />
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleCloseMenu}
                                sx={{
                                    "& .MuiMenu-paper": {
                                        width: "300px",
                                    },
                                }}
                            >
                                <MenuItem onClick={handleOpenProfile}>Go to Profile</MenuItem>
                            </Menu>
                        </ListItem>
                        <ListItem button onClick={handleMenuClick}>
                            <FaHeart style={{ marginRight: "10px" }} />
                            <ListItemText
                                primary="Wishlist"
                                primaryTypographyProps={{ fontFamily: "Lexend, serif" }}
                            />
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleCloseMenu}
                                sx={{
                                    "& .MuiMenu-paper": {
                                        width: "300px",
                                    },
                                }}
                            >
                                <MenuItem onClick={handleOpenWishlist}>Go to Wishlist</MenuItem>
                            </Menu>
                        </ListItem>
                        <ListItem button onClick={handleMenuClick}>
                            <FaCartArrowDown style={{ marginRight: "10px" }} />
                            <ListItemText
                                primary="Cart"
                                primaryTypographyProps={{ fontFamily: "Lexend, serif" }}
                            />
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleCloseMenu}
                                sx={{
                                    "& .MuiMenu-paper": {
                                        width: "300px",
                                    },
                                }}
                            >
                                <MenuItem onClick={handleOpenCart}>Go to Cart</MenuItem>
                            </Menu>
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
                {isLoggedIn ? (
                    <>
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
                    </>
                ) : (
                    <>
                        <IconButton style={{ color: "white" }} onClick={handleMenuClick}>
                            <FaUserCircle />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleCloseMenu}
                            sx={{
                                "& .MuiMenu-paper": {
                                    width: "400px",
                                    right: "50px",
                                    transform: "translateX(-70%) translateY(10%)",
                                },
                            }}
                        >
                            <Box sx={{ padding: "20px", background: "#E4E0E1" }}>
                                <Typography
                                    variant="h5"
                                    sx={{ textAlign: "center", fontWeight: "600", fontSize: "22px", fontFamily: "Lexend, serif", color: "#AB886D" }}
                                >
                                    Your Account
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ textAlign: "center", marginBottom: "20px", fontFamily: "Lexend, serif", fontSize: "16px" }}
                                >
                                    Access account & manage your orders.
                                </Typography>

                                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                    <Box>
                                        <Button
                                            variant="contained"
                                            onClick={handleLogin}
                                            sx={{
                                                fontFamily: "Lexend, serif",
                                                background: "linear-gradient(to right, #D6C0B3, #493628)",
                                                width: "100%",
                                                marginTop: "10px",
                                                "&:hover": {
                                                    background: "#493628",
                                                },
                                            }}>LogIn</Button>
                                    </Box>
                                    <Box>
                                        <Button
                                            variant="contained"
                                            onClick={handleSignup}
                                            sx={{
                                                fontFamily: "Lexend, serif",
                                                background: "linear-gradient(to right, #D6C0B3, #493628)",
                                                width: "100%",
                                                marginTop: "10px",
                                                "&:hover": {
                                                    background: "#493628",
                                                },
                                            }}>SignUp</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Menu>
                        <IconButton style={{ color: "white" }} onClick={handleMenuClick}>
                            <FaHeart />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleCloseMenu}
                            sx={{
                                "& .MuiMenu-paper": {
                                    width: "400px",
                                    right: "50px",
                                    transform: "translateX(-70%) translateY(10%)",
                                },
                            }}
                        >
                            <Box sx={{ padding: "20px" }}>
                                <Typography
                                    variant="h5"
                                    sx={{ textAlign: "center", fontWeight: "600", fontSize: "26px", fontFamily: "Lexend, serif", color: "#AB886D" }}
                                >
                                    Your Account
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ textAlign: "center", marginBottom: "20px", fontFamily: "Lexend, serif", fontSize: "20px" }}
                                >
                                    Access account & manage your orders.
                                </Typography>

                                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                    <Box>
                                        <Button
                                            variant="contained"
                                            onClick={handleLogin}
                                            sx={{
                                                fontFamily: "Lexend, serif",
                                                background: "linear-gradient(to right, #D6C0B3, #493628)",
                                                width: "100%",
                                                marginTop: "10px",
                                                "&:hover": {
                                                    background: "#493628",
                                                },
                                            }}>LogIn</Button>
                                    </Box>
                                    <Box>
                                        <Button
                                            variant="contained"
                                            onClick={handleSignup}
                                            sx={{
                                                fontFamily: "Lexend, serif",
                                                background: "linear-gradient(to right, #D6C0B3, #493628)",
                                                width: "100%",
                                                marginTop: "10px",
                                                "&:hover": {
                                                    background: "#493628",
                                                },
                                            }}>SignUp</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Menu>
                        <IconButton style={{ color: "white" }} onClick={handleMenuClick}>
                            <FaCartArrowDown />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleCloseMenu}
                            sx={{
                                "& .MuiMenu-paper": {
                                    width: "400px",
                                    right: "50px",
                                    transform: "translateX(-70%) translateY(10%)",
                                },
                            }}
                        >
                            <Box sx={{ padding: "20px" }}>
                                <Typography
                                    variant="h5"
                                    sx={{ textAlign: "center", fontWeight: "600", fontSize: "26px", fontFamily: "Lexend, serif", color: "#AB886D" }}
                                >
                                    Your Account
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ textAlign: "center", marginBottom: "20px", fontFamily: "Lexend, serif", fontSize: "20px" }}
                                >
                                    Access account & manage your orders.
                                </Typography>

                                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                    <Box>
                                        <Button
                                            variant="contained"
                                            onClick={handleLogin}
                                            sx={{
                                                fontFamily: "Lexend, serif",
                                                background: "linear-gradient(to right, #D6C0B3, #493628)",
                                                width: "100%",
                                                marginTop: "10px",
                                                "&:hover": {
                                                    background: "#493628",
                                                },
                                            }}>LogIn</Button>
                                    </Box>
                                    <Box>
                                        <Button
                                            variant="contained"
                                            onClick={handleSignup}
                                            sx={{
                                                fontFamily: "Lexend, serif",
                                                background: "linear-gradient(to right, #D6C0B3, #493628)",
                                                width: "100%",
                                                marginTop: "10px",
                                                "&:hover": {
                                                    background: "#493628",
                                                },
                                            }}>SignUp</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Menu>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default Header;