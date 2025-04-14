import React from 'react';

export default function About() {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", color: "#333" }}>
            <h1 style={{ textAlign: "center", color: "#5C4033" }}>About Us</h1>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                <section style={{ margin: "20px", padding: "20px", backgroundColor: "#d2b48c", borderRadius: "10px", width: "45%", border: "2px solid #5C4033" }}>
                    <h2 style={{ color: "#5C4033" }}>Our Story</h2>
                    <p>Welcome to AnimalTrend, your one-stop shop for all things dog-related! We specialize in providing high-quality dog clothes and toys to keep your furry friends happy and stylish.</p>
                    <p>Founded in 1998, AnimalTrend was born out of a love for dogs and a passion for creating unique and durable products for them. Our founders, Gilbert Johnson and Julia Johnson, have always been avid dog lovers and wanted to share their enthusiasm with the world.</p>
                </section>
                <section style={{ margin: "20px", padding: "20px", backgroundColor: "#d2b48c", borderRadius: "10px", width: "45%", border: "2px solid #5C4033" }}>
                    <h2 style={{ color: "#5C4033" }}>Our Mission</h2>
                    <p>At AnimalTrend, our mission is to offer the best products for your pets, ensuring they are comfortable, safe, and entertained. We believe that every dog deserves the best, and we strive to make that possible through our carefully curated selection of items.</p>
                </section>
                <section style={{ margin: "20px", padding: "20px", backgroundColor: "#d2b48c", borderRadius: "10px", width: "45%", border: "2px solid #5C4033" }}>
                    <h2 style={{ color: "#5C4033" }}>Meet the Team</h2>
                    <p>Our team is made up of dedicated pet enthusiasts who understand the needs of your furry companions. From our founders to our customer service representatives, everyone at Doggy Town is committed to providing exceptional service and products.</p>
                </section>
                <section style={{ margin: "20px", padding: "20px", backgroundColor: "#d2b48c", borderRadius: "10px", width: "45%", border: "2px solid #5C4033" }}>
                    <h2 style={{ color: "#5C4033" }}>Contact Us</h2>
                    <p>If you have any questions or need assistance, feel free to reach out to us at AnimalTrend@support.com. We're here to help!</p>
                </section>
            </div>
  
        </div>
    );
}