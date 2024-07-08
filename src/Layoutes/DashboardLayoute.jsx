import { Outlet } from "react-router-dom";
import DashboardNavbar from "../Components/DashboardNavbar/DashboardNavbar";
import { RiSearchLine } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";

const DashboardLayoute = () => {
  return (
    <div className="font-figtree flex">
      <DashboardNavbar />
      <div className="w-full flex-1 mt-2">
        <div className=" flex-1 w-full h-20 border-l-2">
          <div className="flex items-center justify-between py-5 pl-10 pr-4">
            <div>
              <label className="input input-md text-base bg-[#F4F4F4] flex items-center gap-2 w-[280px] md:w-[350px] ">
                <RiSearchLine
                  size={20}
                  className="hidden md:block text-[#9A9FA5]"
                />
                <input
                  type="text"
                  className="grow"
                  placeholder="Type a command"
                />
                <button className="btn btn-xs bg-white text-sm lg:text-base">
                  ⌘F
                </button>
              </label>
            </div>
            <div className="flex items-center gap-2 md:gap-6 lg:gap-10">
              <IoNotifications className="w-5 h-5" size={25} />
              <div className="avatar online">
                <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full">
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
