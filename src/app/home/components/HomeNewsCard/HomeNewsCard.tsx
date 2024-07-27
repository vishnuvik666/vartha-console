import React from 'react';
import styles from '../../page.module.scss';
import { FaEdit } from 'react-icons/fa';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { CiCalendar } from 'react-icons/ci';
import { FaRegNewspaper } from 'react-icons/fa6';
import Pagination from '@/components/Pagination/Pagination';
import Image from 'next/image';

export default function HomeNewsCard({
  status,
  onClickCalendar,
  onClickRemove,
  onClickEditAndView,
}: any) {
  return (
    <div className={styles.home}>
      {/* <BigCard data={sampleData} /> */}
      <div className={styles.mainListWrapper}>
        <div className={styles.listTop}>
          <p className={styles.toBePublishedText}>{status}</p>
          <div onClick={onClickCalendar} className={styles.calendarBtn}>
            <CiCalendar />
            <p className={styles.optionText}>Today July 25</p>
          </div>
        </div>
      </div>
      {[1, 2]?.map((val) => {
        return (
          <div className={styles.singleNewsWrapper}>
            <div className={styles.singleNewTopOptionWrapper}>
              <div className={styles.singleNewHeading}>
                <p className={styles.newsText}>Weather,Rain,Flood</p>
              </div>
              <div className={styles.newsMainOptions}>
                <div onClick={onClickEditAndView} className={styles.otherBtn}>
                  <p className={styles.optionText}>Edit/View</p>
                  <FaEdit color="#26A311" />
                </div>
                <div onClick={onClickRemove} className={styles.otherBtn}>
                  <p className={styles.optionText}>Remove</p>
                  <IoIosRemoveCircleOutline color="#E91B1B" />
                </div>
                <div className={styles.otherBtn}>
                  <p className={styles.optionText}>Keep on Hand</p>
                </div>
                <div className={styles.publishBtn}>
                  <p className={styles.publishText}>PUBLISH</p>
                </div>
              </div>
            </div>
            <div className={styles.newsMatterWrap}>
              <div className={styles.imageWrapper}>
                <div className={styles.image}>
                  {/* <img src="https://via.placeholder.com/100" /> */}
                  <Image
                    src="https://via.placeholder.com/100"
                    alt="Placeholder image"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className={styles.newContentWrapper}>
                <p className={styles.newContentText}>
                  Cyclone Biparjoy: Navy teams on standby for relief opsNavy
                  teams on standby for relief opsNavy teams on standby for
                  relief opsNavy teams on standby for relief opsNavy teams on
                  standby for relief opsNavy teams on standby for relief opsNavy
                  teams on standby for relief ops
                </p>
              </div>
              {/* <div className={styles.authorWrap}>
              <p className={styles.newsText}>SubEditor</p>
            </div> */}
            </div>
            <div className={styles.timelineWrapper}>
              <p className={styles.optionText}>Timeline ( 2 )</p>
              {[1, 2, 3]?.map((val) => {
                return (
                  <div className={styles.timeLineNewsWrapper}>
                    <div className={styles.timelineCount}></div>
                    <div className={styles.timelineimageWrapper}>
                      {/* <img src="https://via.placeholder.com/100" /> */}
                      <Image
                        src="https://via.placeholder.com/100"
                        alt="Placeholder image"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className={styles.timeLinenewContentWrapper}>
                      <p className={styles.timeLinenewContentText}>
                        Cyclone Biparjoy: Navy teams on standby for relief
                        opsNavy teams on standby for relief opsNavy teams on
                        standby for relief opsNavy teams on standby for relief
                        opsNavy teams on standby for relief opsNavy teams on
                        standby for relief opsNavy teams on standby for relief
                        ops
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.newsFooter}>
              <p className={styles.footerText}>News | Jan 27 2023</p>
              <p className={styles.footerText}>8:25 AM</p>
            </div>
          </div>
        );
      })}
      <div>
        <Pagination totalPages={25} />
      </div>
    </div>
  );
}
