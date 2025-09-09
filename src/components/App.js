
import React, { useState } from "react";
import Step from "./Step";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: "",
  });

  const [errors, setErrors] = useState({});

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);


  const validateField = (id, value) => {
    let errorMsg = "";
    if (id === "card_info") {
      const cardRegex = /^\d{12}$/;
      if (!cardRegex.test(value)) {
        errorMsg = "Card number must be exactly 12 digits";
      }
    }
    if (id === "expiry_date") {
      const expiryRegex = /^(0[1-9]|1[0-2])\/\d{4}$/;
      if (!expiryRegex.test(value)) {
        errorMsg = "Expiry date must be in MM/YYYY format";
      }
    }
    return errorMsg;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    const errorMsg = validateField(id, value);
    setErrors({ ...errors, [id]: errorMsg });
  };

  const validateStep3 = () => {
    const newErrors = {};
    newErrors.card_info = validateField("card_info", formData.card_info);
    newErrors.expiry_date = validateField("expiry_date", formData.expiry_date);

    Object.keys(newErrors).forEach((key) => {
      if (!newErrors[key]) delete newErrors[key];
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateStep3()) return;

    console.log("Form submitted:", formData);
  };

  return (
    <div className="app">
      <h1>Multi-Step Form</h1>
      <Step
        step={step}
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        nextStep={nextStep}
        prevStep={prevStep}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
