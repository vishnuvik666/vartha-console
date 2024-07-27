// pages/page.tsx
"use client";
import React from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import styles from "./page.module.scss";
import Card from "../../components/Card/Card"; // Adjust the path as per your actual structure
import BigCard from "../../components/BigCard/BigCard";
import { FaEdit } from "react-icons/fa";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { FaRegNewspaper } from "react-icons/fa6";

import Image from "next/image";
import Pagination from "../../components/Pagination/Pagination";
import { useRouter } from "next/navigation";
import HomeNewsCard from "./components/HomeNewsCard/HomeNewsCard";

const Page: React.FC = () => {
  const router = useRouter();
  const sampleData = [
    {
      mainImage: "https://via.placeholder.com/300",
      subImages: [
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
      ],
      text: "Sample text 1",
    },
    {
      mainImage: "https://via.placeholder.com/300",
      subImages: [
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
      ],
      text: "Sample text 2",
    },
    // Add more data as needed
  ];

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/create_news");
  };
  return (
    <div className={styles.container}>
      <Header />
      <SideNav />
      <div className={styles.content}>
        <main className={styles.mainContent}>
          <p className={styles.nameLink}>{"News Drafts"}</p>
          <HomeNewsCard status={"News"} />
        </main>
      </div>
    </div>
  );
};

export default Page;
