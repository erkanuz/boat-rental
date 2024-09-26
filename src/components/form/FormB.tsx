import React from "react";
import { SelectCountry } from "../ui/Input";
import countries from "../../data/data";

type FormBProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
  onNextStep: () => void;
  onPrevStep: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  invalidFields: string[];
} & UserData;

interface UserData {
  card_number: string;
  expiration: string;
  cvc: number;
  cardholder: string;
  country?: string | undefined;
}
  
export const FormB: React.FC<FormBProps> = ({card_number, expiration, cvc, cardholder, country, updateFields, onPrevStep, handleSubmit, invalidFields }) => {

    const handleCountryChange = (value: string | undefined) => {
      updateFields({ country: value });
    };

    const handleCardNumberFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const formattedValue = inputValue.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ")?.substr(0, 19) || "";
      updateFields({ card_number: formattedValue });
    };

    const handleExpirationFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      // format of "## / ##"
      const formattedValue = inputValue
      .replace(/[^\d/]/g, "") // Remove non-digits and "/"
      .replace(/^(\d{1,2})\/?(\d{0,2})/, (_, p1, p2) => {
        let formattedFirstPart = p1;
        let formattedSecondPart = p2;
        const firstPart = parseInt(p1, 10);
        const secondPart = parseInt(p2, 10);

        if (firstPart > 12) {
          formattedFirstPart = "12";
        }

        if (secondPart > 31) {
          formattedSecondPart = "31";
        }

        if (formattedSecondPart) {
          return `${formattedFirstPart} / ${formattedSecondPart}`;
        } else {
          return formattedFirstPart;
        }
      })
      updateFields({ expiration: formattedValue });
    };

    return (
      <div className="grid xl:grid-cols-2 gap-[227px] mb-80 w-full">
        <div className="text-[#575757]">
          <h3 className="text-[28px] mb-10">Summary</h3>

          <div className="grid gap-3 text-[20px] mb-[74px]">
            <div className="flex justify-between">
              <p>Places (Adults + Children)</p>
              <span>3</span>
            </div>

            <div className="flex justify-between">
              <p>Daily Trip (15:00-16:30)</p>
              <span>2 500.00</span>
            </div>

            <div className="flex justify-between">
              <p>Before tax:</p>
              <span>62.23</span>
            </div>

            <div className="flex justify-between">
              <p>Tax Collected:</p>
              <span>8.21</span>
            </div>
          </div>

          <div className="flex justify-between text-base-black text-[28px] border-t py-[22px]">
            <h3>Order Total:</h3>
            <span>2 570.44</span>
          </div>

          <div className="text-[20px] mb-28">
            <p>By placing your order, you agree to our company</p>
            <p><span className="text-base-black">Privacy policy</span> and <span className="text-base-black">Condutions of use.</span></p>
          </div>

          <p className="text-[22px] text-base-black">Contact info</p>

          <div className="grid gap-3 text-[20px] mt-6">

            <div className="flex space-x-10">
              <span>Name</span>
              <span>Martin Ivanov</span>
            </div>

            <div className="flex space-x-10">
              <span>Phone</span>
              <span>+359 123 123 123</span>
            </div>

            <div className="flex space-x-10">
              <span>Email</span>
              <p>martin.ivanov@gmail.com</p>  
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="grid gap-1 relative">
            <label htmlFor="" className="text-[20px] font-medium">
              Card number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name=""
              id=""
              min="0"
              placeholder="1234 1234 1234 1234"
              inputMode='numeric' autoComplete='cc-number'
              maxLength={19}
              value={card_number}
              onChange={handleCardNumberFormat}
              className={`p-3 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-300 ${invalidFields.includes('card_number') ? 'border-red-500' : ''}`}
            />
            <div className="absolute flex space-x-1.5 right-3 bottom-3.5">
              <img src="/icons/master.svg" className="inset-y-0" alt="" />
              <img src="/icons/visa.svg" className="inset-y-0" alt="" />
              <img src="/icons/express.svg" className="inset-y-0" alt="" />
            </div>
          </div>

          <div className="grid grid-cols-2 xl:gap-4 gap-1 mx-auto">
            <div className="flex flex-col">
              <label htmlFor="" className="text-[20px] font-medium">
                Expiration <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="MM/YY"
                value={expiration}
                maxLength={7}
                onChange={handleExpirationFormat}
                className={`p-3 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-300 ${invalidFields.includes('expiration') ? 'border-red-500' : ''}`}
              />
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="" className="text-[20px] font-medium">
                CVC <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                min="0"
                maxLength={3}
                placeholder="CVC"
                value={cvc === 0 ? '' : cvc}
                onChange={e => updateFields({ cvc: parseInt(e.target.value, 10) || 0 })}
                className={`p-3 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-300 ${invalidFields.includes('cvc') ? 'border-red-500' : ''}`}
              />
              <img src="/icons/vector.png" className="absolute bottom-3.5 right-3" alt="" />
            </div>
          </div>

          <div className="grid gap-1">
            <label htmlFor="" className="text-[20px] font-medium">
              Cardholder name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Full name on card"
              value={cardholder}
              onChange={e => updateFields({ cardholder: e.target.value })}
              className={`p-3 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-300 ${invalidFields.includes('cardholder') ? 'border-red-500' : ''}`}
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="" className="text-[20px] font-medium">
              Select Country <span className="text-red-500">*</span>
            </label>
            <div className={`relative h-fit border rounded-md shadow-sm ${invalidFields.includes('country') ? 'border-red-500' : ''}`}>
              <SelectCountry
                options={countries}
                onChange={handleCountryChange}
                value={country}
              />
            </div>
          </div>
          <div className="grid gap-6 mt-6">
                  <button
                      type="button"
                      onClick={handleSubmit}
                      className="bg-base-primary hover:bg-base-primaryDark transition-all duration-700 ease-in-out text-base-white text-[22px] py-5 rounded-md cursor-pointer"
                  >
                      Finish
                  </button>
                  <button
                      type="button"
                      onClick={onPrevStep}
                      className="bg-base-primary hover:bg-base-primaryDark transition-all duration-700 ease-in-out text-base-white text-[22px] py-5 rounded-md cursor-pointer"
                  >
                      Back
                  </button>
            </div>
        </div>
      </div>
    );
  };