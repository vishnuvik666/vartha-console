"use client";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import styles from "./page.module.scss";
import DataTable from "../../components/DataTable/DataTable";
import Pagination from "../../components/PaginationUser/PaginationUser";
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const sampleData = [
    {
      no: 1,
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-456-7890",
      email: "john.doe@example.com",
      interests: "Reading",
    },
    {
      no: 2,
      firstName: "Jane",
      lastName: "Smith",
      phoneNumber: "234-567-8901",
      email: "jane.smith@example.com",
      interests: "Traveling",
    },
    {
      no: 3,
      firstName: "Emily",
      lastName: "Johnson",
      phoneNumber: "345-678-9012",
      email: "emily.johnson@example.com",
      interests: "Cooking",
    },
    {
      no: 4,
      firstName: "Michael",
      lastName: "Brown",
      phoneNumber: "456-789-0123",
      email: "michael.brown@example.com",
      interests: "Sports",
    },
    {
      no: 5,
      firstName: "Sarah",
      lastName: "Davis",
      phoneNumber: "567-890-1234",
      email: "sarah.davis@example.com",
      interests: "Music",
    },
    {
      no: 6,
      firstName: "David",
      lastName: "Wilson",
      phoneNumber: "678-901-2345",
      email: "david.wilson@example.com",
      interests: "Traveling",
    },
    // Add more data as needed
  ];

  const totalPages = Math.ceil(sampleData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.container}>
      <Header />
      <SideNav />
      <div className={styles.content}>
        <main className={styles.mainContent}>
          <p className={styles.nameLink}>{"No. Of Users Per Month"}</p>
          <DataTable
            data={sampleData}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </main>
      </div>
    </div>
  );
};

export default Page;
