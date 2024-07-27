// pages/page.tsx
"use client";
import React from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import styles from "./page.module.scss";
import { CiMail, CiUser } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Page: React.FC = () => {
  const router = useRouter();

  const onclickSave = (e: any) => {
    e.preventDefault();
    router.push("/home");
  };

  return (
    <div className={styles.container}>
      <Header />
      <SideNav />
      <div className={styles.content}>
        <main className={styles.mainContent}>
          <p className={styles.nameLink}>{"Account Settings"}</p>
          <div className={styles.home}>
            <div className={styles.topPartWrap}>
              <div className={styles.profilePicWrap}>
                <Image
                  priority
                  src={require("../../../public/user_image.png")}
                  alt="Vartha Logo"
                />
              </div>
              <div className={styles.profileDataWrap}>
                <p className={styles.userNameText}>{"Hennis Jeorge"}</p>
                <div className={styles.roleMailWrapper}>
                  <div className={styles.roleWrap}>
                    <div className={styles.roleIconWrap}>
                      <CiUser />
                    </div>
                    <p className={styles.roleMailText}>{"Editor"}</p>
                  </div>
                  <div className={styles.roleWrap}>
                    <div className={styles.roleIconWrap}>
                      <CiMail />
                    </div>
                    <p className={styles.roleMailText}>{"vishnu@reviens.in"}</p>
                  </div>
                </div>
                <div className={styles.roleMailWrapper}>
                  <div className={styles.newsDetailsWrap}>
                    <p className={styles.countText}>100</p>
                    <p className={styles.labelText}>Published News</p>
                  </div>
                  <div className={styles.newsDetailsWrapPending}>
                    <p className={styles.countText}>100</p>
                    <p className={styles.labelText}>Pending News</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.home}>
            <p className={styles.profileDetailsText}>Profile Details</p>
            <div className={styles.bottomPartWrap}>
              <p className={styles.bottomLabelText}>Profile Picture</p>
              <div className={styles.profilePicProfileWrap}>
                <Image
                  priority
                  src={require("../../../public/user_image.png")}
                  alt="Vartha Logo"
                />
              </div>
            </div>
            <div className={styles.formContainer}>
              <label htmlFor="firstName" className={styles.label}>
                Full Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className={styles.input}
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className={styles.input}
              />
            </div>
            <div className={styles.formContainer}>
              <label htmlFor="firstName" className={styles.emaillabel}>
                Email
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Email"
                className={styles.emailinput}
              />
            </div>
            <div className={styles.formContainer}>
              <label htmlFor="firstName" className={styles.phonelabel}>
                Phone
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Phone"
                className={styles.phoneinput}
              />
            </div>
            <div className={styles.btnWrapper}>
              <div className={styles.discardBtn}>
                <p>Discard</p>
              </div>
              <div onClick={onclickSave} className={styles.submitBtn}>
                <p>Save Changes</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
