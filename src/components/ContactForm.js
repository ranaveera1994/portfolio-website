import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
    purpose: "",
    email: ""
  });

  const [submissionResult, setSubmissionResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.message || !formData.purpose || !formData.email) {
      setSubmissionResult({ error: "Error submitting the form. Please fill all the details" });
      return;
    }

    console.log("Form data", formData);

    try {
      const response = await fetch("https://yxvsy6hsih.execute-api.us-east-1.amazonaws.com/Prod/validate", {
        mode:  'cors',
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const result = await response.json();
      setSubmissionResult(result);

      // Handle successful response, if needed
      console.log("Form submitted successfully:", result);
    } catch (error) {
      console.error("Error submitting the form:", error.message);
      // Handle the error as needed
      setSubmissionResult({ error: error.message });
    }
  };

  const handleCloseBanner = () => {
    setSubmissionResult(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full py-16 text-white flex flex-col items-center">
        <label className="py-5">
          First Name:
          <input
            className="px-5 w-full rounded-md text-black"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </label>

        <label className="py-5">
          Last Name:
          <input
            className="px-5 w-full rounded-md text-black"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </label>

        <label className="py-5">
          Message:
          <textarea
            className="px-5 w-full rounded-md text-black"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </label>

        <label className="py-5">
          Purpose of the visit:
          <div>
            <input
              type="radio"
              id="casual"
              name="purpose"
              value="casual"
              checked={formData.purpose === "casual"}
              onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
            />
            <label htmlFor="casual" className="ml-2">
              Stumbled upon this site.
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="job"
              name="purpose"
              value="job"
              checked={formData.purpose === "job"}
              onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
            />
            <label htmlFor="job" className="ml-2">
              Wanted to chat about a position
            </label>
          </div>
        </label>

        <label className="py-5">
          Email:
          <input
            className="px-5 w-full rounded-md text-black"
            type="text"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </label>

        <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3" type="submit">
          Submit
        </button>

        {submissionResult && (
          <div>
            {submissionResult.error ? (
              <div className="inline-flex items-center">
                <p className="bg-[#e11d48] rounded-md font-medium text-white flex flex-col items-center justify-center w-[500px] ml-6 my-2 px-4 py-3 ">
                  {submissionResult.error}{" "}
                </p>
                <button className="ml-4" onClick={handleCloseBanner}>
                  X
                </button>
              </div>
            ) : (
              <div className="inline-flex items-center">
                <p className="bg-[#16a34a] rounded-md font-medium text-white flex flex-col items-center justify-center w-[500px] ml-6 my-2 px-4 py-3 ">
                  {submissionResult.body}{" "}
                </p>
                <button className="ml-4" onClick={handleCloseBanner}>
                  X
                </button>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
