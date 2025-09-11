import React from "react";

const Card = ({ image }) => {
  return (
    <div className="relative drop-shadow-xl w-64 sm:w-72 md:w-80 h-80 sm:h-80 md:h-[520px] overflow-hidden rounded-2xl bg-[#3d3c3d]">
      {/* Image */}
      <img
        src={image}
        alt="Card"
        className="absolute inset-0 w-full h-full object-cover rounded-xl"
      />

      {/* Optional dark overlay for effect */}
      <div className="absolute inset-0 bg-black/30 rounded-xl" />
    </div>
  );
};

export default Card;
