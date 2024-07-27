// pages/page.tsx
"use client";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import MultiSelect from "./components/MultiSelect/MultiSelect";
import styles from "./page.module.scss";
import { GoPlus } from "react-icons/go";
import ToggleButton from "./components/ToggleButton/ToggleButton";

const Page: React.FC = () => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <div className={styles.container}>
      <Header />
      <SideNav />
      <div className={styles.content}>
        <main className={styles.mainContent}>
          <div className={styles.userHeadingWrap}>
            <p className={styles.nameLink}>{"Create User"}</p>
            <div className={styles.userCount}>
              <p className={styles.userCountText}>{"0 Users"}</p>
            </div>
          </div>
          <div
            className={styles.home}
            style={{ minWidth: "55%", maxWidth: "100%", margin: "0 auto" }}
          >
            <div className={styles.mainListWrapper}>
              <div className={styles.margin10}></div>
              <div className={styles.formGroup}>
                <label htmlFor="heading" className={styles.labelText}>
                  Name
                </label>
                <input
                  type="text"
                  id="heading"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="heading" className={styles.labelText}>
                  Work Email
                </label>
                <input
                  type="text"
                  id="heading"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="heading" className={styles.labelText}>
                  Phone Number
                </label>
                <input
                  type="text"
                  id="heading"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="heading" className={styles.labelText}>
                  Create username
                </label>
                <input
                  type="text"
                  id="heading"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="heading" className={styles.labelText}>
                  Create password
                </label>
                <input
                  type="text"
                  id="heading"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <button className={styles.fullLengthButton}>
                Send via email
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
