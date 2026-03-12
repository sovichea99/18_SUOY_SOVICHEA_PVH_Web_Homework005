export default function Sidebar() {
  const menu = ["Overview", "Items", "Orders", "Customers", "Settings"];
  
  return (
    <aside className="w-60 p-4 space-y-3">
      <p className="text-[10px] text-gray-500 font-bold tracking-widest px-2">MENU</p>
      <nav className="flex flex-col gap-1 space-y-1">
        {menu.map((item) => (
          <button 
            key={item}
            className={`text-left px-4 py-2.5 text-white   rounded-xl text-sm font-medium transition bg-[#20232d] hover:cursor-pointer`}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}