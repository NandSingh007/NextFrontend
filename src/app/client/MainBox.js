"use client";
import React from "react";
import Header from "./Header";
import VideoWithCover from "./VideoWithCover";
import Image from "next/image";
import Box from "./Box";
import Footer from "./Footer";

export const MainBox = () => {
  return (
    <>
      <Header />
      <div>
        <h2
          className="text-center text-6xl"
          style={{
            fontWeight: 800,
            marginTop: "90px",
            fontFamily: "sans-serif"
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
              color: "#373630",
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "40px"
        }}
      >
        <div style={{ width: "50%", textAlign: "right" }}>
          <span
            style={{
              padding: "11px 50px",
              margin: "10px",
              fontSize: "17px",
              backgroundColor: "#2d2f31", // Blue background color
              borderRadius: "8px", // Adjust the radius as needed
              color: "#fff" // White text color for contrast
            }}
          >
            Launch App
          </span>
        </div>
        <div style={{ width: "50%", textAlign: "left" }}>
          <span
            style={{
              padding: "11px 50px",
              margin: "10px",
              fontSize: "17px",
              backgroundColor: "#007bff", // Blue background color
              borderRadius: "8px", // Adjust the radius as needed
              color: "#fff" // White text color for contrast
            }}
          >
            Book a Demo
          </span>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "17px",
          margin: "40px 0px",
          fontWeight: "600",
          color: "#2d2f31"
        }}
      >
        Helping individuals and teams at the world's best companies
      </div>
      <div
        style={{
          display: "flex",
          margin: "30px",
          justifyContent: "space-between"
        }}
      >
        <div style={{ margin: "5px", opacity: ".4" }}>
          <Image
            src="/Images/ak.png"
            alt="Video Cover"
            layout="responsive"
            width={10} // Adjust based on your cover image size
            height={40} // Adjust based on your cover image size
            className="rounded-lg"
          />
        </div>
        <div style={{ margin: "5px" }}>
          <Image
            src="/Images/ak.png"
            alt="Video Cover"
            layout="responsive"
            width={10} // Adjust based on your cover image size
            height={40} // Adjust based on your cover image size
            className="rounded-lg"
          />
        </div>
        <div style={{ margin: "5px" }}>
          <Image
            src="/Images/ak.png"
            alt="Video Cover"
            layout="responsive"
            width={10} // Adjust based on your cover image size
            height={40} // Adjust based on your cover image size
            className="rounded-lg"
          />
        </div>
        <div style={{ margin: "5px" }}>
          <Image
            src="/Images/ak.png"
            alt="Video Cover"
            layout="responsive"
            width={10} // Adjust based on your cover image size
            height={40} // Adjust based on your cover image size
            className="rounded-lg"
          />
        </div>
        <div style={{ margin: "5px", opacity: ".4" }}>
          <Image
            src="/Images/ak.png"
            alt="Video Cover"
            layout="responsive"
            width={10} // Adjust based on your cover image size
            height={20} // Adjust based on your cover image size
            className="rounded-lg"
          />
        </div>
      </div>
      <Box />
      <Footer />
    </>
  );
};
