import React from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className={styles.footerBox}>
        <div>Contact Me!</div>
        <div>psw8390@gmail.com</div>
        <div>
        <FontAwesomeIcon icon={faGithub} className="faGithub" />
        <FontAwesomeIcon icon={faBootstrap} className="faBootstrab" />
        </div>
        <div>2022 Psu - All rights reserved</div>
    </div>
  )
}

export default Footer;