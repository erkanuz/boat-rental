import { BsCalendar2Date } from "react-icons/bs";
import { CiUser, CiCircleInfo } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CheckoutSelect } from "../ui/Input";

type FormAProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
  onNextStep: () => void;
  invalidFields: string[];
} & UserData;

interface UserData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  additional: string;
  AdultCount: number;
  ChildCount: number;
  date: string;
  selectedTime?: string | undefined;
}
  
export const FormA: React.FC<FormAProps> = ({firstName, lastName, phone, email, AdultCount, ChildCount, selectedTime, date, additional, updateFields, onNextStep, invalidFields}) => {

    const decrement = () => {
      if (AdultCount > 0) {
        updateFields({ AdultCount: AdultCount - 1 });
      }
    }

    const increment = () => {
      if (AdultCount < 10) {
        updateFields({ AdultCount: AdultCount + 1 })
      }
    }

    const second_decrement = () => {
      if (ChildCount > 0) {
        updateFields({ ChildCount: ChildCount - 1 });
      }
    }

    const second_increment = () => {
      if (ChildCount < 10) {
        updateFields({ ChildCount: ChildCount + 1 })
      }
    }

    const handleTimeChange = (value: string | undefined) => {
      updateFields({ selectedTime: value });
    };

    return (
      <div className="flex justify-center">
      <div
        className="grid gap-[100px] w-full mb-40"
      >
        <div>
          <p className="text-[24px] border-b pb-4 mb-10">
            Enter your booking details
          </p>
    
          <div className="grid xl:grid-cols-2 gap-[38px] w-full">
            <div className="flex flex-col justify-between gap-5 xl:gap-0">
              <div className="grid gap-1">
                <label
                  htmlFor="InputDate"
                  className="text-[20px] font-medium"
                >
                  Date <span className="text-red-500">*</span>
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="date"
                    className={`block w-full pl-12 px-3 py-4 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-300 ${invalidFields.includes('date') ? 'border-red-500' : ''}`}
                    value={date}
                    onChange={e => updateFields({ date: e.target.value })}
                  />
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <BsCalendar2Date size={20} className="text-black" />
                  </div>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <MdOutlineKeyboardArrowDown
                      size={24}
                      className="text-black bg-base-white"
                    />
                  </div>
                </div>
              </div>
    
              <div className="grid gap-1">
                <label htmlFor="" className="text-[20px] font-medium">
                  Time Range <span className="text-red-500">*</span>
                </label>
                <div className={`relative h-fit border rounded-md shadow-sm ${invalidFields.includes('selectedTime') ? 'border-red-500' : ''}`}>
                  <CheckoutSelect
                    options={['09:00 - 10:30', '11:00 - 12:30', '13:00 - 14:30', '15:00 - 16:30']}
                    onChange={handleTimeChange}
                    value={selectedTime}
                  />
                </div>
              </div>
            </div>
    
            <div className="grid gap-1">
              <label htmlFor="" className="text-[20px] font-medium">
                Guests <span className="text-red-500">*</span>
              </label>
              <div className="border rounded-md grid p-3 gap-3">
                <div className="flex items-center justify-between w-full pb-3">
                  <div className="flex space-x-3 items-center ">
                    <CiUser size={24} />
                    <p className="text-[20px]">Adults</p>
                  </div>
                  <div 
                  className="flex items-center space-x-5 text-[20px]">
                    <span 
                    className='w-7 h-7 flex justify-center rounded transition hover:-translate-y-1 hover:scale-110 hover:bg-base-primary duration-300 cursor-pointer' onClick={decrement}>-</span>
                    <span
                    className={`${invalidFields.includes('AdultCount') ? 'text-base-warning' : ''}`}>{AdultCount}
                    </span>
                    <span 
                    className='w-7 h-7 flex justify-center rounded transition hover:-translate-y-1 hover:scale-110 hover:bg-base-primary duration-300 cursor-pointer' onClick={increment}>+</span>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full py-3">
                  <div className="flex space-x-3 items-center">
                    <CiUser size={24} />
                    <p className="text-[20px]">Childrens</p>
                  </div>
                  <div 
                  className="flex items-center space-x-5 text-[20px]">
                    <span 
                    className='w-7 h-7 flex justify-center rounded transition hover:-translate-y-1 hover:scale-110 hover:bg-base-primary duration-300 cursor-pointer' onClick={second_decrement}>-</span>
                    <span>{ChildCount}</span>
                    <span 
                    className='w-7 h-7 flex justify-center rounded transition hover:-translate-y-1 hover:scale-110 hover:bg-base-primary duration-300 cursor-pointer' onClick={second_increment}>+</span>
                  </div>
                </div>
                <div className="flex space-x-3 w-full p-3 border rounded-md bg-base-social">
                  <CiCircleInfo
                    size={24}
                    className="bg-base-social text-base-white rounded-full"
                  />
                  <span className="text-[#00536a]">
                    The category is children up the 16 years of age
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[24px] border-b pb-4 mb-10">
            Enter your contact information
          </p>
    
          <div className="grid xl:grid-cols-2 gap-[38px] w-full">
            <div className="grid gap-1">
              <label htmlFor="" className="text-[20px] font-medium">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                maxLength={15}
                className={`px-3 py-4 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-300 ${invalidFields.includes('firstName') ? 'border-red-500' : ''}`}
                value={firstName}
                onChange={e => updateFields({ firstName: e.target.value })}
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="" className="text-[20px] font-medium">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                maxLength={15}
                className={`px-3 py-4 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-300 ${invalidFields.includes('lastName') ? 'border-red-500' : ''}`}
                value={lastName}
                onChange={e => updateFields({ lastName: e.target.value })}
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="" className="text-[20px] font-medium">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name=""
                id=""
                maxLength={13}
                placeholder="+123456789012"
                className={`px-3 py-4 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-300 ${invalidFields.includes('phone') ? 'border-red-500' : ''}`}
                value={phone}
                onChange={e => updateFields({ phone: e.target.value })}
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="" className="text-[20px] font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                maxLength={30}
                placeholder="example@example.com"
                className={`px-3 py-4 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-300 ${invalidFields.includes('email') ? 'border-red-500' : ''}`}
                value={email}
                onChange={e => updateFields({ email: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-[24px] border-b pb-4 mb-10">
            Additional Details
          </p>
          <textarea
            name=""
            id=""
            cols={30}
            rows={6}
            placeholder="Special requirements"
            className={`w-full p-6 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-300 ${invalidFields.includes('additional') ? 'border-red-500' : ''}`}
            value={additional}
            onChange={e => updateFields({ additional: e.target.value })}
          ></textarea>
        </div>
    
        <div className="grid xl:grid-cols-2 gap-20">
          <div className="space-y-2 font-medium text-[22px]">
            <div className="flex justify-between border-t pt-4">
              <span>Boat Rental</span>
              <span>2 250 лв</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span>Reservation Fee</span>
              <span>250 лв</span>
            </div>
            <div className="flex justify-between font-bold text-[25px]">
              <span>Total</span>
              <span>2 500 лв</span>
            </div>
          </div>
    
          <div className="flex flex-col justify-end">
            <div className="flex items-center justify-start space-x-2 mb-5 xl:mx-16 mx-5">
              <input type="checkbox" name="" id="" className='accent-blue-200 transition-all hover:scale-110' />
              <span className="border-l pl-2 text-[18px]">Agree with to the <a href="/" className="text-blue-600">Terms of Conditions</a></span>
            </div>
            <button 
            type="button"
            onClick={onNextStep}
            className="xl:mx-16 mx-5 py-5 bg-base-primary hover:bg-base-primaryDark transition-all duration-700 ease-in-out text-base-white text-[22px] rounded-md cursor-pointer">Next</button>
          </div>
        </div>

      </div>
    </div>
    )
  };