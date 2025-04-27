import React from "react";
import "./Home.css";
import { Box, Grid, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import HelpIcon from '@mui/icons-material/Help';
import EmailIcon from '@mui/icons-material/Email';
import img1 from "../assets/images/home1.jpg";
import img2 from "../assets/images/home2.jpg";
import img3 from "../assets/images/home3.jpg";
import Footer from "./Footer";

export default function Home() {

  return (
    <>
      <Box className="homepage">
        <Box className="hero">
          <Box className="title">
            <Typography variant="home_h1" component="h1">DogTown</Typography>
            <Typography variant="h2">Where shopping feels like a belly rub</Typography>
          </Box>

          <Box className="about">
            <Typography variant="body1">
              At DogTown, we believe every pup deserves to look good, feel great, and have fun.
              Our carefully curated selection includes high-quality dog apparel for all seasons, nutritious and delicious food and treats, and a wide variety of fun, durable toys to keep tails wagging.
            </Typography>
            <Typography variant="body1">
              Whether you're spoiling a tiny terrier or a big-hearted lab, we've got something special for every breed and personality.
              Because at DogTown, shopping for your furry friend should be as joyful as a walk in the park!
            </Typography>
          </Box>

          <Grid container spacing={4} className="text-container">
            <Grid size={{ sm: 12, md: 4 }} className="span-text">
              <Typography variant="h2" component="h3">High-quality foods</Typography>
            </Grid>
            <Grid size={{ sm: 12, md: 4 }} className="span-text">
              <Typography variant="h2" component="h3">Durable toys</Typography>
            </Grid>
            <Grid size={{ sm: 12, md: 4 }} className="span-text">
              <Typography variant="h2" component="h3">Trendy clothes</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box className="list-container">
          <Box className="img-row">
            <Grid container spacing={2} alignItems="center">
              <Grid size={{ sm: 12, md: 4 }}>
                <Box component="img" src={img1} alt="Happy dog enjoying the outdoors"></Box>
              </Grid>
              <Grid size={{ sm: 12, md: 4 }}>
                <Box component="img" src={img2} alt="Girl hugging a golden retriever"></Box>
              </Grid>
              <Grid size={{ sm: 12, md: 4 }}>
                <Box component="img" src={img3} alt="Cute black and white puppy"></Box>
              </Grid>
            </Grid>
          </Box>

          <Grid container spacing={{ sm: 2, md: 8, lg: 25 }} className="list-grid">
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h2" component="h3">Why Choose Us?</Typography>
              <List>
                <ListItem>
                  <Box className="list-item-wrap">
                    <ListItemIcon>
                      <CheckIcon fontSize="large" />
                    </ListItemIcon>
                    <Typography variant="body1">
                      High-quality and durable materials
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box className="list-item-wrap">
                    <ListItemIcon>
                      <CheckIcon fontSize="large" />
                    </ListItemIcon>
                    <Typography variant="body1">
                      Trendy designs for small and large pets
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box className="list-item-wrap">
                    <ListItemIcon>
                      <CheckIcon fontSize="large" />
                    </ListItemIcon>
                    <Typography variant="body1">
                      Customer service in Finnish and English
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box className="list-item-wrap">
                    <ListItemIcon>
                      <CheckIcon fontSize="large" />
                    </ListItemIcon>
                    <Typography variant="body1">
                      Fast shipping and easy returns
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }} className="contact-container">
              <Typography variant="h2" component="h3">Contact Us</Typography>
              <List>
                <ListItem>
                  <Box className="list-item-wrap">
                    <ListItemIcon>
                      <HelpIcon fontSize="large" />
                    </ListItemIcon>
                    <Typography variant="body1">
                      Need help? Send us a message!
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box className="list-item-wrap">
                    <ListItemIcon>
                      <EmailIcon fontSize="large" />
                    </ListItemIcon>
                    <Typography variant="body1">
                      <a href="/">support@dogtown.com</a>
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box className="list-item-wrap">
                    <ListItemIcon>
                      <FacebookIcon fontSize="large" />
                    </ListItemIcon>
                    <Typography variant="body1">
                      <a href="/">@dogtown</a>
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box className="list-item-wrap">
                    <ListItemIcon>
                      <InstagramIcon fontSize="large" />
                    </ListItemIcon>
                    <Typography variant="body1">
                      <a href="/">@dogtown</a>
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Grid>

          </Grid>
          <Footer />
        </Box>
      </Box>
    </>
  );
};
