import React, { useEffect, useState } from "react";

import { MdCheck } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";

import { FormA, FormB } from "../components";
import { useLocation, useNavigate } from "react-router-dom";

interface UserDataA {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  AdultCount: number;
  ChildCount: number;
  date: string;
  selectedTime?: string | undefined;
  additional: string;
}

interface UserDataB {
  card_number: string;
  expiration: string;
  cvc: number;
  cardholder: string;
  country?: string | undefined;
}

type AllFormData = UserDataA | UserDataB;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Checkout: React.FC = () => {

  const [step, setStep] = useState(1);
  const [data, setData] = useState<AllFormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    selectedTime: "",
    additional: "",
    AdultCount: 0,
    ChildCount: 0,
    card_number: '',
    expiration: '',
    cvc: 0,
    cardholder: '',
    country: '',
  });

  const [validationErrorMessage, setValidationErrorMessage] = useState<string | null>(null);
  const [invalidFields, setInvalidFields] = useState<string[]>([]);

  const navigate = useNavigate();

  const updateFields = (fields: Partial<AllFormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const handleNextStep = () => {
    const isFormValid = validateForm(data);
    if (!isFormValid) {
      setValidationErrorMessage("incorrect information");
      return;
    }
    setValidationErrorMessage(null);
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const isFormValid = validateForm(data);
    if (!isFormValid) {
      setValidationErrorMessage("incorrect information");
      return;
    }
    setValidationErrorMessage(null);
    navigate('/success');
    console.log("Saved information about the customer's reservation:", data);
  };

  const validateForm = (data: AllFormData): boolean => {
    let currentStepFields: string[] = [];

    if (step === 1) {
      currentStepFields = ['firstName', 'lastName', 'phone', 'email', 'AdultCount', 'selectedTime', 'date', 'additional'];
    } else if (step === 2) {
      currentStepFields = ['card_number', 'expiration', 'cvc', 'cardholder', 'country'];
    }

    const invalidFields: string[] = [];
    for (const field of currentStepFields) {
      const value = data[field as keyof AllFormData];

      if (field === 'phone') {
        // Check phone number format
        if (!/^\+\d{1,12}$/.test(value)) {
          invalidFields.push(field);
        }
      } else if (field === 'email') {
        // Check email format
        if (!/\S+@\S+\.\S+/.test(value)) {
          invalidFields.push(field);
        }
      } else {
        // Check for empty fields
        if (!value) {
          invalidFields.push(field);
        }
      }
    }
    
    setInvalidFields(invalidFields);
    return invalidFields.length === 0;
  };

  return (
    <div className="min-h-screen mx-auto">
      <ScrollToTop />
      <div className="flex items-center justify-center w-full">
        <div className="w-[1600px] px-4">

          {/*IMAGE*/}
          <div className="w-full h-[153px] relative mb-[60px] mt-10">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://images.pexels.com/photos/16403289/pexels-photo-16403289/free-photo-of-a-boat-on-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>

          <div className="flex justify-center">

            <div className="grid max-w-7xl w-full">

              {/*DYNAMIC STEPS*/}
              <div className="flex items-center justify-evenly 2xl:justify-center 2xl:space-x-10 space-x-0 xl:text-[20px] text-[12px] font-medium mb-[72px]">
                <MdCheck size={24} className="text-base-primary" />
                <div
                  className={`space-x-2 ${
                    step === 1 ? "text-base-primary" : "text-base-notSelect"
                  }`}
                >
                  <span className={step >= 1 ? "text-base-primary" : ""}>Select Type Trip</span>
                </div>
                {step === 1 ? <MdKeyboardArrowRight size={24} /> : <MdCheck size={24} className={step >= 2 ? "text-base-primary" : ""} />}
                <div
                  className={`space-x-2 ${
                    step === 2 ? "text-base-primary" : "text-base-notSelect"
                  }`}
                >
                  {(step !== 2 && step !== 3) && <span>2.</span>}
                  <span className={step >= 2 ? "text-base-primary" : ""}>Personal Information</span>
                </div>
                {step === 3 ? <MdCheck size={24} className={step >= 2 ? "text-base-primary" : ""} /> : <MdKeyboardArrowRight size={24} />}
                <div
                  className={`space-x-2 ${
                    step === 3 ? "text-base-primary" : "text-base-notSelect"
                  }`}
                >
                   {step !== 3 && <span>3.</span>}
                   <span className={step >= 3 ? "text-base-primary" : ""}>Payment</span>
                </div>
              </div>

              {/*ERROR MESSAGE*/}
              {validationErrorMessage && <p className="flex items-center gap-4 text-base-white bg-base-declineMessage p-4 rounded-md mb-10"><CiCircleInfo size={24} />{validationErrorMessage}</p>}

              {/*MULTI_STEP_FORM*/}
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <FormA
                    {...(data as UserDataA)}
                    updateFields={updateFields}
                    onNextStep={handleNextStep}
                    invalidFields={invalidFields}
                  />
                )}
                {step === 2 && (
                  <FormB
                    {...(data as UserDataB)}
                    updateFields={updateFields}
                    onNextStep={handleNextStep}
                    onPrevStep={handlePrevStep}
                    handleSubmit={handleSubmit}
                    invalidFields={invalidFields}
                  />
                )}
              </form>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
export default Checkout;