"use client";
import React, { useState } from "react";
import styles from "./SideNav.module.scss";
import VarthaLogo from "../../../public/VarthaLogo.svg";
import Image from "next/image";
import { FaHome, FaUsers, FaRegFileAlt, FaRegEdit } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface Option {
  id: string;
  title: string;
  Icon: JSX.Element;
  isSelected: boolean;
}

const SideNav: React.FC = () => {
  const router = useRouter();
  const [options, setOptions] = useState<Option[]>([
    {
      id: "1",
      title: "Dashboard",
      Icon: <FaHome className={styles.icon} />,
      isSelected: false,
    },
    {
      id: "2",
      title: "Users",
      Icon: <FaUsers className={styles.icon} />,
      isSelected: false,
    },
    {
      id: "3",
      title: "Published News",
      Icon: <FaRegFileAlt className={styles.icon} />,
      isSelected: false,
    },
    {
      id: "4",
      title: "News Drafts",
      Icon: <FaRegEdit className={styles.icon} />,
      isSelected: false,
    },
    {
      id: "5",
      title: "Pending News",
      Icon: <FaClockRotateLeft className={styles.icon} />,
      isSelected: false,
    },
  ]);

  const handleSelect = (optionId: string) => {
    // Update state with selected option
    setOptions((prevOptions) =>
      prevOptions.map((option) => ({
        ...option,
        isSelected: option.id === optionId,
      }))
    );

    // Navigate based on selected option
    switch (optionId) {
      case "1":
        router.push("/home");
        break;
      case "2":
        router.push("/create_user");
        break;
      case "5":
        router.push("/pending_news");
        break;
      case "3":
        router.push("/published_news");
        break;
      case "4":
        router.push("/news_drafts");
        break;
      default:
        break;
    }
  };

  return (
    <nav className={styles.sidenav}>
      <header className={styles.header}>
        <Image priority src={VarthaLogo} alt="Vartha Logo" />
      </header>
      <div className={styles.nav}>
        <ul className={styles.navList}>
          {options.map((option) => (
            <li
              key={option.id}
              className={`${styles.navOption} ${
                option.isSelected ? styles.selected : ""
              }`}
              onClick={() => handleSelect(option.id)}
            >
              {option.Icon}
              <span className={styles.navLink}>{option.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;
