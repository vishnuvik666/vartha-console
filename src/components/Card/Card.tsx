// components/Card/Card.tsx
import React from "react";
import styles from "./Card.module.scss";
import { FaUserGroup } from "react-icons/fa6";

interface CardProps {
  title: string;
  content: string;
  iconColor?: string;
  iconBgColor?: string;
  type?: string;
  onclickCard?: any;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  iconBgColor = "#fff",
  iconColor,
  type,
  onclickCard,
}) => {
  return (
    <div onClick={() => onclickCard(type)} className={styles.card}>
      <div className={styles.iconWrap} style={{ backgroundColor: iconBgColor }}>
        <FaUserGroup color={iconColor} size={24} />
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
