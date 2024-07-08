import { useEffect, useState } from "react";
import { FaSearchPlus } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import Select, { components } from "react-select";
import PropTypes from "prop-types";

import {
  IoMdArrowDropleft,
  IoMdArrowDropright,
  IoMdCloseCircleOutline,
} from "react-icons/io";
import { MdOutlineDeleteForever } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { TfiEye } from "react-icons/tfi";
import { TiArrowMaximise } from "react-icons/ti";
import Modal from "react-modal";
import { Helmet } from "react-helmet-async";

// custom style for react-select field
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#E4E4E4",
    padding: "8px",
    borderRadius: "8px",
    borderColor: state.isFocused ? "#666" : "#ccc",
    boxShadow: state.isFocused ? "0 0 0 1px #666" : "none",
    "&:hover": {
      borderColor: "#666",
    },
  }),

  placeholder: (provided) => ({
    ...provided,
    color: "#666",
    display: "flex",
    alignItems: "center",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#333",
    display: "flex",
    alignItems: "center",
  }),
};
// custom component to add the search icon to left side to the placeholder
const CustomPlaceholder = (props) => (
  <components.Placeholder {...props}>
    <FaSearchPlus style={{ marginRight: "8px" }} />
    {props.children}
  </components.Placeholder>
);

// custom component to add the search icon to left side to the single value
const CustomSingleValue = (props) => (
  <components.SingleValue {...props}>
    <FaSearchPlus style={{ marginRight: "8px" }} />
    {props.children}
  </components.SingleValue>
);

