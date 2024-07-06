import { Outlet } from "react-router-dom";
import DashboardNavbar from "../Components/DashboardNavbar/DashboardNavbar";
import { RiSearchLine } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";

const DashboardLayoute = () => {
  return (
    <div className="font-figtree flex">
      <DashboardNavbar />
      <div className="w-full flex-1 mt-5 z-0">
        <div className=" flex-1 w-full h-20 border-l-2">
          <div className="flex items-center justify-between py-5 px-10">
            <div>
              <label className="input input-sm bg-[#F4F4F4] flex items-center gap-2">
                <RiSearchLine size={20} className="text-[#9A9FA5]" />
                <input
                  type="text"
                  className="grow"
                  placeholder="Search or type a command"
                />
                <button className="btn btn-xs bg-white">⌘F</button>
              </label>
            </div>
            <div className="flex items-center gap-10">
              <IoNotifications size={25} />
              <div className="avatar online">
                <div className="w-12 h-12 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayoute;
