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

  useEffect(() => {
    setDiscount((discountPercent / 100) * total);
    setVat(0.05 * total);
    setGrandTotal(total - discount + vat);
    setChange(paid - grandTotal);
  }, [total, discountPercent, vat, discount, paid, grandTotal]);
  const medicines = [
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
      <div className="w-full h-[calc(100vh-256px)] bg-[#DDDDDD] p-10">
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
