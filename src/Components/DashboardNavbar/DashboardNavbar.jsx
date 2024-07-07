import { NavLink } from "react-router-dom";
import dashboard from "../../assets/icon/dashboard.png";
import inventory from "../../assets/icon/inventory.png";
import bill from "../../assets/icon/bill.png";
import createBill from "../../assets/icon/createBill.png";
import permission from "../../assets/icon/permission.png";
import report from "../../assets/icon/report.png";

const DashboardNavbar = () => {
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
          <img
            src={dashboard}
            style={{ fill: "#000" }}
            className=" w-6 h-6 "
            alt="icon"
          />
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
          <img src={inventory} className=" w-6 h-6" alt="icon" />
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
          <img src={bill} className="text-black w-6 h-6" alt="icon" />
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
          <img src={createBill} className="text-black w-6 h-6 " alt="icon" />
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
          <img src={permission} className="text-black w-6 h-6" alt="icon" />
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
          <img src={report} className="text-black w-6 h-6" alt="icon" />
          Reporting
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="flex ">
      <div className="lg:sticky lg:top-0 min-h-screen p-3 space-y-2 w-60  text-gray-800">
        <div className="">
          <h2 className="text-center text-2xl font-bold">Medical Store</h2>
        </div>
        <div className="divide-y dark:divide-gray-300">
          <ul className="pt-2 pb-4 space-y-2 text-sm">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
