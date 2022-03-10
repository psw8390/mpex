import {useState, useEffect } from 'react';
import React from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return (() => clearInterval(id))
  }, []);
  
  return (
    <div>
      <span>
        {time.toLocaleString()}
      </span>
    </div>
  )
}

export default Clock;