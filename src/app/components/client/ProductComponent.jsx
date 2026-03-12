"use client";
import { useState } from "react";
import DetailViewComponent from "./DetailViewComponent";
import SubNavComponent from "./SubNavComponent";

export default function ProductComponent({ data }) {
  const [bookmarks, setBookmarks] = useState([]);
  const [isSave, setIsSave] = useState(false);
  const [sortOrder, setSortOrder] = useState(null);

  const toggleBookmark = (id) => {
    setBookmarks((currentList) =>
      currentList.includes(id) ? currentList.filter((i) => i !== id) : [...currentList, id],
    );
  };
  let displayItems = isSave
    ? data.filter((item) => bookmarks.includes(item.id))
    : data;

  if (sortOrder === "asc") {
    displayItems = [...displayItems].sort((a, b) =>
      a.item_name.localeCompare(b.item_name),
    );
  } else if (sortOrder === "desc") {
    displayItems = [...displayItems].sort((a, b) =>
      b.item_name.localeCompare(a.item_name),
    );
  }
  return (
    <div className="">
      <div className="sticky top-1">
        <SubNavComponent
          onToggleSaved={() => setIsSave(!isSave)}
          goBack={() => setIsSave(false)}
          onSort={(order) => setSortOrder(order)}
        />
      </div>
      <div className="space-y-3 px-3">
        {displayItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#11141d] p-3 rounded-xl flex items-center justify-between border border-gray-900 group"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                className="w-14 h-14 rounded-lg bg-gray-800 object-cover"
                alt=""
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-white">{item.item_name}</h3>
                  <span className="text-gray-500 text-sm">
                    ${item.item_price}
                  </span>
                  <button onClick={() => toggleBookmark(item.id)} className="hover:cursor-pointer">
                    <svg
                      className={`w-5 h-5 ${bookmarks.includes(item.id) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M5 5v16l7-5 7 5V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-500 text-xs mt-1">
                  {item.item_description}
                </p>
              </div>
            </div>
            <div className="">
              <DetailViewComponent item={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
