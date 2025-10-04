import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodPartnerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [partner, setPartner] = useState(null);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_FOOD_PARTNER_FETCH_API}/${id}`,
          { withCredentials: true }
        );
        setPartner(res.data.partner);

        const foodRes = await axios.get(
          `${import.meta.env.VITE_FOOD_GET_API}/partner/${id}`,
          { withCredentials: true }
        );
        setFoods(foodRes.data.foodItems || []);
      } catch (err) {
        console.error("Error fetching partner profile:", err);
      }
    };
    fetchProfile();
  }, [id]);

  const handleLogout = async () => {
    try {
      await axios.post(
        import.meta.env.VITE_FOOD_PARTNER_LOGOUT_API,
        {},
        { withCredentials: true }
      );
      localStorage.removeItem("loggedPartnerId");
      navigate("/foodpartner/login");
    } catch (err) {
      console.error("Logout failed:", err);
      navigate("/foodpartner/login");
    }
  };

  if (!partner) return <div className="text-white p-5">Loading profile...</div>;

  return (
    <div className="min-h-screen bg-black text-white p-5">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-5">
          <img
            src={partner.profileImage || "/default.png"}
            alt={partner.fullName}
            className="w-24 h-24 rounded-full border-2 border-white object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold">{partner.fullName}</h1>
            <p className="text-gray-400">{foods.length} Food Items</p>
          </div>
        </div>

        {/* Logout only for partner */}
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <div className="flex space-x-4 mb-10">
        <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
          Create Food
        </button>
        <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800">
          Update Profile
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-5">Food Reels</h2>
      {foods.length === 0 ? (
        <p className="text-gray-400">No food items yet.</p>
      ) : (
        <div className="grid grid-cols-3 gap-3">
          {foods.map((food) => (
            <video
              key={food._id}
              src={food.video}
              loop
              muted
              playsInline
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodPartnerProfile;
