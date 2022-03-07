import React from "react";
import styles from "./clock.module.css";

function Tick() {
  const element = (
    <div>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

setInterval(tick, 1000);

export default Tick;
