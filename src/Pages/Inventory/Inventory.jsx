import { useEffect, useState } from "react";
import { FaSearchPlus } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
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

const Inventory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetch("/public/data/medicine.json")
      .then((res) => res.json())
      .then((data) => setMedicines(data));
  }, []);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

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

  return (
    <div>
      <div className="bg-white p-5 border-l-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <h2 className="text-3xl text-[#000000] font-semibold">Inventory</h2>
            <label className="input input-md bg-[#E4E4E4] flex items-center gap-2 w-[350px]">
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
            <button onClick={openModal} className="btn text-white bg-[#004FE8]">
              Add New Items
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[calc(100vh-188px)] bg-[#DDDDDD] p-7">
        <div className="overflow-x-auto bg-white rounded-lg h-full">
          <table className="table">
            {/* head */}
            <thead className="h-14 bg-gray-200">
              <tr>
                <th>Name</th>
                <th>Unit</th>
                <th>Per unit Price</th>
                <th>Sold This Month</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
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
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-400 rounded-xl mt-12 md:mt-0 bg-white"
      >
        <div className="w-[600px] h-[700px] p-5">
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
          <div className=" border-b">
            <label className="input input-md bg-[#E4E4E4] flex items-center gap-2 w-full mb-5">
              <FaSearchPlus size={20} className="text-black" />
              <input
                type="text"
                className="grow text-black"
                placeholder="Search and add"
              />
            </label>
          </div>
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
                      <button className="btn btn-sm">
                        <MdOutlineDeleteForever size={30} />
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

export default Inventory;
