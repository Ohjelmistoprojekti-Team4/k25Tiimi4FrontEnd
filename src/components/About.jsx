import React from 'react';
import './About.css';
import Footer from './Footer';
import { Grid, Box, Typography } from '@mui/material';

export default function About() {
    return (
        <>
            <Box className="about-page">
                <Typography variant="h1" sx={{ mb: 4 }}>About Us</Typography>

                <Grid container className="about-sections" spacing={8}>
                    <Grid size={{ sm: 12, md: 6 }} className="about-section">
                        <Typography variant="h2">Our Story</Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Since 1998, we've been passionate about creating stylish, durable clothing and fun toys for your furry family members. Our founders, Gilbert and Julia Johnson, turned their lifelong love for dogs into a mission: to make life better (and a little more stylish) for pups everywhere.
                        </Typography>
                        <Typography variant="body2">
                            What started as a small, family-run business has since grown into a beloved brand, known for its commitment to quality and innovation. Over the years, we've expanded our offerings and reached customers from 8 countries. We are still expanding and looking for new opportunities!
                        </Typography>
                    </Grid>
                    <Grid size={{ sm: 12, md: 6 }} className="about-section">
                        <Typography variant="h2">Our Mission</Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Our mission is simple: to offer high-quality, comfortable and safe products that bring joy to pets and their people.
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Every item we carry is carefully chosen with your dog's happiness in mind.
                            We are committed to setting the standard for excellence by combining innovative designs with practical functionality.
                        </Typography>
                        <Typography variant="body2">
                            Whether it's a cozy sweater for winter walks or a durable toy for endless playtime, we’re here to make every dog's life a little brighter — one wagging tail at a time.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container className="about-sections" spacing={8}>
                    <Grid size={{ sm: 12, md: 6 }} className="about-section">
                        <Typography variant="h2">Meet the Team</Typography>
                        <Typography variant="body2">
                            Our team is made up of dedicated pet lovers who know what it means to care for a dog. From our founders to our customer service specialists, every member of DogTown is committed to providing top-quality products and outstanding service to our customers.
                        </Typography>
                    </Grid>
                    <Grid size={{ sm: 12, md: 6 }} className="about-section">
                        <Typography variant="h2">Contact Us</Typography>
                        <Typography variant="body2">
                            Have questions or need assistance? We'd love to hear from you! Reach out to us anytime at <a href="/">support@dogtown.com</a> — we're here to help you and your four-legged friends. You can also find us from <a href="/">Facebook</a> and <a href="/">Instagram</a>.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    );
}