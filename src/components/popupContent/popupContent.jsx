import React, {useState, useEffect} from 'react';
import MatchingAddForm from '../matching_add_form/matching_add_form';
import styles from './popupContent.module.css';
import { db } from "../../service/firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc} from "firebase/firestore/lite";


function PopupContent(props) {
  const {matchingRepository, onClose, getList} = props;
  const [time, setTime] = useState('')

  const [matching, setMatching] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    setMatching({
      time: e.target.time.value,
      place: e.target.place.value,
      process: e.target.process.value,
      ask: e.target.ask.value,
      nstr: e.target.nstr.value,
      maxPeople: e.target.maxPeople.value,
    })
  }

  useEffect(async() => {
    const docRef = await addDoc(collection(db, 'users'), 
      {matching}
    )
    getList();
    onClose();
  });

  return(
    <div className={styles.dimmed_layer_wrapper}>
      <div className={styles.full_layer}>
        <form className={styles.common_alert} onSubmit={onSubmit}> 
          <h2>매칭 등록 신청</h2>
          <div>
            <MatchingAddForm matchingRepository={matchingRepository} setTime={setTime} time={time}/>
          </div>
          <div>
            <button type="button" onClick={onClose}>취소</button>
            <input type="submit" value="등록" onSubmit={onSubmit} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default PopupContent;