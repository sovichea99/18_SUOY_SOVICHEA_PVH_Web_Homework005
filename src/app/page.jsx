import Navbar from "./components/server/Navbar";
import ProductList from "./components/client/ProductComponent";
import Sidebar from "./components/server/Sidebar";
import { items } from "./data/items";
import MainComponent from "./components/server/MainComponent";

export default function ItemsPage() {
  return (
    <div className="w-full">
      <div className="flex flex-col h-screen overflow-hidden">
        <Navbar/>
        <div className="flex flex-1 overflow-hidden">
          <div className="mt-3 mx-3  bg-[#14161d] rounded-tl-3xl rounded-tr-3xl">
            <Sidebar/>
          </div>
         <main className="flex-1 overflow-auto">
         <MainComponent data={items}/>
         </main>
        </div>
      </div>
    </div>
  );
}