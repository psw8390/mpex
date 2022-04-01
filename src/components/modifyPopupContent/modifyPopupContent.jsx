import React, {useState, useEffect} from 'react';
import MatchingEditForm from '../matching_edit_form/matching_edit_form';
import styles from '../modifyPopupContent/modifyPopupContent.module.css';
import { db } from "../../service/firebase";
import { doc, updateDoc } from "firebase/firestore/lite";


function ModifyPopupContent(props) {
  const {onClose, matchingRead, id, getList} = props;
  const [time, setTime] = useState('')
  const [modifiedMatching, setModifiedMatching] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    setModifiedMatching({
      time: e.target.time.value,
      place: e.target.place.value,
      process: e.target.process.value,
      ask: e.target.ask.value,
      nstr: e.target.nstr.value,
      maxPeople: e.target.maxPeople.value,
    })
  }
  
  useEffect(async() => {
    const docRef = doc(db, "users", id);
    updateDoc(docRef, {
      matching: {
        time: modifiedMatching.time ? modifiedMatching.time : matchingRead.time,
        place: modifiedMatching.place ? modifiedMatching.place : matchingRead.place,
        process: modifiedMatching.process ? modifiedMatching.process : matchingRead.precess,
        ask: modifiedMatching.ask ? modifiedMatching.ask : matchingRead.ask,
        nstr:modifiedMatching.nstr ? modifiedMatching.nstr : matchingRead.nstr,
        maxPeople: modifiedMatching.maxPeople ? modifiedMatching.maxPeople : matchingRead.maxPeople,
      }
    });
    getList();
    onClose();
  }, [modifiedMatching]);

  
  return(
    <div className={styles.dimmed_layer_wrapper}>
      <div className={styles.full_layer}>
        <form className={styles.common_alert} onSubmit={onSubmit}> 
          <h2>매칭 등록 신청</h2>
          <div>
            <MatchingEditForm setTime={setTime} time={time} matchingRead={matchingRead}/>
          </div>
          <div>
            <button type="button" onClick={onClose}>취소</button>
            <input type="submit" value="등록"  onSubmit={onSubmit} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModifyPopupContent;