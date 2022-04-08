import React from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBasketballBall } from "@fortawesome/free-solid-svg-icons";
import { faGithub  } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className={styles.footerBox}>
        <div>
          <FontAwesomeIcon icon={faBasketballBall} className="faBasketballBall" />  
          2022 Hantol - All rights reserved
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} className="faEnvelope" />
          psw8390@gmail.com
        </div>
        <div>
          <FontAwesomeIcon icon={faGithub} className="faGithub" />
          https://github.com/psw9058
        </div>
    </div>
  )
}

export default Footer;