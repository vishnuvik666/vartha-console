import React, { useState } from "react";
import styles from "./DataTable.module.scss";

interface User {
  no: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  interests: string;
}

interface DataTableProps {
  data: User[];
  currentPage: number;
  itemsPerPage: number;
}

const DataTable: React.FC<DataTableProps> = ({
  data,
  currentPage,
  itemsPerPage,
}) => {
  const [sortColumn, setSortColumn] = useState<keyof User>("no");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const sortData = (data: User[]) => {
    return [...data].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn])
        return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn])
        return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  };

  const currentItems = sortData(data).slice(indexOfFirstItem, indexOfLastItem);

  const handleSort = (column: keyof User) => {
    setSortDirection(
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc"
    );
    setSortColumn(column);
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th} onClick={() => handleSort("no")}>
            No {sortColumn === "no" && (sortDirection === "asc" ? "▲" : "▼")}
          </th>
          <th className={styles.th} onClick={() => handleSort("firstName")}>
            First Name{" "}
            {sortColumn === "firstName" &&
              (sortDirection === "asc" ? "▲" : "▼")}
          </th>
          <th className={styles.th} onClick={() => handleSort("lastName")}>
            Last Name{" "}
            {sortColumn === "lastName" && (sortDirection === "asc" ? "▲" : "▼")}
          </th>
          <th className={styles.th} onClick={() => handleSort("phoneNumber")}>
            Phone Number{" "}
            {sortColumn === "phoneNumber" &&
              (sortDirection === "asc" ? "▲" : "▼")}
          </th>
          <th className={styles.th} onClick={() => handleSort("email")}>
            Email{" "}
            {sortColumn === "email" && (sortDirection === "asc" ? "▲" : "▼")}
          </th>
          <th className={styles.th} onClick={() => handleSort("interests")}>
            Interests{" "}
            {sortColumn === "interests" &&
              (sortDirection === "asc" ? "▲" : "▼")}
          </th>
        </tr>
      </thead>
      <tbody>
        {currentItems.map((user) => (
          <tr key={user.no} className={styles.tr}>
            <td className={styles.td}>{user.no}</td>
            <td className={styles.td}>{user.firstName}</td>
            <td className={styles.td}>{user.lastName}</td>
            <td className={styles.td}>{user.phoneNumber}</td>
            <td className={styles.td}>{user.email}</td>
            <td className={styles.td}>{user.interests}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
