import React from "react";
import InputField from "./InputField";
import FileUpload from "./FileUpload";
import SubmitButton from "./SubmitButton";

const ComplaintForm = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-center">
        <div className="w-full max-w-lg">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-500 text-white p-5">
              <h2 className="text-2xl font-semibold">Complaint Cell</h2>
            </div>
            <div className="p-6">
              <form id="complaintForm">
                {/* Complaint Title */}
                <InputField
                  id="title"
                  label="Complaint Title"
                  type="text"
                  placeholder="Enter the title"
                  required={true}
                />

                {/* Email */}
                <InputField
                  id="email"
                  label="Email ID"
                  type="email"
                  placeholder="Enter your email"
                  required={true}
                />

                {/* Complaint Description */}
                <InputField
                  id="description"
                  label="Complaint Description"
                  type="textarea"
                  placeholder="Describe your complaint"
                  rows="4"
                  required={true}
                />

                {/* Image Upload */}
                <FileUpload id="image" label="Upload Image (Optional)" />

                {/* Submit Button */}
                <SubmitButton />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;
