import React from "react";
import { HiCurrencyDollar  } from "react-icons/hi";

const InputRange = ({ valueMin, setValueMin, valueMax, setValueMax }) => {

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US').format(amount);
  };

  const cleanComma = (number) => {
    return number.replace(/,/g, '');
  };


  return (
    <div  style={{display:'flex', flexDirection: 'row'}}>
      <div className="flexCenter search-bar">
        <HiCurrencyDollar  color="var(--blue)" size={25} />
        <input
          placeholder="Minimo $ "
          type="text"
          value={formatCurrency(valueMin)}
          onChange={(e) => setValueMin(cleanComma(e.target.value))}
        />
      </div>
      <div className="flexCenter search-bar">
        <HiCurrencyDollar  color="var(--blue)" size={25} />
        <input
          placeholder="Maximo $ "
          type="text"
          value={formatCurrency(valueMax)}
          onChange={(e) => setValueMax(cleanComma(e.target.value))}
        />
      </div>
    </div>
  );
};

export default InputRange;
