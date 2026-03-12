import Search from "../client/Search";

export default function Navbar() {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-[#14161d] z-50">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-600 rounded-full border border-gray-500 overflow-hidden">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Avatar" />
        </div>
        <span className="font-bold text-lg">Dashboard</span>
      </div>

      <div className="w-80">
       <Search/>
      </div>
    </header>
  );
}