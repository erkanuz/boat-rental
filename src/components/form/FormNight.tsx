import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { CustomSelect } from "../ui/index";

interface Data {
  number: number | "";
  date: string;
  selectedOption: string | undefined;
}

export const FormNight: React.FC = () => {
  const [data, setData] = useState<Data>({
    number: "",
    date: "",
    selectedOption: undefined,
  });

  const [invalidFields, setInvalidFields] = useState<string[]>([]);
  const [rawNumberInput, setRawNumberInput] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    if (rawNumberInput === "") {
      setData({ ...data, number: "" });
    }
  }, [rawNumberInput]);

  const calculateRemainder = (value: number | "") => {
    if (value === "" || isNaN(value) || value < 0 || value > 10) {
      return null;
    }
    return 10 - value;
  };

  const remainder = calculateRemainder(data.number);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = validateForm(data);
    if (!isFormValid) return;

    localStorage.setItem("formData", JSON.stringify(data));
    navigate("/checkout");

    console.log("Successful:", data);
  };

  const handleNumberChange = (value: string) => {
    if (value === "" || value === "-" || value === "0") {
      setRawNumberInput(value);
    } else {
      const num = parseInt(value, 10);
      if (!isNaN(num) && num >= 0 && num <= 10) {
        setData({ ...data, number: num });
        setRawNumberInput(value);
      }
    }
  };

  const validateForm = (data: Data): boolean => {
    const invalidFields: string[] = [];

    if (data.number === "" || data.number < 0 || data.number > 10)
      invalidFields.push("number");
    if (!data.date) invalidFields.push("date");
    if (!data.selectedOption) invalidFields.push("selectedOption");

    setInvalidFields(invalidFields);
    return invalidFields.length === 0;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between space-y-5"
    >
      <div>
        <label htmlFor="number" className="block font-semibold mb-5">
          How many guest?
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="text"
            id="number"
            name="number"
            placeholder="0"
            pattern="[1-9][0-9]*"
            value={data.number}
            onChange={(e) => handleNumberChange(e.target.value)}
            className={`block w-full pl-11 p-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-300 ${
              invalidFields.includes("number")
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <img
              src="/icons/user.svg"
              alt="user"
              className="cursor-pointer w-5 h-5 object-cover"
            />
          </div>
        </div>
        {invalidFields.includes("number") && (
          <div className="text-base-warning text-[10px] mt-1">
            Please enter a number.
          </div>
        )}
      </div>

      <div>
        <label htmlFor="date" className="block font-semibold mb-5">
          Preferred Date
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="date"
            id="date"
            name="date"
            value={data.date}
            onChange={(e) => setData({ ...data, date: e.target.value })}
            className={`block w-full pl-11 p-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-300 ${
              invalidFields.includes("date")
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <img
              src="/icons/calendar.svg"
              alt="calendar"
              className="cursor-pointer h-6 w-6 object-cover z-50"
            />
          </div>
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <img
              src="/icons/drop.svg"
              alt="dropdown"
              className="cursor-pointer bg-base-white w-5 h-5 object-cover"
            />
          </div>
        </div>
        {invalidFields.includes("date") && (
          <div className="text-base-warning text-[10px] mt-1">
            Please select a date.
          </div>
        )}
      </div>

      <div>
        <label htmlFor="InputTime" className="block font-semibold mb-5">
          Time range
        </label>

        <div
          className={`block w-full border rounded-md ${
            invalidFields.includes("date")
              ? "border-red-500"
              : "border-gray-300"
          }`}
        >
          <CustomSelect
            options={[
              "18:00 - 18:30",
              "19:00 - 19:30",
              "20:00 - 20:30",
              "21:00 - 21:30",
            ]}
            onChange={(value) => {
              setData({ ...data, selectedOption: value });
            }}
          />
        </div>
        {invalidFields.includes("selectedOption") && (
          <div className="text-base-warning text-[10px] mt-1">
            Please choose a time.
          </div>
        )}
      </div>

      {data.number !== "" && (
        <div className="flex items-center p-3 bg-[#FEF7D1] rounded-lg">
          <img
            src="/icons/warning.svg"
            alt="warning"
            className="h-7 w-7 mr-2"
          />
          <span className="text-[14px] text-[#0C2A75]">
            {remainder} more places are available for this hour
          </span>
        </div>
      )}

      <button
        type="submit"
        className="bg-base-primary hover:bg-base-primaryDark transition duration-1000 text-base-white font-bold py-3"
      >
        Book Now
      </button>
    </form>
  );
};
