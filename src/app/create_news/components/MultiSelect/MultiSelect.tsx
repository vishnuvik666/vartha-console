import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./MultiSelect.module.scss";
import Modal from "../Modal/Modal";

interface MultiSelectProps {
  options: string[];
  selectedOptions: string[];
  setSelectedOptions: (options: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selectedOptions,
  setSelectedOptions,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);

  const addOption = (option: string) => {
    if (option && !selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
    }
    setInputValue("");
    // setShowModal(false);
  };

  const removeOption = (option: string) => {
    setSelectedOptions(
      selectedOptions.filter((selected) => selected !== option)
    );
    if (inputValue === option) {
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue) {
      addOption(inputValue);
    }
  };

  const handleOptionClick = (option: string) => {
    addOption(option);
  };

  const filteredOptions = options.filter(
    (option) =>
      option.toLowerCase().includes(inputValue.toLowerCase()) &&
      !selectedOptions.includes(option)
  );

  const onClickOKBtn = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.multiSelectContainer}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setShowModal(true);
        }}
        onKeyDown={handleKeyDown}
        className={styles.inputField}
        placeholder="Select"
        onClick={() => setShowModal(true)}
      />
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div
          className={styles.optionsGrid}
          onClick={(e) => e.stopPropagation()} // Prevent clicks from closing the modal
        >
          {filteredOptions.map((option) => (
            <div
              key={option}
              className={styles.gridOption}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
        <div onClick={onClickOKBtn} className={styles.closeBtn}>
          <p>{"OK"}</p>
        </div>
      </Modal>
      <div className={styles.selectedOptions}>
        {selectedOptions.map((option) => (
          <div className={styles.selectedOption} key={option}>
            {option}
            <FaTimes
              className={styles.removeIcon}
              onClick={() => removeOption(option)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;
