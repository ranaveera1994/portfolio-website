import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
  });

  // const [submissionResult, setSubmissionResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData)

    // try {
    //   const response = await fetch("https://143s4b0pi6.execute-api.us-east-1.amazonaws.com/prod/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Failed to submit the form");
    //   }

    //   const result = await response.json();
    //   setSubmissionResult(result);

    //   // Handle successful response, if needed
    //   console.log("Form submitted successfully:", result);
    // } catch (error) {
    //   console.error("Error submitting the form:", error.message);
    //   // Handle the error as needed
    //   setSubmissionResult({ error: error.message });
    // }
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

        <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3" type="submit">
          Submit
        </button>
      </form>

      {/* {submissionResult && (
        <div>
          <h2>Submission Result:</h2>
          {submissionResult.error ? (
            <p style={{ color: "red" }}>Error: {submissionResult.error}</p>
          ) : (
            <p style={{ color: "green" }}>Success: {submissionResult.body}</p>
          )}
        </div>
      )} */}
    </div>
  );
};

export default ContactForm;
