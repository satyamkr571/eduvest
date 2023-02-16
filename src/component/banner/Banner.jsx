import React, { useState } from "react";
import styles from "./Banner.module.scss";
import Cards from "../../UI/card/Cards";
import Modal from "antd/es/modal/Modal";
import StudentForm from "../form/student_form/StudentForm";

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const clickHandler = (item) => {
    if (item === "Career Guide") {
      setIsModalOpen(!isModalOpen);
    }
  };
  const courseList = ["Career Guide", "Masters", "MBA", "PHD"];
  return (
    <div className={styles.banner_container}>
      <div className={styles.banner__head}>Invest In Education</div>
      <div className={styles.banner__card}>
        {courseList.map((items) => (
          <Cards key={items} onClick={() => clickHandler(items)}>
            {items}
          </Cards>
        ))}
      </div>
      <Modal
        title={<h2>Book your tutor</h2>}
        open={isModalOpen}
        onOk={handleOk}
        width={800}
        onCancel={handleCancel}>
        <StudentForm />
      </Modal>
    </div>
  );
};

export default Banner;
