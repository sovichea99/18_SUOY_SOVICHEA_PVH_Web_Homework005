"use client";

export default function Search() {

  return (
    <input
      type="text"
      placeholder="Search by item name..."
      className="w-full  border  rounded-lg px-4 text-white py-2 text-sm focus:outline-none focus:border-gray-600 bg-white/10 backdrop-blur-xl backdrop-saturate-500 border-b border-white/10 shadow-lg"
    />
  );
}