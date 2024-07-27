// components/ToggleButton.tsx
import { useState } from "react";
import styles from "./ToggleButton.module.css";

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={styles.toggleContainer} onClick={handleToggle}>
      <div
        className={`${styles.toggle} ${
          isToggled ? styles.toggleOn : styles.toggleOff
        }`}
      >
        <div
          className={`${styles.knob} ${
            isToggled ? styles.knobOn : styles.knobOff
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleButton;
