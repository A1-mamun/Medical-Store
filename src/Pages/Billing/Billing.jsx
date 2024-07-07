import { useEffect, useState } from "react";
import { FiEdit3, FiPrinter } from "react-icons/fi";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { TfiEye } from "react-icons/tfi";

const Billing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [bills, setBills] = useState([]);

  // get bill data
  useEffect(() => {
    fetch("/public/data/bills.json")
      .then((res) => res.json())
      .then((data) => setBills(data));
  }, []);

  // get number of page for pagination
  const totalCustomer = bills.length;
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
    // bills table area
    <div className="w-full h-[calc(100vh-100px)] bg-[#DDDDDD] p-7">
      <div className="overflow-x-auto bg-white rounded-lg h-full">
        {/* bill search area */}
        <div className="flex items-center justify-between h-20 p-5">
          <div className="flex items-center gap-10">
            <h2 className="text-3xl text-[#000000] font-semibold">Bills</h2>
            <label className="input input-md bg-[#E4E4E4] flex items-center gap-2 w-[350px] text-base">
              <RiSearchLine size={20} className="text-[#7B7B7B]" />
              <input
                type="text"
                className="grow"
                placeholder="Search Bill with phone-number"
              />
            </label>
          </div>
          <button className="btn bg-white text-base btn-outline text-[#1A1D1F] outline-[#EFEFEF]">
            Export Report
          </button>
        </div>
        <table className="table">
          {/* head */}
          <thead className="h-14 bg-gray-200 text-base">
            <tr>
              <th>Date and Time</th>
              <th>Phone Number</th>
              <th>Total Purchase</th>
              <th>Discount</th>
              <th>Accountant</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-base">
            {bills.map((bill, idx) => (
              <tr key={idx}>
                <td>
                  {bill.time} | {bill.date}
                </td>
                <td>{bill.phone}</td>
                <td>{bill.totalPurchase}</td>
                <td>{bill.discount}% off</td>
                <td>{bill.accountant}</td>

                <td className="flex gap-3">
                  <button className="btn btn-xs">
                    <TfiEye size={15} />
                  </button>
                  <button className="btn btn-xs">
                    <FiEdit3 size={15} />
                  </button>
                  <button className="btn btn-xs">
                    <FiPrinter size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* pagination area */}
        <div className="space-x-3 my-10 flex justify-center items-center">
          <button
            disabled={currentPage === 1}
            onClick={handlePrevious}
            className="btn btn-sm text-base"
          >
            <IoMdArrowDropleft /> Previous
          </button>
          {pages.map((page) => (
            <button
              onClick={() => setCurrentPage(page + 1)}
              className={`btn btn-sm text-base ${
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
            className="btn btn-sm text-base"
          >
            Next <IoMdArrowDropright />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
