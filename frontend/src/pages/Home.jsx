import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  FaHeart,
  FaRegHeart,
  FaBookmark,
  FaRegBookmark,
  FaShareAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef([]);
  const navigate = useNavigate();

  // Fetch reels from backend
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_FOOD_GET_API, {
          withCredentials: true,
        });
        const items = res.data.foodItems || [];

        // Assuming backend sends `isLiked` and `isSaved` for the logged in user
        setVideos(items);
      } catch (err) {
        console.error("Error fetching videos", err);
      }
    };
    fetchVideos();
  }, []);

  // Play only the video currently visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch((err) => console.log("Autoplay blocked:", err));
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.8 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [videos]);

  // Like toggle with optimistic update
  const toggleLike = async (index, videoId) => {
    setVideos((prev) =>
      prev.map((v, i) =>
        i === index
          ? {
              ...v,
              isLiked: !v.isLiked,
              likesCount: v.likesCount + (v.isLiked ? -1 : 1),
            }
          : v
      )
    );

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_FOOD_API}/like/${videoId}`,
        {},
        { withCredentials: true }
      );

      // sync with backend response
      setVideos((prev) =>
        prev.map((v, i) =>
          i === index
            ? {
                ...v,
                likesCount: res.data.likesCount,
                isLiked: res.data.isLiked,
              }
            : v
        )
      );
    } catch (err) {
      console.error("Error liking video:", err);
    }
  };

  // Save toggle with optimistic update
  const toggleSave = async (index, videoId) => {
    setVideos((prev) =>
      prev.map((v, i) =>
        i === index
          ? {
              ...v,
              isSaved: !v.isSaved,
              savesCount: v.savesCount + (v.isSaved ? -1 : 1),
            }
          : v
      )
    );

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_FOOD_API}/save/${videoId}`,
        {},
        { withCredentials: true }
      );

      setVideos((prev) =>
        prev.map((v, i) =>
          i === index
            ? {
                ...v,
                savesCount: res.data.savesCount,
                isSaved: res.data.isSaved,
              }
            : v
        )
      );
    } catch (err) {
      console.error("Error saving video:", err);
    }
  };

  const goToProfile = (partnerId) => {
    navigate(`/partner/${partnerId}`);
  };

  return (
    <div className="h-screen w-full bg-black flex flex-col">
      {/* Reels Feed */}
      <div className="flex-1 snap-y snap-mandatory overflow-y-scroll">
        {videos.map((video, index) => (
          <div
            key={video._id}
            className="relative h-full w-full flex-shrink-0 snap-start"
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="h-full w-full object-cover"
              loop
              muted
              playsInline
              src={video.video}
            />

            {/* Overlay Actions */}
            <div className="absolute bottom-10 right-5 flex flex-col space-y-5 text-black text-3xl">
              <div className="flex flex-col items-center">
                <button onClick={() => toggleLike(index, video._id)}>
                  {video.isLiked ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
                <p className="text-sm">{video.likesCount || 0}</p>
              </div>

              <div className="flex flex-col items-center">
                <button onClick={() => toggleSave(index, video._id)}>
                  {video.isSaved ? (
                    <FaBookmark className="text-yellow-400" />
                  ) : (
                    <FaRegBookmark />
                  )}
                </button>
                <p className="text-sm">{video.savesCount || 0}</p>
              </div>

              <button onClick={() => alert("Share clicked!")}>
                <FaShareAlt />
              </button>
            </div>

            {/* Profile + Description */}
            <div className="absolute bottom-12 left-5 text-black">
              <div className="flex items-center space-x-2 mb-2 text-xl">
                <img
                  src={
                    video.foodPartner?.profileImage ||
                    "data:image/png;base64,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"
                  }
                  alt={video.foodPartner?.fullName || "Partner"}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <button
                  onClick={() => goToProfile(video.foodPartner?._id)}
                  className="font-semibold hover:underline"
                >
                  {video.foodPartner?.fullName || "Food Partner"}
                </button>
              </div>
              <p className="text-lg">Food Name - {video.name}</p>
              <p className="text-sm mt-2">
                Food Description - {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="h-16 bg-gray-900 flex justify-around items-center text-white text-lg">
        <button>Reels</button>
        <button>Saved</button>
        <button>Profile</button>
      </div>
    </div>
  );
};

export default Home;
