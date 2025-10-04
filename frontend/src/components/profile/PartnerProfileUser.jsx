import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PartnerProfileUser = () => {
  const { id } = useParams();
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

  if (!partner) return <div className="text-black p-5">Loading profile...</div>;

  return (
    <div className="min-h-screen bg-black text-white p-5">
      <div className="flex items-center mb-8">
        <img
          src={partner.profileImage || "/default.png"}
          alt={partner.fullName}
          className="w-24 h-24 rounded-full border-2 border-white object-cover"
        />
        <div className="ml-5">
          <h1 className="text-2xl font-bold">{partner.fullName}</h1>
          <p className="text-gray-600">{foods.length} Food Items</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-5">Food Reels</h2>
      {foods.length === 0 ? (
        <p className="text-gray-500">No food items yet.</p>
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

export default PartnerProfileUser;