const Inventory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [medicines, setMedicines] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  console.log(selectedOption);

  // get medicine data
  useEffect(() => {
    fetch("/data/medicines.json")
      .then((res) => res.json())
      .then((data) => setMedicines(data));
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  // get number of page for pagination
  const totalCustomer = medicines.length;
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

  // create select options for medicine
  const options = [];

  medicines.forEach((medicine) => {
    const value = medicine.id;
    const label = medicine.name;
    const newOption = { value, label };
    options.push(newOption);
  });
  return (
    <div>
      {/* title */}
      <Helmet>
        <title>Medical Store | Inventory</title>
      </Helmet>
      {/* inventory search area */}
      <div className="bg-white p-5 border-l-2 h-[215px] md:h-[160px]  lg:h-[88px] border ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-10">
            <h2 className="text-3xl text-[#000000] font-semibold">Inventory</h2>
            <label className="input input-md bg-[#E4E4E4] flex items-center gap-2 w-[350px] text-base">
              <RiSearchLine size={20} className="text-[#7B7B7B]" />
              <input
                type="text"
                className="grow"
                placeholder="Search product"
              />
            </label>
          </div>
          <div className="flex gap-5">
            <button className="btn bg-white btn-outline text-[#1A1D1F] outline-[#EFEFEF] text-base">
              Export Report
            </button>
            <button
              onClick={openModal}
              className="btn text-white bg-[#004FE8] text-base"
            >
              Add New Items
            </button>
          </div>
        </div>
      </div>

      {/* inventory table */}
      <div className="w-full h-screen lg:h-[calc(100vh-176px)] bg-[#DDDDDD] p-3 md:p-5 lg:p-7">
        <div className="bg-white rounded-lg h-full">
          <div className="overflow-x-auto bg-white rounded-lg h-[calc(100%-70px)] md:h-[calc(100%-90px)] lg:h-[calc(100%-100px)]">
            <table className="table">
              {/* head */}
              <thead className="h-14 bg-gray-50 text-sm md:text-base ">
                <tr>
                  <th>Name</th>
                  <th>Unit</th>
                  <th>Per unit Price</th>
                  <th>Sold This Month</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {medicines.map((medicine, idx) => (
                  <tr key={idx}>
                    <td>{medicine.name}</td>
                    <td>{medicine.unit}</td>
                    <td>{medicine.price}</td>
                    <td>{medicine.sold}</td>
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
          </div>
          {/* Pagination area */}
          <div className="space-x-3 my-5 md:my-8 lg:my-10 flex justify-center items-center">
            <button
              disabled={currentPage === 1}
              onClick={handlePrevious}
              className="btn btn-sm text-sm md:text-base"
            >
              <IoMdArrowDropleft />{" "}
              <span className="hidden md:block">Previous</span>
            </button>
            {pages.map((page) => (
              <button
                onClick={() => setCurrentPage(page + 1)}
                className={`btn btn-sm text-sm md:text-base ${
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
              className="btn btn-sm text-sm md:text-base"
            >
              <span className="hidden md:block">Next</span>
              <IoMdArrowDropright />
            </button>
          </div>
        </div>
      </div>
      {/* modal for add item */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-400 rounded-xl mt-12 md:mt-0 bg-white "
      >
        <div className="w-96 h-[500px] md:w-[600px] md:h-[700px] p-5">
          <div className="flex justify-between items-center mb-9">
            <h3 className="text-xl font-medium">Add new items</h3>
            <div className="flex gap-3">
              <button className="btn btn-sm">
                <TiArrowMaximise size={30} />
              </button>
              <button onClick={closeModal} className="btn btn-sm">
                <IoMdCloseCircleOutline size={30} />
              </button>
            </div>
          </div>

          <Select
            onChange={setSelectedOption}
            options={options}
            styles={customStyles}
            placeholder="Search and add"
            components={{
              Placeholder: CustomPlaceholder,
              SingleValue: CustomSingleValue,
            }}
          />

          {/* Added item table in modal */}
          <div className="overflow-x-auto bg-white h-[calc(100%-140px)] rounded-lg ">
            <table className="table">
              <tbody>
                <tr>
                  <div className="border-b py-5">
                    <h3 className="text-lg mb-2">Astmocin</h3>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        placeholder="Unit"
                        className="input input-bordered w-full max-w-xs bg-[#E4E4E4]"
                      />
                      <input
                        type="number"
                        placeholder="Per unit price"
                        className="input input-bordered w-full max-w-xs bg-[#E4E4E4]"
                      />
                      <button className="btn btn-sm">
                        <MdOutlineDeleteForever size={30} />
                      </button>
                    </div>
                  </div>
                </tr>
                <tr>
                  <div className="border-b py-5">
                    <h3 className="text-lg mb-2">Astmocin</h3>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        placeholder="Unit"
                        className="input input-bordered w-full max-w-xs bg-[#E4E4E4]"
                      />
                      <input
                        type="number"
                        placeholder="Per unit price"
                        className="input input-bordered w-full max-w-xs bg-[#E4E4E4]"
                      />
                      <button className="btn btn-xs md:btn-sm">
                        <MdOutlineDeleteForever size={25} />
                      </button>
                    </div>
                  </div>
                </tr>
                <tr>
                  <div className="border-b py-5">
                    <h3 className="text-lg mb-2">Astmocin</h3>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        placeholder="Unit"
                        className="input input-bordered w-full max-w-xs bg-[#E4E4E4]"
                      />
                      <input
                        type="number"
                        placeholder="Per unit price"
                        className="input input-bordered w-full max-w-xs bg-[#E4E4E4]"
                      />
                      <button className="btn btn-xs md:btn-sm">
                        <MdOutlineDeleteForever size={25} />
                      </button>
                    </div>
                  </div>
                </tr>
                <tr>
                  <div className="border-b py-5">
                    <h3 className="text-lg mb-2">Astmocin</h3>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        placeholder="Unit"
                        className="input input-bordered w-full max-w-xs bg-[#E4E4E4]"
                      />
                      <input
                        type="number"
                        placeholder="Per unit price"
                        className="input input-bordered w-full max-w-xs bg-[#E4E4E4]"
                      />
                      <button className="btn btn-xs md:btn-sm ">
                        <MdOutlineDeleteForever size={25} />
                      </button>
                    </div>
                  </div>
                </tr>
                <tr>
                  <div className="border-b py-5">
                    <h3 className="text-lg mb-2">Astmocin</h3>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        placeholder="Unit"
                        className="input input-bordered w-full max-w-xs bg-[#E4E4E4]"
                      />
                      <input
                        type="number"
                        placeholder="Per unit price"
                        className="input input-bordered w-full max-w-xs bg-[#E4E4E4]"
                      />
                      <button className="btn btn-xs md:btn-sm">
                        <MdOutlineDeleteForever size={25} />
                      </button>
                    </div>
                  </div>
                </tr>
                <tr>
                  <div className="border-b py-5">
                    <h3 className="text-lg mb-2">Astmocin</h3>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        placeholder="Unit"
                        className="input input-bordered w-full max-w-xs bg-[#E4E4E4]"
                      />
                      <input
                        type="number"
                        placeholder="Per unit price"
                        className="input input-bordered w-full max-w-xs bg-[#E4E4E4]"
                      />
                      <button className="btn btn-xs md:btn-sm">
                        <MdOutlineDeleteForever size={25} />
                      </button>
                    </div>
                  </div>
                </tr>
                <tr>
                  <div className="border-b py-5">
                    <h3 className="text-lg mb-2">Astmocin</h3>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        placeholder="Unit"
                        className="input input-bordered w-full max-w-xs bg-[#E4E4E4]"
                      />
                      <input
                        type="number"
                        placeholder="Per unit price"
                        className="input input-bordered w-full max-w-xs bg-[#E4E4E4]"
                      />
                      <button className="btn btn-xs md:btn-sm">
                        <MdOutlineDeleteForever size={25} />
                      </button>
                    </div>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Modal>
    </div>
  );
};

CustomSingleValue.propTypes = {
  children: PropTypes.any,
};
CustomPlaceholder.propTypes = {
  children: PropTypes.any,
};

export default Inventory;
