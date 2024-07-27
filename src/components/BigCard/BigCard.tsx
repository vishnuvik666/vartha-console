// components/BigCard.js
import React from "react";
import InnerCard from "../InnerCard/InnerCard";
import Pagination from "../Pagination/Pagination";
import { RiEditLine, RiDeleteBinLine, RiSendPlane2Line } from "react-icons/ri";
import styles from "./BigCard.module.scss";

const BigCard = ({ data }: any) => {
  return (
    <div className={styles.bigCard}>
      <div className={styles.cardContainer}>
        {/* {data.map((item: any, index: any) => (
          <InnerCard
            key={index}
            mainImage={item.mainImage}
            subImages={item.subImages}
            text={item.text}
          />
        ))} */}
      </div>
      <Pagination />
    </div>
  );
};

export default BigCard;
