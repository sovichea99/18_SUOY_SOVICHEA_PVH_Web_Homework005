"use client";
import React, { useState } from "react";
import DetailButtonComponent from "./DetailButtonComponent";

export default function DetailViewComponent({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <DetailButtonComponent onClick={() => setIsOpen(!isOpen)}>
        <p className="hover:cursor-pointer bg-[#1e1b4b] text-white px-6 py-2 rounded-lg text-sm font-semibold">View</p>
      </DetailButtonComponent>
      {isOpen && (
        <dialog className="h-full w-full fixed inset-0 flex items-center justify-center bg-black/30">
          <div className="w-[350px] h-[220px] items-center bg-[#11141d] p-5 rounded-2xl">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="float-end py-1 px-3 rounded-2xl bg-[#11141d]/60 backdrop-blur-xl backdrop-saturate-500 border border-white/10 shadow-lg text-white text-sm hover:cursor-pointer"
            >
              close
            </button>
            <div className="flex flex-col text-white text-sm space-y-2">
                <p>Item details</p>
              <div>
                <span className="font-semibold">ID:</span> <span className="font-light">{item.id}</span>
              </div>
              <div>
                <span className="font-semibold">Name:</span> <span className="font-light">{item.item_name}</span>
              </div>
              <div>
                <span className="font-semibold">Price:</span> <span className="font-light"> {item.item_price}</span>
              </div>
              <div>
                <span className="font-semibold">Description: </span>
               <span className="font-light">{item.item_description}</span>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
