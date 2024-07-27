import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./MultiSelect.module.scss";

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
  const [showDropdown, setShowDropdown] = useState(false);

  const addOption = (option: string) => {
    if (option && !selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
    }
    setInputValue("");
  };

  const removeOption = (option: string) => {
    setSelectedOptions(
      selectedOptions.filter((selected) => selected !== option)
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue) {
      addOption(inputValue);
    }
  };

  const handleOptionClick = (option: string) => {
    addOption(option);
    setShowDropdown(false);
  };

  const filteredOptions = options.filter(
    (option) =>
      option.toLowerCase().includes(inputValue.toLowerCase()) &&
      !selectedOptions.includes(option)
  );

  return (
    <div className={styles.multiSelectContainer}>
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
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setShowDropdown(true);
        }}
        onKeyDown={handleKeyDown}
        className={styles.inputField}
        placeholder="Select"
      />
      {showDropdown && filteredOptions.length > 0 && (
        <div className={styles.dropdown}>
          {filteredOptions.map((option) => (
            <div
              key={option}
              className={styles.dropdownOption}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
