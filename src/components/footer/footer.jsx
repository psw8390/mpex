import React from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className={styles.footerBox}>
        <div>2022 Psu - All rights reserved</div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} className="faEnvelope" />
          psw8390@gmail.com
        </div>
        <div>
          <FontAwesomeIcon icon={faGithub} className="faGithub" />
          https://github.com/psw9058
        </div>
        <div>
          <FontAwesomeIcon icon={faBootstrap} className="faBootstrab" />
          https://blog.naver.com/psw9058
        </div>
    </div>
  )
}

export default Footer;