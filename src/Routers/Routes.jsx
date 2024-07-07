import { createBrowserRouter } from "react-router-dom";
import DashboardLayoute from "../Layoutes/DashboardLayoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Inventory from "../Pages/Inventory/Inventory";
import Billing from "../Pages/Billing/Billing";
import CreateBill from "../Pages/CreateBill/CreateBill";
import Permission from "../Pages/Permission/Permission";
import Reporting from "../Pages/Reporting/Reporting";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayoute />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "billing",
        element: <Billing />,
      },
      {
        path: "create-bill",
        element: <CreateBill />,
      },
      {
        path: "permission",
        element: <Permission />,
      },
      {
        path: "reporting",
        element: <Reporting />,
      },
    ],
  },
]);
export default routes;
