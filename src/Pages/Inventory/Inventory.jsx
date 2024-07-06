import { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { TfiEye } from "react-icons/tfi";

const Inventory = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const customers = [
    { id: 1, name: "Doxycycline 1", unit: 20, price: 7.5, sold: 245 },
    { id: 2, name: "Doxycycline 2", unit: 15, price: 8.0, sold: 246 },
    { id: 3, name: "Doxycycline 3", unit: 22, price: 6.75, sold: 247 },
    { id: 4, name: "Doxycycline 4", unit: 18, price: 9.5, sold: 248 },
    { id: 5, name: "Doxycycline 5", unit: 30, price: 5.5, sold: 249 },
    { id: 6, name: "Doxycycline 6", unit: 25, price: 6.0, sold: 250 },
    { id: 7, name: "Doxycycline 7", unit: 19, price: 7.2, sold: 251 },
    { id: 8, name: "Doxycycline 8", unit: 21, price: 8.3, sold: 252 },
    { id: 9, name: "Doxycycline 9", unit: 16, price: 9.0, sold: 253 },
    { id: 10, name: "Doxycycline 10", unit: 23, price: 6.5, sold: 254 },
    { id: 11, name: "Doxycycline 11", unit: 28, price: 7.8, sold: 255 },
    { id: 12, name: "Doxycycline 12", unit: 17, price: 8.5, sold: 256 },
    { id: 13, name: "Doxycycline 13", unit: 24, price: 7.0, sold: 257 },
    { id: 14, name: "Doxycycline 14", unit: 20, price: 6.9, sold: 258 },
    { id: 15, name: "Doxycycline 15", unit: 27, price: 7.1, sold: 259 },
    { id: 16, name: "Doxycycline 16", unit: 18, price: 8.2, sold: 260 },
    { id: 17, name: "Doxycycline 17", unit: 22, price: 9.3, sold: 261 },
    { id: 18, name: "Doxycycline 18", unit: 26, price: 6.7, sold: 262 },
    { id: 19, name: "Doxycycline 19", unit: 19, price: 8.1, sold: 263 },
    { id: 20, name: "Doxycycline 20", unit: 21, price: 7.4, sold: 264 },
    { id: 21, name: "Doxycycline 21", unit: 15, price: 8.6, sold: 265 },
    { id: 22, name: "Doxycycline 22", unit: 28, price: 7.9, sold: 266 },
    { id: 23, name: "Doxycycline 23", unit: 24, price: 6.4, sold: 267 },
    { id: 24, name: "Doxycycline 24", unit: 23, price: 7.6, sold: 268 },
    { id: 25, name: "Doxycycline 25", unit: 27, price: 8.4, sold: 269 },
    { id: 26, name: "Doxycycline 26", unit: 18, price: 7.3, sold: 270 },
    { id: 27, name: "Doxycycline 27", unit: 22, price: 8.0, sold: 271 },
    { id: 28, name: "Doxycycline 28", unit: 17, price: 7.2, sold: 272 },
    { id: 29, name: "Doxycycline 29", unit: 20, price: 8.5, sold: 273 },
    { id: 30, name: "Doxycycline 30", unit: 26, price: 7.7, sold: 274 },
    { id: 31, name: "Doxycycline 31", unit: 24, price: 7.1, sold: 275 },
    { id: 32, name: "Doxycycline 32", unit: 21, price: 8.3, sold: 276 },
    { id: 33, name: "Doxycycline 33", unit: 19, price: 7.0, sold: 277 },
    { id: 34, name: "Doxycycline 34", unit: 23, price: 8.1, sold: 278 },
    { id: 35, name: "Doxycycline 35", unit: 27, price: 6.8, sold: 279 },
    { id: 36, name: "Doxycycline 36", unit: 18, price: 8.4, sold: 280 },
    { id: 37, name: "Doxycycline 37", unit: 22, price: 7.5, sold: 281 },
    { id: 38, name: "Doxycycline 38", unit: 20, price: 7.9, sold: 282 },
    { id: 39, name: "Doxycycline 39", unit: 25, price: 8.6, sold: 283 },
    { id: 40, name: "Doxycycline 40", unit: 17, price: 7.8, sold: 284 },
    { id: 41, name: "Doxycycline 41", unit: 28, price: 6.7, sold: 285 },
    { id: 42, name: "Doxycycline 42", unit: 19, price: 7.6, sold: 286 },
    { id: 43, name: "Doxycycline 43", unit: 21, price: 8.0, sold: 287 },
    { id: 44, name: "Doxycycline 44", unit: 23, price: 7.2, sold: 288 },
    { id: 45, name: "Doxycycline 45", unit: 24, price: 8.5, sold: 289 },
    { id: 46, name: "Doxycycline 46", unit: 22, price: 7.3, sold: 290 },
    { id: 47, name: "Doxycycline 47", unit: 20, price: 7.4, sold: 291 },
    { id: 48, name: "Doxycycline 48", unit: 19, price: 8.2, sold: 292 },
    { id: 49, name: "Doxycycline 49", unit: 18, price: 7.7, sold: 293 },
    { id: 50, name: "Doxycycline 50", unit: 26, price: 8.1, sold: 294 },
  ];
  const totalCustomer = customers.length;
  const itemsPerPage = 11;
  const numberOfPages = Math.ceil(totalCustomer / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];
  console.log(pages);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < pages.length) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div className="bg-white p-5 border-l-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <h2 className="text-3xl text-[#000000] font-semibold">Inventory</h2>
            <label className="input input-md bg-[#E4E4E4] flex items-center gap-2 w-full max-w-sm">
              <RiSearchLine size={20} className="text-[#7B7B7B]" />
              <input
                type="text"
                className="grow"
                placeholder="Search product"
              />
            </label>
          </div>
          <div className="flex gap-5">
            <button className="btn bg-white btn-outline text-[#1A1D1F] outline-[#EFEFEF]">
              Export Report
            </button>
            <button className="btn text-white bg-[#004FE8]">
              Add New Items
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[calc(100vh-188px)] bg-[#DDDDDD] p-7">
        <div className="overflow-x-auto bg-white rounded-md h-full">
          <table className="table">
            {/* head */}
            <thead className="h-14">
              <tr>
                <th>Name</th>
                <th>Unit</th>
                <th>Per unit Price</th>
                <th>Sold This Month</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, idx) => (
                <tr key={idx}>
                  <td>{customer.name}</td>
                  <td>{customer.unit}</td>
                  <td>{customer.price}</td>
                  <td>{customer.sold}</td>
                  <td className="flex gap-3">
                    <button className="btn btn-xs">
                      <TfiEye size={15} />
                    </button>
                    <button className="btn btn-xs">
                      <FiEdit3 size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="space-x-3 mb-5 flex justify-center items-center">
            <button
              disabled={currentPage === 1}
              onClick={handlePrevious}
              className="btn btn-sm"
            >
              <IoMdArrowDropleft /> Previous
            </button>
            {pages.map((page) => (
              <button
                onClick={() => setCurrentPage(page + 1)}
                className={`btn btn-sm ${
                  currentPage === page + 1 && "bg-black text-white"
                }`}
                key={page}
              >
                {page + 1}
              </button>
            ))}
            <button
              disabled={currentPage === pages.length}
              onClick={handleNext}
              className="btn btn-sm"
            >
              Next <IoMdArrowDropright />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;