import { FaSearchPlus } from "react-icons/fa";

import CreateBillRow from "./CreateBillRow";
import { useEffect, useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import Select, { components } from "react-select";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

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

const CreateBill = () => {
  const [total, setTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [discountPercent, setDiscountPercent] = useState(5);
  const [discount, setDiscount] = useState(0);
  const [vat, setVat] = useState(0);
  const [paid, setPaid] = useState(0);
  const [showReceiveMoney, setShowReceiveMoney] = useState(false);
  const [change, setChange] = useState(0);
  const [phone, setPhone] = useState("");
  const [receiveBtnValid, setReceiveBtnValid] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    setDiscount((discountPercent / 100) * total);
    setVat(0.05 * total);
    setGrandTotal(total - discount + vat);
    setChange(paid - grandTotal);
  }, [total, discountPercent, vat, discount, paid, grandTotal]);

  // get medicine data
  useEffect(() => {
    fetch("/data/medicines.json")
      .then((res) => res.json())
      .then((data) => setMedicines(data));
  }, []);

  const handleDiscount = (e) => {
    setDiscountPercent(e.target.value);
  };
  const handlePaid = (e) => {
    setPaid(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  // create select options for medicine
  const options = [];

  medicines.forEach((medicine) => {
    const value = medicine.id;
    const label = medicine.name;
    const newOption = { value, label };
    options.push(newOption);
  });

  console.log(selectedOption);

  const handleReceiveMoney = () => {
    // Check if the number is exactly 11 digits and starts with 01
    if (/^(01[3-9])\d{8}$/.test(phone)) {
      setShowReceiveMoney(true);
    } else {
      toast.error("Enter valid phone number");
    }
  };
  return (
    <div>
      <Helmet>
        <title>Medical Store | Create Bill</title>
      </Helmet>
      <div className="bg-white py-5 px-20 border-l-2">
        <h2 className="text-2xl font-semibold">Create bill</h2>
        <div className="flex items-center justify-between">
          <div className=" w-[350px]">
            <div className="label">
              <span className="label-text text-base">Add Medicine</span>
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
          </div>
          <div className="flex gap-5">
            <label className="form-control w-full max-w-xs text-base">
              <div className="label">
                <span className="label-text text-base">Enter Phone number</span>
              </div>
              <input
                type="text"
                placeholder="01790-200451"
                className="input bg-[#E4E4E4]  w-full max-w-xs text-black"
                maxLength={11}
                onChange={handlePhone}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-base">Discount</span>
              </div>
              <label className="input bg-[#E4E4E4] flex items-center gap-2 text-base">
                <input
                  value={discountPercent}
                  onChange={handleDiscount}
                  type="text"
                  className="grow text-black"
                  // placeholder="5%"
                />
                <span className="btn btn-xs text-base mr-4">auto set</span>
              </label>
            </label>
          </div>
        </div>
      </div>
      <div className="w-full h-[calc(100vh-266px)] bg-[#DDDDDD] p-10">
        <div className="grid grid-cols-3 gap-20">
          <div className="overflow-x-auto bg-white rounded-lg h-full col-span-2">
            <table className="table">
              <tbody className="text-base">
                {medicines.slice(0, 3).map((medicine, idx) => (
                  <CreateBillRow
                    key={idx}
                    medicine={medicine}
                    total={total}
                    setTotal={setTotal}
                    setReceiveBtnValid={setReceiveBtnValid}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div
            className={`${
              showReceiveMoney && "hidden"
            } bg-white rounded-lg col-span-1 py-7 px-10`}
          >
            <h2 className="text-2xl font-semibold ">Total Summery</h2>
            <div className="space-y-5 mt-8 font-medium">
              <div className="flex justify-between ">
                <h4>Total Purchase</h4>
                <p className="font-bold">{total.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <h4>Discount {discountPercent}%</h4>
                <p className="font-bold">-{discount.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <h4>Vat 5%</h4>
                <p className="font-bold">+{vat.toFixed(2)}</p>
              </div>
              <div className="flex justify-between border-t border-dashed border-black pt-5">
                <h4>Total bill</h4>
                <p className="text-xl font-bold">~{grandTotal.toFixed(2)}</p>
              </div>
            </div>
            <button
              disabled={receiveBtnValid || phone.length !== 11}
              onClick={handleReceiveMoney}
              className="btn btn-block text-base bg-[#004FE8] text-white mt-10"
            >
              Receive money
            </button>
          </div>
          <div
            className={`${
              !showReceiveMoney && "hidden"
            } bg-white rounded-lg col-span-1 py-7 px-10`}
          >
            <div className="flex gap-2 items-center">
              <button
                onClick={() => setShowReceiveMoney(false)}
                className="btn btn-sm"
              >
                <BsArrowLeftCircle size={20} />
              </button>

              <h2 className="text-2xl font-semibold">Receive money</h2>
            </div>

            <div className="space-y-5 my-8 font-medium">
              <div className="flex justify-between ">
                <h4>Total bill</h4>
                <p className="text-2xl font-bold">{grandTotal.toFixed(2)}</p>
              </div>
            </div>
            <div className="space-y-5 p-5  border border-[#004FE8] rounded-lg bg-[#F0F5FF]">
              <label className="input input-bordered flex items-center mt-1 w-full text-base font-bold">
                <input
                  onChange={handlePaid}
                  type="number"
                  className="grow"
                  placeholder="-"
                />
                <span className="badge text-base -ml-28">Paid amount</span>
              </label>
              <div className="flex items-center justify-between text-[#004FE8]">
                <h4 className="text-xl font-bold ">Amount return</h4>
                <p className="text-3xl font-bold">{change.toFixed(2)}</p>
              </div>
              <button className="btn btn-block text-base bg-[#004FE8] text-white mt-10">
                Save and Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CustomSingleValue.propTypes = {
  children: PropTypes.any,
};
CustomPlaceholder.propTypes = {
  children: PropTypes.any,
};

export default CreateBill;
