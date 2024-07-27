// pages/page.tsx
"use client";
import React, { useRef, useState } from "react";
import styles from "../page.module.scss";
import { GoPlus } from "react-icons/go";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import SideNav from "@/components/SideNav/SideNav";
import MultiSelect from "../components/MultiSelect/MultiSelect";
import ToggleButton from "../components/ToggleButton/ToggleButton";

const Page: React.FC = () => {
  const router = useRouter();
  const [heading, setHeading] = useState("");
  const [language, setLanguage] = useState("");
  const [relatedNews, setRelatedNews] = useState("");
  const [description, setDescription] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedTagOptions, setSelectedTagOptions] = useState<string[]>([]);
  const options = [
    "World",
    "Weather",
    "Environment",
    "Economy",
    "Technology",
    "Nature",
    "Health",
    "Science",
    "Crime",
    "Education",
    "Law today ",
    "Magazine",
  ];
  const tagOptions = [
    "World",
    "Weather",
    "Environment",
    "Economy",
    "Technology",
    "Nature",
    "Health",
    "Science",
    "Crime",
    "Education",
    "Law today ",
    "Magazine",
  ];
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef?.current?.click();
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      // Handle the selected file here
    }
  };

  const onClickSubmit = () => {
    router.push("/home");
  };

  return (
    <div className={styles.container}>
      <Header />
      <SideNav />
      <div className={styles.content}>
        <main className={styles.mainContent}>
          <p className={styles.nameLink}>{"Create News"}</p>
          <div className={styles.home}>
            <div className={styles.mainListWrapper}>
              <div className={styles.listTop}>
                <p className={styles.toBePublishedText}>Enter News Details</p>
              </div>
              <div className={styles.uploadImageWrapper}>
                <div>
                  <p className={styles.labelText}>Headline Image or video</p>
                  <div
                    onClick={handleDivClick}
                    className={styles.mainImageWrapper}
                  >
                    <GoPlus color="#9B51E0" />
                    <p className={styles.uploadText}>Upload Image</p>
                    <input
                      type="file"
                      accept="image/*,video/*"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
                <div>
                  <div className={styles.margin10}></div>
                  <div className={styles.subImageWrapper}>
                    <GoPlus color="#9B51E0" />
                    <p className={styles.uploadText}>Upload Image</p>
                    <input
                      type="file"
                      accept="image/*,video/*"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </div>
                  <p className={styles.labelText}>Optional</p>
                  <div className={styles.subImageWrapper}>
                    <GoPlus color="#9B51E0" />
                    <p className={styles.uploadText}>Upload Image</p>
                    <input
                      type="file"
                      accept="image/*,video/*"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.margin10}></div>
              <div className={styles.formWrapper}>
                <div className={styles.formGroup}>
                  <label htmlFor="heading" className={styles.labelText}>
                    Add headline
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
                  <label htmlFor="multiSelect" className={styles.labelText}>
                    Choose Category
                  </label>
                  <MultiSelect
                    options={options}
                    selectedOptions={selectedOptions}
                    setSelectedOptions={setSelectedOptions}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="multiSelect" className={styles.labelText}>
                    Add tag
                  </label>
                  <MultiSelect
                    options={tagOptions}
                    selectedOptions={selectedTagOptions}
                    setSelectedOptions={setSelectedTagOptions}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="description" className={styles.labelText}>
                    Input articles....
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={styles.textArea}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="language" className={styles.labelText}>
                    Language
                  </label>
                  <input
                    type="text"
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className={styles.inputField}
                  />
                </div>
                <div className={styles.timeLineWrapper}>
                  <p className={styles.timelineText}>Add to Timeline</p>
                  <div className={styles.createlineWrap}>
                    <p className={styles.createTimelineText}>Create timeline</p>
                    <ToggleButton />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="relatedNews" className={styles.labelText}>
                    Related News
                  </label>
                  <input
                    type="text"
                    id="relatedNews"
                    value={relatedNews}
                    onChange={(e) => setRelatedNews(e.target.value)}
                    className={styles.inputField}
                  />
                </div>
                <button
                  onClick={onClickSubmit}
                  className={styles.fullLengthButton}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
