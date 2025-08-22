import React from 'react';

const ReviewCard = ({ profilephoto, name, socialmediaid, socialmedialogo, desc }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-100  m-3.5 h-71 border border-black-200 hover:scale-110 transition-shadow duration-400">
      {/* Top section */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={profilephoto}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border border-gray-300"
        />
        <div className="flex flex-col">
          <h4 className="text-3xl font-semibold text-gray-800">{name}</h4>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">{socialmediaid}</span>
            <img src={socialmedialogo} alt="social media" className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Review text */}
      <p className="text-gray-500 text-2xl mb-2 leading-relaxed">{desc}</p>
    </div>
  );
};

export default ReviewCard;
