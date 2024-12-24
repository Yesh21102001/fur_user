import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Typography, Divider, Button, Grid } from '@mui/material';
import Banner from "../images/Yellow And Cream Minimalist Furniture Sale Banner.png";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleProducts = () => {
        navigate("/products")
    }

    return (
        <Box>
            {/* Home */}
            <Box
                sx={{
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
                role="group"
                aria-label="1 / 3"
                data-swiper-slide-index="0"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <Box
                        component="img"
                        src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-1-slider-img-05.jpg"
                        alt="Timeless Elegance"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        mt: 2,
                        color: "#fff",
                        marginTop: "-30px"
                    }}
                >
                    <Typography variant="h6" component="div" sx={{
                        color: "#AB886D",
                        fontWeight: "bold",
                        fontFamily: "Poly, serif",
                    }}>
                        TIMELESS ELEGANCE
                    </Typography>
                    <Typography variant="h5" component="div" sx={{
                        my: 1,
                        fontFamily: "Lexend, serif",
                    }}>
                        Discover Furniture's For Living
                    </Typography>

                    <Button
                        variant="contained"
                        color="primary"
                        href="#"
                        sx={{
                            cursor: "pointer",
                            padding: "0.9em 1.4em",
                            width: "150px",
                            height: "50px",
                            fontSize: "1rem",
                            fontWeight: 500,
                            transition: "0.8s",
                            backgroundSize: "280% auto",
                            color: "black",
                            backgroundImage: `linear-gradient(
                                    325deg,
                                  #AB886D 0%,
                                  #493628 55%,
                                  #AB886D 90%
                                )`,

                            border: "none",
                            borderRadius: "0.5em",
                            color: "#E4E0E1",
                            boxShadow: `
                                0px 0px 20px rgb(214, 192, 179),
                                0px 5px 5px -1px rgb(171, 136, 109),
                                inset 4px 4px 8px rgb(228, 224, 225),
                                inset -4px -4px 8px rgb(73, 54, 40),
                            `,
                            '&:hover': {
                                backgroundPosition: "right top",
                                backgroundImage: `linear-gradient(
                                    325deg,
                                  #D6C0B3 0%,
                                  #AB886D 55%,
                                  #D6C0B3 90%
                                )`,
                            },
                            '&:focus, &:focus-visible, &:active': {
                                outline: "none",
                                boxShadow: `
                                    0 0 0 3px #E4E0E1,
                                    0 0 0 6px #D6C0B3
                                    `,
                            },
                        }}
                        onClick={handleProducts}
                    >
                        Shop Now
                    </Button>
                </Box>
            </Box>

            {/* Our Collections */}
            <Box>
                <Box sx={{ marginTop: "50px" }}>
                    <Typography variant="h4" sx={{
                        color: "#493628", fontWeight: "bold", fontFamily: "Poly, serif",
                        transition: "background-color 0.3s ease",
                        '&:hover': {
                            color: "#AB886D",
                        }
                    }}>Our Collections</Typography>
                </Box>
                <Grid container spacing={2} sx={{ marginTop: "20px", marginBottom: "20px" }}>
                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <Box
                            sx={{
                                height: "200px",
                                width: "100%",
                                borderRadius: "10px",
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: "background-color 0.3s ease",
                                '&:hover': {
                                    backgroundColor: "#AB886D",
                                    width: "80%",
                                }
                            }}
                        >
                            <img
                                src="https://img.freepik.com/free-photo/contemporary-living-room-interior-design-with-white-sofa_53876-126774.jpg?t=st=1734330779~exp=1734334379~hmac=83ef4721b918b1cc3b9f4714f59a2008322e569ffe500b1301efd15c908e57f8&w=740"
                                alt="Living Room"
                                style={{ maxWidth: "140px", objectFit: "cover", borderRadius: "8px" }}
                            />
                            <Typography variant="h6" sx={{ marginTop: "8px", fontFamily: "Lexend, serif", fontSize: "18px" }}>Living</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <Box
                            sx={{
                                height: "200px",
                                width: "100%",
                                borderRadius: "10px",
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: "background-color 0.3s ease",
                                '&:hover': {
                                    backgroundColor: "#AB886D",
                                }
                            }}
                        >
                            <img
                                src="https://img.freepik.com/free-photo/contemporary-living-room-interior-design-with-white-sofa_53876-126774.jpg?t=st=1734330779~exp=1734334379~hmac=83ef4721b918b1cc3b9f4714f59a2008322e569ffe500b1301efd15c908e57f8&w=740"
                                alt="Bedroom"
                                style={{ maxWidth: "140px", objectFit: "cover", borderRadius: "8px" }}
                            />
                            <Typography variant="h6" sx={{ marginTop: "8px", fontFamily: "Lexend, serif", fontSize: "18px" }}>Bedroom</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <Box
                            sx={{
                                height: "200px",
                                width: "100%",
                                borderRadius: "10px",
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: "background-color 0.3s ease",
                                '&:hover': {
                                    backgroundColor: "#AB886D",
                                }
                            }}
                        >
                            <img
                                src="https://img.freepik.com/free-photo/contemporary-living-room-interior-design-with-white-sofa_53876-126774.jpg?t=st=1734330779~exp=1734334379~hmac=83ef4721b918b1cc3b9f4714f59a2008322e569ffe500b1301efd15c908e57f8&w=740"
                                alt="Dinning"
                                style={{ maxWidth: "140px", objectFit: "cover", borderRadius: "8px" }}
                            />
                            <Typography variant="h6" sx={{ marginTop: "8px", fontFamily: "Lexend, serif", fontSize: "18px" }}>Dinning</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <Box
                            sx={{
                                height: "200px",
                                width: "100%",
                                borderRadius: "10px",
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: "background-color 0.3s ease",
                                '&:hover': {
                                    backgroundColor: "#AB886D",
                                }
                            }}
                        >
                            <img
                                src="https://img.freepik.com/free-photo/contemporary-living-room-interior-design-with-white-sofa_53876-126774.jpg?t=st=1734330779~exp=1734334379~hmac=83ef4721b918b1cc3b9f4714f59a2008322e569ffe500b1301efd15c908e57f8&w=740"
                                alt="Study & Office"
                                style={{ maxWidth: "140px", objectFit: "cover", borderRadius: "8px" }}
                            />
                            <Typography variant="h6" sx={{ marginTop: "8px", fontFamily: "Lexend, serif", fontSize: "18px" }}>Study & Office</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <Box
                            sx={{
                                height: "200px",
                                width: "100%",
                                borderRadius: "10px",
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: "background-color 0.3s ease",
                                '&:hover': {
                                    backgroundColor: "#AB886D",
                                }
                            }}
                        >
                            <img
                                src="https://img.freepik.com/free-photo/contemporary-living-room-interior-design-with-white-sofa_53876-126774.jpg?t=st=1734330779~exp=1734334379~hmac=83ef4721b918b1cc3b9f4714f59a2008322e569ffe500b1301efd15c908e57f8&w=740"
                                alt="Chair"
                                style={{ maxWidth: "140px", objectFit: "cover", borderRadius: "8px" }}
                            />
                            <Typography variant="h6" sx={{ marginTop: "8px", fontFamily: "Lexend, serif", fontSize: "18px" }}>Chair</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={2}>
                        <Box
                            sx={{
                                height: "200px",
                                width: "100%",
                                borderRadius: "10px",
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: "background-color 0.3s ease",
                                '&:hover': {
                                    backgroundColor: "#AB886D",
                                }
                            }}
                        >
                            <img
                                src="https://img.freepik.com/free-photo/contemporary-living-room-interior-design-with-white-sofa_53876-126774.jpg?t=st=1734330779~exp=1734334379~hmac=83ef4721b918b1cc3b9f4714f59a2008322e569ffe500b1301efd15c908e57f8&w=740"
                                alt="Outdoor Furniture"
                                style={{ maxWidth: "140px", objectFit: "cover", borderRadius: "8px" }}
                            />
                            <Typography variant="h6" sx={{ marginTop: "8px", fontFamily: "Lexend, serif", fontSize: "18px" }}>Outdoor Furniture</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* furniture */}
            <Grid container spacing={2}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexDirection: { xs: "column", sm: "row" },
                        marginTop: "30px",
                    }}
                >
                    {/* Left Box (First Section) */}
                    <Box
                        sx={{
                            textAlign: "center",
                            padding: "20px",
                            flex: 1,
                            marginLeft: "50px"
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{
                                fontSize: "1.2rem",
                                color: "#493628",
                                fontWeight: "500",
                                mb: 1,
                                display: "flex",
                                justifyContent: "flex-start",
                                fontFamily: "Poly, serif",
                            }}
                        >
                            Home Decor Hub
                        </Typography>
                        <Typography
                            variant="h2"
                            component="div"
                            sx={{
                                fontWeight: "bold",
                                color: "#333",
                                mb: 2,
                                fontSize: { xs: "30px", sm: "40px" }, // Adjust font size for smaller screens
                                display: "flex",
                                justifyContent: "flex-start",
                                fontFamily: "Poly, serif",
                                transition: "background-color 0.3s ease",
                                '&:hover': {
                                    color: "#AB886D",
                                }
                            }}
                        >
                            Exceptional Furniture's For <br /> Indoor & Outdoor
                        </Typography>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{
                                fontSize: "1rem",
                                color: "#AB886D",
                                lineHeight: "1.5",
                                maxWidth: "600px",
                                margin: "0 auto",
                                fontFamily: "Lexend, serif",
                            }}
                        >
                            "Experience exceptional furniture designed to enhance both indoor and outdoor spaces with style and comfort. Our collection features durable and elegant pieces, crafted to withstand the elements while adding charm to any setting. Transform your living areas with furniture that combines beauty and functionality effortlessly."
                        </Typography>
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "550px", // Maximum width for the image box
                                overflow: "hidden",
                                display: "flex",
                                justifyContent: "center",
                                borderRadius: "10px",
                                alignItems: "center",
                                marginTop: "10px",
                            }}
                        >
                            <img
                                src="https://img.freepik.com/free-photo/sofa-green-living-room-with-copy-space_43614-905.jpg?t=st=1734342548~exp=1734346148~hmac=b930744fdf8cb9a68e1a1e868eda049981a76425dbbd9a119951831220ceec9a&w=740"
                                alt="Sofa"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </Box>
                    </Box>

                    {/* Right Box (Second Section) */}
                    <Box
                        sx={{
                            textAlign: "center",
                            padding: "20px",
                            flex: 1,
                            marginLeft: "80px"
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "600px", // Maximum width for the image box
                                overflow: "hidden",
                                display: "flex",
                                justifyContent: "center",
                                borderRadius: "10px",
                                alignItems: "center",
                                marginTop: "10px",
                            }}
                        >
                            <img
                                src="https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?t=st=1734341507~exp=1734345107~hmac=9f20bb3b65c05b76eb8168401acc435658953817a242db54db90130bf32f9ea1&w=740"
                                alt="Sofa"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </Box>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{
                                fontWeight: "bold",
                                color: "#333",
                                mb: 2,
                                display: "flex",
                                justifyContent: "flex-start",
                                fontFamily: "Poly, serif",
                                marginTop: "10px",
                                marginLeft: { xs: "0", sm: "50px" },
                                transition: "background-color 0.3s ease",
                                '&:hover': {
                                    color: "#AB886D",
                                }
                            }}
                        >
                            Discovery Endless Designs
                        </Typography>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{
                                fontSize: "1rem",
                                color: "#AB886D",
                                lineHeight: "1.5",
                                maxWidth: "600px",
                                marginLeft: { xs: "0", sm: "30px" }, // Adjust margins for smaller screens
                                fontFamily: "Lexend, serif",
                            }}
                        >
                            "Discover Endless Designs" brings a world of timeless elegance and modern aesthetics to your furniture needs. Our curated collection combines style, comfort, and quality to create spaces that truly inspire. From sleek contemporary pieces to classic masterpieces, we cater to every taste, making your dream home a reality.
                        </Typography>
                    </Box>
                </Box>
            </Grid>

            {/* Banner */}
            <Box sx={{ marginTop: "30px", marginBottom: "30px" }}>
                <img src={Banner} alt="Banner" style={{ width: "100%", height: "auto", maxWidth: "100%" }} />
            </Box>

            {/* Assured */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    marginTop: "50px",
                    backgroundColor: "#D6C0B3",
                    color: "white",
                    alignItems: "center",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: { xs: "10px", sm: "0" },
                        flexDirection: { xs: "column", sm: "row" }, // Stack vertically on mobile
                        justifyContent: "center", // Center items on mobile
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: "Lexend, serif",
                            transition: "background-color 0.3s ease",
                            color: "#493628",
                            textAlign: { xs: "center", sm: "left" }, // Center text on mobile
                        }}
                    >
                        Assured Quality
                    </Typography>
                    <Divider
                        orientation="vertical"
                        sx={{ height: 30, marginX: 2, backgroundColor: "white", display: { xs: "none", sm: "block" } }} // Hide divider on mobile
                    />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: { xs: "10px", sm: "0" },
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: "Lexend, serif",
                            transition: "background-color 0.3s ease",
                            color: "#493628",
                            textAlign: { xs: "center", sm: "left" },
                        }}
                    >
                        1 Year Warranty
                    </Typography>
                    <Divider
                        orientation="vertical"
                        sx={{ height: 30, marginX: 2, backgroundColor: "white", display: { xs: "none", sm: "block" } }}
                    />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: { xs: "10px", sm: "0" },
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: "Lexend, serif",
                            transition: "background-color 0.3s ease",
                            color: "#493628",
                            textAlign: { xs: "center", sm: "left" },
                        }}
                    >
                        Delivery Available
                    </Typography>
                    <Divider
                        orientation="vertical"
                        sx={{ height: 30, marginX: 2, backgroundColor: "white", display: { xs: "none", sm: "block" } }}
                    />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: { xs: "10px", sm: "0" },
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: "Lexend, serif",
                            transition: "background-color 0.3s ease",
                            color: "#493628",
                            textAlign: { xs: "center", sm: "left" },
                        }}
                    >
                        Assembly Within 48hours
                    </Typography>
                    <Divider
                        orientation="vertical"
                        sx={{ height: 40, marginX: 2, backgroundColor: "white", display: { xs: "none", sm: "block" } }}
                    />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: { xs: "10px", sm: "0" },
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: "Lexend, serif",
                            transition: "background-color 0.3s ease",
                            color: "#493628",
                            textAlign: { xs: "center", sm: "left" },
                        }}
                    >
                        Your Dream We Design
                    </Typography>
                </Box>
            </Box>

        </Box>
    );
};

export default Home;