// pages/page.tsx
"use client";
import React, { useState } from "react";
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
import CalendarModal from "@/components/CalendarModal/CalendarModal";
import Modal from "@/components/Modal/Modal";

const Page: React.FC = () => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedNewsId, setSelectedNewsId] = useState(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/create_news");
  };

  const onClickCard = (type: any) => {
    console.log("type", type);
    if (type === "user") {
      router.push("/user");
    }
    if (type === "month") {
      router.push("/user_month");
    }
  };

  const handleDeleteClick = (newsId) => {
    setSelectedNewsId(newsId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedNewsId(null);
  };

  const handleConfirmDelete = () => {
    console.log(`Deleting news with id: ${selectedNewsId}`);
    handleCloseModal();
  };

  const onClickProfile = () => {
    console.log("onClickProfile");
  };

  const onClickEditAndView = () => {
    router.push(`/create_news/1`);
  };
  return (
    <div className={styles.container}>
      <Header onClickProfile={onClickProfile} />
      <SideNav />
      <div className={styles.content}>
        <main className={styles.mainContent}>
          <p className={styles.nameLink}>{"Welcome Vishnu !"}</p>
          <div className={styles.cardWrapper}>
            <Card
              title="1,000"
              content="No. of users Added Today "
              iconBgColor="#FFF9ED"
              iconColor="#FFA800"
              type={"user"}
              onclickCard={(type: any) => onClickCard(type)}
            />
            <Card
              title="58366"
              content="No. of users Per Month"
              iconBgColor="#EBF2FF"
              iconColor="#30569A"
              type={"month"}
              onclickCard={(type: any) => onClickCard(type)}
            />
          </div>
          <CalendarModal isOpen={isModalOpen} onClose={closeModal} />
          <div className={styles.createNewBtnWrapper}>
            <div onClick={handleClick} className={styles.createNewsBtn}>
              <FaRegNewspaper color="#fff" />
              <p className={styles.createNewsText}>Create News</p>
            </div>
          </div>
          <HomeNewsCard
            status={"To be Published"}
            onClickCalendar={openModal}
            onClickRemove={handleDeleteClick}
            onClickEditAndView={onClickEditAndView}
          />
          <HomeNewsCard
            status={"Published News"}
            onClickCalendar={openModal}
            onClickRemove={handleDeleteClick}
            onClickEditAndView={onClickEditAndView}
          />
          <Modal
            show={showModal}
            onClose={handleCloseModal}
            onConfirm={handleConfirmDelete}
            title="Delete News"
            message="Are you sure you want to delete this news item?"
          />
        </main>
      </div>
    </div>
  );
};

export default Page;
