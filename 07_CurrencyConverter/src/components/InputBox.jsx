import React, { useId } from "react";

function InputBox({
  label, //matlab aap 'from' me value pass kar rahe ho ya 'to' pass kar rahe ho , example 'from' this 'to' that
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [], //array lagaya he taki user ager kuch pass na kare toh atleast app crash na ho
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {

  const amountInputId = useId(); //random string values ka use krke ek unique value mil jayegi

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          // jo bhi unique value ayi he use bind kardenge
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            //ye syntax taki crash na ho aur pehle check karle ki onAmountChange naam ka kuch he bhiki nahi
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            // Note: jab bhi loop laga rahe jsx ke ander to key pass karni padti he
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
//ek nayi file banake uska naam dedo index.js , matlab ki jitne bhi components he ham unko yaha late he aur yaha se export karte he
