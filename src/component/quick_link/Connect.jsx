import React from "react";
import styles from "./Connect.module.scss";
import {
  MobileOutlined,
  WhatsAppOutlined,
  MailOutlined,
} from "@ant-design/icons";
const Connect = () => {
  return (
    <div className={styles.connect_container}>
      <a
        href="mailto:satyamkr571@gmail.com?subject=Regarding new enquery!"
        target="blank">
        <MailOutlined className={styles.connect__icon} />
      </a>
      <a
        href="//api.whatsapp.com/send?phone=919937132749&text=Hey there!"
        target="blank">
        <WhatsAppOutlined
          className={`${styles.connect__icon} +${styles.connect__icon__whatsapp}`}
        />
      </a>
      <a href="tel:+91 9937132749" target="blank">
        <MobileOutlined className={styles.connect__icon} />
      </a>
    </div>
  );
};

export default Connect;
