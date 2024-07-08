import { NavLink } from "react-router-dom";
import dashboard from "../../assets/icon/dashboard.png";
import inventory from "../../assets/icon/inventory.png";
import bill from "../../assets/icon/bill.png";
import createBill from "../../assets/icon/createBill.png";
import permission from "../../assets/icon/permission.png";
import report from "../../assets/icon/report.png";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

const DashboardNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      {/* Home */}
      <li className="bg-gray-50">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold bg-[#004FE8] rounded-md flex items-center p-2 space-x-3 gap-3"
              : " flex items-center p-2 space-x-3 rounded-md gap-3"
          }
        >
          <img src={dashboard} className=" w-5 h-5 lg:w-6 lg:h-6" alt="icon" />
          Dashboard
        </NavLink>
      </li>
      <li className="bg-gray-50">
        <NavLink
          to="inventory"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold bg-[#004FE8] rounded-md flex items-center p-2 space-x-3 gap-3"
              : " flex items-center p-2 space-x-3 rounded-md gap-3"
          }
        >
          <img src={inventory} className="  w-5 h-5 lg:w-6 lg:h-6" alt="icon" />
          Inventory
        </NavLink>
      </li>
      <li className="bg-gray-50">
        <NavLink
          to="billing"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold bg-[#004FE8] rounded-md flex items-center p-2 space-x-3 gap-3"
              : " flex items-center p-2 space-x-3 rounded-md gap-3"
          }
        >
          <img src={bill} className=" w-5 h-5 lg:w-6 lg:h-6" alt="icon" />
          Billing
        </NavLink>
      </li>
      <li className="bg-gray-50">
        <NavLink
          to="create-bill"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold bg-[#004FE8] rounded-md flex items-center p-2 space-x-3 gap-3"
              : " flex items-center p-2 space-x-3 rounded-md gap-3"
          }
        >
          <img
            src={createBill}
            className=" w-5 h-5 lg:w-6 lg:h-6 "
            alt="icon"
          />
          Create Billing
        </NavLink>
      </li>
      <li className="bg-gray-50">
        <NavLink
          to="permission"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold bg-[#004FE8] rounded-md flex items-center p-2 space-x-3 gap-3"
              : " flex items-center p-2 space-x-3 rounded-md gap-3"
          }
        >
          <img src={permission} className=" w-5 h-5 lg:w-6 lg:h-6" alt="icon" />
          Permissions
        </NavLink>
      </li>
      <li className="bg-gray-50">
        <NavLink
          to="reporting"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold bg-[#004FE8] rounded-md flex items-center p-2 space-x-3 gap-3"
              : " flex items-center p-2 space-x-3 rounded-md gap-3"
          }
        >
          <img src={report} className=" w-5 h-5 lg:w-6 lg:h-6" alt="icon" />
          Reporting
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="lg:hidden absolute z-10">
        <div className="relative top-10 left-1 btn btn-xs">
          <AiOutlineMenu onClick={() => setIsOpen(!isOpen)} />
        </div>

        <div
          className={`relative h-full transition-transform duration-300 transform ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full -left-24 "
          }`}
        >
          <div className="min-h-screen p-3 space-y-2 w-60  text-gray-800 bg-white">
            <div className="flex items-center gap-4">
              <MdClose size={20} onClick={() => setIsOpen(!isOpen)} />
              <h2 className="text-center text-2xl font-bold">Medical Store</h2>
            </div>
            <div>
              <ul className="pt-2 pb-4 space-y-2 text-base">{navLinks}</ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block ">
        <div className="lg:sticky lg:top-0 min-h-screen p-3 space-y-2 w-60  text-gray-800 bg-white">
          <div className="">
            <h2 className="text-center text-2xl font-bold">Medical Store</h2>
          </div>
          <div>
            <ul className="pt-2 pb-4 space-y-2 text-base">{navLinks}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
