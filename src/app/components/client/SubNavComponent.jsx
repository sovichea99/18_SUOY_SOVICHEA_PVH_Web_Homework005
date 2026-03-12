"use client";

import React from 'react'

export default function SubNavComponent({goBack, onToggleSaved, onSort}) {
  return (
    <div>
      <div className="flex justify-between rounded-2xl mb-3 z-10 w-full px-3 py-2 items-center ">
        <button onClick={goBack} className=" px-3 py-1 rounded-2xl bg-[#11141d]/60 backdrop-blur-xl backdrop-saturate-500 border hover:text-amber-300 border-white/10 shadow-lg text-white text-sm hover:cursor-pointer">
          Back
        </button>
        <div className="flex gap-2 items-center">
          <button onClick={onToggleSaved} className="px-3 py-1 rounded-2xl bg-[#11141d]/60 backdrop-blur-xl backdrop-saturate-500 border border-white/10 shadow-lg text-white hover:cursor-pointer hover:text-amber-300">
            <span className="flex gap-2 text-sm">
              Your Bookmark
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-book-marked-icon lucide-book-marked"
              >
                <path d="M10 2v8l3-3 3 3V2" />
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
              </svg>
            </span>
          </button>
          <button onClick={()=>onSort('asc')} className="px-3 py-1 rounded-2xl bg-[#11141d]/60 backdrop-blur-xl backdrop-saturate-500 border border-white/10 shadow-lg text-white hover:cursor-pointer hover:text-amber-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-down-az-icon lucide-arrow-down-a-z"
            >
              <path d="m3 16 4 4 4-4" />
              <path d="M7 20V4" />
              <path d="M20 8h-5" />
              <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
              <path d="M15 14h5l-5 6h5" />
            </svg>
          </button>
          <button onClick={()=>onSort('desc')}  className="px-3 py-1 rounded-2xl bg-[#11141d]/60 backdrop-blur-xl backdrop-saturate-500 border border-white/10 shadow-lg text-white hover:cursor-pointer hover:text-amber-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-up-az-icon lucide-arrow-up-a-z"
            >
              <path d="m3 8 4-4 4 4" />
              <path d="M7 4v16" />
              <path d="M20 8h-5" />
              <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
              <path d="M15 14h5l-5 6h5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
