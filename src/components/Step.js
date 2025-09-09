import React from "react";

const Step = ({ step, formData, errors, handleChange, nextStep, prevStep, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
          <h2>Customer Details</h2>
          <div>
            <label htmlFor="first_name">First Name:</label>
            <br></br>
            <input
              type="text"
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
             <br></br>
          </div>
          <div>
            <label htmlFor="last_name">Last Name:</label>
             <br></br>
            <input
              type="text"
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
             <br></br>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2: Car Info</h2>
          <div>
            <label htmlFor="model">Car Model:</label>
             <br></br>
            <input
              type="text"
              id="model"
              value={formData.model}
              onChange={handleChange}
            />
             <br></br>
          </div>
          <div>
            <label htmlFor="car_price">Car Price:</label>
             <br></br>
            <input
              type="number"
              id="car_price"
              value={formData.car_price}
              onChange={handleChange}
            />
             <br></br>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Payment Details</h2>
          <div>
            <label htmlFor="card_info">Credit Card Number:</label>
             <br></br>
            <br/>
            <input
              type="text"
              id="card_info"
              value={formData.card_info}
              onChange={handleChange}
            />
             <br></br>
            {errors.card_info && <p style={{ color: "red" }}>{errors.card_info}</p>}
          </div>
          <div>
            <label htmlFor="expiry_date">Expiry Date:</label>
             <br></br>
            <input
              type="text"
              id="expiry_date"
              value={formData.expiry_date}
              onChange={handleChange}
            />
            {errors.expiry_date && <p style={{ color: "red" }}>{errors.expiry_date}</p>}
            
          </div>
        </div>
      )}

      <div className="navigation">
        {step > 1 && (
          <button type="button" onClick={prevStep}>
            Previous
          </button>
        )}
        {step < 3 && (
          <button type="button" onClick={nextStep}>
            Next
          </button>
        )}
        {step === 3 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
};

export default Step;
