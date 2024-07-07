import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FiEdit3 } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import Modal from "react-modal";

const Permission = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);

  // get users data
  useEffect(() => {
    fetch("/public/data/users.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  // function for changing role
  const handleRole = (role) => {
    console.log(role);
    closeModal();
  };

  return (
    <div className="w-full h-[calc(100vh-100px)] bg-[#DDDDDD] p-7">
      <Helmet>
        <title>Medical Store | permissions</title>
      </Helmet>
      <div className="overflow-x-auto bg-white rounded-lg h-full">
        <div className=" h-20 p-5">
          <div className="flex items-center gap-10">
            <h2 className="text-3xl text-[#000000] font-semibold">
              Permissions
            </h2>
            <label className="input input-md bg-[#E4E4E4] flex items-center gap-2 w-[350px] text-base">
              <RiSearchLine size={20} className="text-[#7B7B7B]" />
              <input
                type="text"
                className="grow"
                placeholder="Search with phone-number"
              />
            </label>
          </div>
        </div>
        <table className="table">
          {/* head */}
          <thead className="h-14 bg-gray-200 text-base">
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Access</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-base">
            {users.map((user, idx) => (
              <tr key={idx}>
                <td>{user.name}</td>
                <td>{user.phone}</td>

                <td>
                  <button
                    className={`btn btn-sm text-white
                    ${user.access === "Admin" && "bg-[#004FE8]"}
                    ${user.access === "Edit" && "bg-[#9747FF]"}
                    ${user.access === "Viewer" && "bg-[#3EAA18]"}`}
                  >
                    {user.access}
                  </button>
                </td>

                <td className="flex gap-3">
                  <button onClick={openModal} className="btn btn-xs">
                    <FiEdit3 size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* modal for role options */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-400 rounded-xl mt-12 md:mt-0 bg-gray-100 z-50"
      >
        <div className="h-16 w-72  flex items-center justify-center gap-5">
          <button
            onClick={() => handleRole("Admin")}
            className="btn btn-sm text-white hover:text-black bg-[#004FE8]"
          >
            Admin
          </button>
          <button
            onClick={() => handleRole("Edit")}
            className="btn btn-sm text-white hover:text-black bg-[#9747FF]"
          >
            Edit
          </button>
          <button
            onClick={() => handleRole("Viewer")}
            className="btn btn-sm text-white hover:text-black bg-[#3EAA18]"
          >
            Viewer
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Permission;
