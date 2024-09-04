import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import Image from "next/image";
import styles from "./Header.module.scss"; // Ensure correct import path
import UserPic from "../../../public/profile-pic.png";
import { useRouter } from "next/navigation";

interface Props {
  username?: string;
  userRole?: string;
  onClickProfile?: () => void;
}

const Header: React.FC<Props> = ({
  username,
  userRole,
  onClickSignOut,
}: any) => {
  const router = useRouter();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const onClickProfile = () => {
    router.push("/profile");
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <p className={styles.homeLink}></p>
      </div>
      <div className={styles.right}>
        <FaBell className={styles.icon} />
        <div className={styles.profile} onClick={toggleDropdown}>
          <div className={styles.userInfo}>
            <span className={styles.username}>{"Vishnu Vikram"}</span>
            <span className={styles.userRole}>{"Editor"}</span>
          </div>
          <div className={styles.profilePic}>
            <Image
              src={UserPic}
              alt="Profile"
              width={40}
              height={40}
              layout="fixed"
              className={styles.image}
            />
          </div>
          {dropdownVisible && (
            <div className={styles.dropdown}>
              <ul>
                <div onClick={onClickProfile}>
                  <li>My Profile</li>
                </div>
                <div onClick={onClickSignOut}>
                  <li>Sign Out</li>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
