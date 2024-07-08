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
    padding: "5px",
    borderRadius: "5px",
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
  const [paidAmount, setPaidAmount] = useState(0);
  const [showReceiveMoney, setShowReceiveMoney] = useState(false);
  const [changeAmount, setChangeAmount] = useState(0);
  const [phone, setPhone] = useState("");
  const [receiveBtnValid, setReceiveBtnValid] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [medicines, setMedicines] = useState([]);
  const [isValidPaid, setIsValidPaid] = useState(false);

  useEffect(() => {
    setDiscount((discountPercent / 100) * total);
    setVat(0.05 * total);
    setGrandTotal(total - discount + vat);
    setChangeAmount(paidAmount - grandTotal);
    if (paidAmount < grandTotal) setIsValidPaid(false);
    else setIsValidPaid(true);
  }, [total, discountPercent, vat, discount, paidAmount, grandTotal]);

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
    setPaidAmount(e.target.value);
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
    <div className="h-[calc(100vh-88px)]">
      <Helmet>
        <title>Medical Store | Create Bill</title>
      </Helmet>
      <div className="bg-white py-5 px-10 border-l-2 md:h-64 lg:h-40 ">
        <h2 className="text-2xl font-semibold">Create bill</h2>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="  lg:w-[300px]">
            <div className="label">
              <span className="label-text text-sm md:text-base">
                Add Medicine
              </span>
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
          <div className="flex flex-col md:flex-row gap-5">
            <label className="form-control w-full lg:max-w-xs text-sm md:text-base">
              <div className="label">
                <span className="label-text text-sm md:text-base">
                  Enter Phone number
                </span>
              </div>
              <input
                type="text"
                placeholder="01790-200451"
                className="input bg-[#E4E4E4]  text-black"
                maxLength={11}
                onChange={handlePhone}
              />
            </label>
            <label className="form-control w-full lg:max-w-xs">
              <div className="label">
                <span className="label-text text-sm md:text-base">
                  Discount
                </span>
              </div>
              <label className="input bg-[#E4E4E4] flex items-center gap-2 text-sm md:text-base">
                <input
                  value={discountPercent}
                  onChange={handleDiscount}
                  type="text"
                  className="grow text-black"
                />
                <span className="btn btn-xs text-sm md:text-base mr-4">
                  auto set
                </span>
              </label>
            </label>
          </div>
        </div>
      </div>
      <div className="w-full h-screen lg:h-[calc(100%-160px)] bg-[#DDDDDD] p-3 md:p-5 lg:p-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 lg:gap-10 h-full">
          <div className="overflow-x-auto bg-white rounded-lg h-[calc(100%-10px)] md:col-span-2">
            <table className="table">
              <tbody className="text-sm md:text-base">
                {medicines.slice(0, 10).map((medicine, idx) => (
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
            } bg-white rounded-lg col-span-1 py-7 px-10 md:h-[calc(100%-10px)]`}
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
            } bg-white rounded-lg md:col-span-1 py-7 md:px-5 lg:px-10`}
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
                <span className="badge text-base -ml-28 md:hidden">
                  Paid amount
                </span>
              </label>
              <div className=" text-[#004FE8]">
                <h4 className="text-xl font-bold ">Amount return</h4>
                <p className="text-3xl font-bold">{changeAmount.toFixed(2)}</p>
              </div>
              <button
                disabled={!isValidPaid}
                className="btn btn-block text-base bg-[#004FE8] text-white mt-10"
              >
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
