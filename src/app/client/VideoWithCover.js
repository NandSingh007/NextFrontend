"use client";

import React, { useState } from "react";
import Image from "next/image";

const VideoWithCover = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto my-6 px-4 sm:px-6 lg:px-8">
      {isPlaying ? (
        <video
          className="w-full rounded-lg shadow-lg"
          controls
          autoPlay
          src="https://youtu.be/-y_KrosGWaU?si=ylNPR5idke9mY9Dw"
          alt="Video Description"
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="relative w-full rounded-lg shadow-lg cursor-pointer"
          onClick={handlePlay}
        >
          <Image
            src="/Images/ss.png"
            alt="Video Cover"
            layout="responsive"
            width={1280}
            height={720}
            className="rounded-lg"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="p-3 bg-gray-800 bg-opacity-50 rounded-full">
              <svg
                className="w-10 h-10 text-white"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 10l-6 4V6l6 4z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoWithCover;
