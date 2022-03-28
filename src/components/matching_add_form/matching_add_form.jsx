import React, { useState, useEffect } from "react";
import styles from './matching_add_form.module.css';

import { db } from "../../service/firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc} from "firebase/firestore/lite";

function MatchingAddForm(props) {
  const {setTime, time} = props;

  let [inputValue, setInputValue] = useState("");
  console.log(inputValue)
  
  useEffect(async() => {
    const docRef = await addDoc(collection(db, 'users'), {
      time: {inputValue},
    })
  }, []);

  return(
    <div className={styles.matchingAddFormBox}>
      <form className={styles.matchigBox} action="data.html">
        <div className={styles.filebox}> 
          <label htmlFor="ex_file" className='fileboxlabel'>체육관 이미지 업로드</label> 
          <input type="file"></input>
        </div>

        <div className={styles.matchingInfo}>
          <input type="text" placeholder='시간:' value={time} onChange={(e) => setTime(e.target.value)}></input>
          <input onChange={(event) => setInputValue(event.target.value)}
          placeholder='장소명:'></input>
          <input placeholder='진행방식:'></input>
          <input placeholder='문의:'></input>
          <input placeholder='특이사항:'></input>
          <input placeholder='모집인원:'></input>
        </div>
      </form>
    </div>
      
  )
}

export default MatchingAddForm;