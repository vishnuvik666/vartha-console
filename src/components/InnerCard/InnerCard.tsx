// components/InnerCard.js
import React from 'react';
import { RiEditLine, RiDeleteBinLine, RiSendPlane2Line } from 'react-icons/ri';
import styles from './InnerCard.module.scss';
import Image from 'next/image';

const InnerCard = ({ mainImage, subImages, text }: any) => {
  return (
    <div className={styles.innerCard}>
      <div className={styles.actions}>
        <RiEditLine />
        <RiDeleteBinLine />
        <RiSendPlane2Line />
      </div>
      <div className={styles.content}>
        {/* <img src={mainImage} alt="Main" /> */}
        <Image
          src={mainImage}
          alt="Placeholder image"
          // width={100}
          // height={100}
        />
        {/* <div className={styles.subImages}>
          {subImages.map((image: any, index: any) => (
            <img key={index} src={image} alt={`Sub ${index}`} />
          ))}
        </div> */}
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InnerCard;
