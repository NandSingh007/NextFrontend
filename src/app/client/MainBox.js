"use client";
"use client";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import VideoWithCover from "./VideoWithCover";
import Image from "next/image";
import Box from "./Box";
import Footer from "./Footer";

export const MainBox = () => {
  // State to manage theme
  const [theme, setTheme] = useState("light");

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Update the body class to apply the theme
  useEffect(() => {
    document.body.className = theme; // Dynamically set the body class based on theme
  }, [theme]);

  return (
    <>
      <Header />
      {/* Theme Toggle Button */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button
          onClick={toggleTheme}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: theme === "light" ? "#2d2f31" : "#f0f0f0", // Dark background for light theme and vice versa
            color: theme === "light" ? "#fff" : "#000", // White text for dark background and black text for light background
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px"
          }}
        >
          {theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
        </button>
      </div>

      <div>
        <h2
          className="text-center text-6xl"
          style={{
            fontWeight: 800,
            marginTop: "90px",
            fontFamily: "sans-serif",
            color: theme === "light" ? "#000" : "#fff" // Text color changes based on theme
          }}
        >
          Build, Evaluate and <br />
          Improve Prompts <br /> 10x faster
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%" // Full width of the container
          }}
        >
          <p
            className="text-center text-lg"
            style={{
              fontWeight: 400,
              marginTop: "40px",
              color: theme === "light" ? "#373630" : "#ddd", // Text color for paragraph based on theme
              width: "640px",
              fontFamily: "sans-serif"
            }}
          >
            Empower your team to build, evaluate, and deploy high-performing
            prompts for LLM-based applications. Pype streamlines collaboration,
            version control, and performance analysis, helping you deliver
            reliable AI solutions faster.
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-center w-full">
        <VideoWithCover />
      </div>

      {/* Add your other content like the "Launch App" and "Book a Demo" buttons, images, etc. */}

      <Box />
      <Footer />
    </>
  );
};
