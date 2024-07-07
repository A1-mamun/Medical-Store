import { FiMinus, FiPlus } from "react-icons/fi";
import { MdOutlineDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const CreateBillRow = ({ medicine, total, setTotal }) => {
  const { name, price, unit } = medicine;
  const [buyUnit, setBuyUnit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(buyUnit * price);
    // setTotal(total + price);
  }, [buyUnit, price]);

  const updateUnit = (e) => {
    const unit = e.target.value;

    console.log(unit);
    if (unit === "") {
      setTotal(total - buyUnit * price);
    } else {
      console.log(unit);
      const unitIncrement = unit - 0;
      console.log(unitIncrement);
      setTotal(total + unitIncrement * price);
    }

    setBuyUnit(parseInt(unit));
    setTotalPrice(buyUnit * price);
  };

  const incrementUnit = () => {
    if (buyUnit < unit) {
      setBuyUnit(buyUnit + 1);
      setTotal(total + price);
    }
  };
  const decrementUnit = () => {
    if (buyUnit > 0) {
      setBuyUnit(buyUnit - 1);
      setTotal(total - price);
    }
  };

  return (
    <tr>
      <td>
        <h4>{name}</h4>
        <div className="flex items-center gap-2">
          <button
            disabled={buyUnit === 0}
            onClick={decrementUnit}
            className="btn btn-circle btn-xs bg-[#004FE8] text-white"
          >
            <FiMinus />
          </button>
          <label className="input input-bordered flex items-center mt-1 max-w-[150px]">
            <input
              value={buyUnit}
              onChange={updateUnit}
              min="0"
              type="number"
              className="grow"
              placeholder="-"
            />
            <span className="badge -ml-28">unit</span>
          </label>
          <button
            disabled={buyUnit >= unit}
            onClick={incrementUnit}
            className="btn btn-circle btn-xs bg-[#004FE8] text-white"
          >
            <FiPlus />
          </button>
        </div>
      </td>
      <td className="">
        <h4>Price per unit</h4>
        <p>{price}</p>
      </td>
      <td>
        <h4>Total</h4>
        <p>{totalPrice}</p>
      </td>
      <td className="">
        <div>
          <button className="btn btn-xs">
            <MdOutlineDeleteForever size={15} />
          </button>
        </div>
      </td>
    </tr>
  );
};

CreateBillRow.propTypes = {
  medicine: PropTypes.object,
  total: PropTypes.number,
  setTotal: PropTypes.func,
};

export default CreateBillRow;