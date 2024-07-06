import { useState } from "react";
import { FiEdit3, FiPrinter } from "react-icons/fi";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { TfiEye } from "react-icons/tfi";

const Billing = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const bills = [
    {
      date: "4 June, 2024",
      time: "11:45",
      phone: "01736874665",
      totalPurchase: 250,
      discount: 12,
      accountant: "John",
    },
    {
      date: "5 June, 2024",
      time: "12:15",
      phone: "01736874666",
      totalPurchase: 275,
      discount: 15,
      accountant: "Jane",
    },
    {
      date: "6 June, 2024",
      time: "13:30",
      phone: "01736874667",
      totalPurchase: 300,
      discount: 10,
      accountant: "Mike",
    },
    {
      date: "7 June, 2024",
      time: "14:00",
      phone: "01736874668",
      totalPurchase: 225,
      discount: 8,
      accountant: "Alice",
    },
    {
      date: "8 June, 2024",
      time: "15:20",
      phone: "01736874669",
      totalPurchase: 260,
      discount: 14,
      accountant: "Bob",
    },
    {
      date: "9 June, 2024",
      time: "10:45",
      phone: "01736874670",
      totalPurchase: 320,
      discount: 18,
      accountant: "Charlie",
    },
    {
      date: "10 June, 2024",
      time: "11:15",
      phone: "01736874671",
      totalPurchase: 340,
      discount: 20,
      accountant: "David",
    },
    {
      date: "11 June, 2024",
      time: "12:45",
      phone: "01736874672",
      totalPurchase: 210,
      discount: 5,
      accountant: "Eve",
    },
    {
      date: "12 June, 2024",
      time: "13:10",
      phone: "01736874673",
      totalPurchase: 280,
      discount: 11,
      accountant: "Frank",
    },
    {
      date: "13 June, 2024",
      time: "14:30",
      phone: "01736874674",
      totalPurchase: 290,
      discount: 13,
      accountant: "Grace",
    },
    {
      date: "14 June, 2024",
      time: "15:50",
      phone: "01736874675",
      totalPurchase: 310,
      discount: 16,
      accountant: "Hank",
    },
    {
      date: "15 June, 2024",
      time: "10:20",
      phone: "01736874676",
      totalPurchase: 200,
      discount: 7,
      accountant: "Ivy",
    },
    {
      date: "16 June, 2024",
      time: "11:35",
      phone: "01736874677",
      totalPurchase: 330,
      discount: 19,
      accountant: "Jack",
    },
    {
      date: "17 June, 2024",
      time: "12:05",
      phone: "01736874678",
      totalPurchase: 245,
      discount: 9,
      accountant: "Kelly",
    },
    {
      date: "18 June, 2024",
      time: "13:40",
      phone: "01736874679",
      totalPurchase: 235,
      discount: 6,
      accountant: "Leo",
    },
    {
      date: "19 June, 2024",
      time: "14:10",
      phone: "01736874680",
      totalPurchase: 310,
      discount: 17,
      accountant: "Mona",
    },
    {
      date: "20 June, 2024",
      time: "15:25",
      phone: "01736874681",
      totalPurchase: 270,
      discount: 12,
      accountant: "Nate",
    },
    {
      date: "21 June, 2024",
      time: "10:55",
      phone: "01736874682",
      totalPurchase: 295,
      discount: 14,
      accountant: "Olivia",
    },
    {
      date: "22 June, 2024",
      time: "11:20",
      phone: "01736874683",
      totalPurchase: 315,
      discount: 15,
      accountant: "Paul",
    },
    {
      date: "23 June, 2024",
      time: "12:50",
      phone: "01736874684",
      totalPurchase: 255,
      discount: 13,
      accountant: "Quincy",
    },
    {
      date: "24 June, 2024",
      time: "13:15",
      phone: "01736874685",
      totalPurchase: 285,
      discount: 16,
      accountant: "Rachel",
    },
    {
      date: "25 June, 2024",
      time: "14:35",
      phone: "01736874686",
      totalPurchase: 305,
      discount: 18,
      accountant: "Steve",
    },
    {
      date: "26 June, 2024",
      time: "15:05",
      phone: "01736874687",
      totalPurchase: 260,
      discount: 10,
      accountant: "Tina",
    },
    {
      date: "27 June, 2024",
      time: "10:30",
      phone: "01736874688",
      totalPurchase: 220,
      discount: 9,
      accountant: "Uma",
    },
    {
      date: "28 June, 2024",
      time: "11:55",
      phone: "01736874689",
      totalPurchase: 325,
      discount: 11,
      accountant: "Victor",
    },
    {
      date: "29 June, 2024",
      time: "12:25",
      phone: "01736874690",
      totalPurchase: 275,
      discount: 12,
      accountant: "Wendy",
    },
    {
      date: "30 June, 2024",
      time: "13:50",
      phone: "01736874691",
      totalPurchase: 240,
      discount: 8,
      accountant: "Xander",
    },
    {
      date: "1 July, 2024",
      time: "14:20",
      phone: "01736874692",
      totalPurchase: 310,
      discount: 14,
      accountant: "Yara",
    },
    {
      date: "2 July, 2024",
      time: "15:45",
      phone: "01736874693",
      totalPurchase: 285,
      discount: 10,
      accountant: "Zane",
    },
    {
      date: "3 July, 2024",
      time: "10:15",
      phone: "01736874694",
      totalPurchase: 215,
      discount: 6,
      accountant: "Amy",
    },
    {
      date: "4 July, 2024",
      time: "11:35",
      phone: "01736874695",
      totalPurchase: 345,
      discount: 19,
      accountant: "Brian",
    },
    {
      date: "5 July, 2024",
      time: "12:05",
      phone: "01736874696",
      totalPurchase: 255,
      discount: 9,
      accountant: "Cathy",
    },
    {
      date: "6 July, 2024",
      time: "13:25",
      phone: "01736874697",
      totalPurchase: 280,
      discount: 11,
      accountant: "Dan",
    },
    {
      date: "7 July, 2024",
      time: "14:55",
      phone: "01736874698",
      totalPurchase: 290,
      discount: 12,
      accountant: "Ella",
    },
    {
      date: "8 July, 2024",
      time: "15:35",
      phone: "01736874699",
      totalPurchase: 305,
      discount: 13,
      accountant: "Fred",
    },
    {
      date: "9 July, 2024",
      time: "10:10",
      phone: "01736874700",
      totalPurchase: 230,
      discount: 8,
      accountant: "Gina",
    },
    {
      date: "10 July, 2024",
      time: "11:25",
      phone: "01736874701",
      totalPurchase: 275,
      discount: 10,
      accountant: "Harry",
    },
    {
      date: "11 July, 2024",
      time: "12:45",
      phone: "01736874702",
      totalPurchase: 295,
      discount: 11,
      accountant: "Ivy",
    },
    {
      date: "12 July, 2024",
      time: "13:05",
      phone: "01736874703",
      totalPurchase: 320,
      discount: 14,
      accountant: "Jack",
    },
    {
      date: "13 July, 2024",
      time: "14:30",
      phone: "01736874704",
      totalPurchase: 255,
      discount: 9,
      accountant: "Kara",
    },
    {
      date: "14 July, 2024",
      time: "15:55",
      phone: "01736874705",
      totalPurchase: 310,
      discount: 15,
      accountant: "Liam",
    },
    {
      date: "15 July, 2024",
      time: "10:05",
      phone: "01736874706",
      totalPurchase: 205,
      discount: 7,
      accountant: "Mia",
    },
    {
      date: "16 July, 2024",
      time: "11:20",
      phone: "01736874707",
      totalPurchase: 295,
      discount: 13,
      accountant: "Noah",
    },
    {
      date: "17 July, 2024",
      time: "12:50",
      phone: "01736874708",
      totalPurchase: 250,
      discount: 8,
      accountant: "Olivia",
    },
    {
      date: "18 July, 2024",
      time: "13:10",
      phone: "01736874709",
      totalPurchase: 290,
      discount: 11,
      accountant: "Paul",
    },
    {
      date: "19 July, 2024",
      time: "14:35",
      phone: "01736874710",
      totalPurchase: 305,
      discount: 14,
      accountant: "Quincy",
    },
    {
      date: "20 July, 2024",
      time: "15:15",
      phone: "01736874711",
      totalPurchase: 265,
      discount: 10,
      accountant: "Rachel",
    },
  ];
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
    <div className="w-full h-[calc(100vh-100px)] bg-[#DDDDDD] p-7">
      <div className="overflow-x-auto bg-white rounded-lg h-full">
        <div className="flex items-center justify-between h-20 p-5">
          <div className="flex items-center gap-10">
            <h2 className="text-3xl text-[#000000] font-semibold">Bills</h2>
            <label className="input input-md bg-[#E4E4E4] flex items-center gap-2 w-[350px]">
              <RiSearchLine size={20} className="text-[#7B7B7B]" />
              <input
                type="text"
                className="grow"
                placeholder="Search Bill with phone-number"
              />
            </label>
          </div>
          <button className="btn bg-white btn-outline text-[#1A1D1F] outline-[#EFEFEF]">
            Export Report
          </button>
        </div>
        <table className="table">
          {/* head */}
          <thead className="h-14 bg-gray-200">
            <tr>
              <th>Date and Time</th>
              <th>Phone Number</th>
              <th>Total Purchase</th>
              <th>Discount</th>
              <th>Accountant</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
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
  );
};

export default Billing;
