import React from "react";
import CustomModal from "../core/CustomModal";

const Modal = ({
  isOpen,
  onClose,
  inputs,
  onSubmit,
  currentData,
  modalHeading,
}) => {
  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = { ...currentData };
    formData.forEach((value, key) => {
      data[key] = value;
    });
    onSubmit(data);
  };
  const renderInput = (input) => {
    const inputValue = (currentData && currentData[input.key]) || "";

    switch (input.type) {
      case "select":
        return (
          <select
            name={input.key}
            defaultValue={inputValue}
            required={input.required}
            className="border border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 rounded-md shadow-sm p-2 text-sm"
          >
            {input.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case "text":
      case "number":
      case "date":
        return (
          <input
            type={input.type}
            name={input.key}
            defaultValue={inputValue}
            required={input.required}
            placeholder={input.placeholder || ""}
            disabled={input.disabled}
            className="border border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 rounded-md shadow-sm p-2 text-sm"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <CustomModal
        handleSubmit={handleSubmit}
        modalHeading={modalHeading}
        onClose={onClose}
        inputs={inputs}
        renderInput={renderInput}
      />
    </div>
  );
};

export default Modal;