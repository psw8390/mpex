import React, {useState, useEffect} from 'react';
import MatchingEditForm from '../matching_edit_form/matching_edit_form';
import styles from '../modifyPopupContent/modifyPopupContent.module.css';
import { db } from "../../service/firebase";
import { doc, updateDoc } from "firebase/firestore/lite";

function ModifyPopupContent(props) {
  const {onClose, matchingRead, id, getList} = props;
  const [time, setTime] = useState('')
  const [modifiedMatching, setModifiedMatching] = useState({});
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  

  const onSubmit = (e) => {
    e.preventDefault();
    setModifiedMatching({
      url: url,
      time: e.target.time.value,
      place: e.target.place.value,
      process: e.target.process.value,
      ask: e.target.ask.value,
      nstr: e.target.nstr.value,
      maxPeople: e.target.maxPeople.value,
    });
  }

  
  
  useEffect(async() => {
    const docRef = doc(db, "users", id);
    updateDoc(docRef, {
      matching: {
        url: modifiedMatching.url ? modifiedMatching.url : matchingRead.url,
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
          <h2>매칭 수정 신청</h2>
          <div>
            <MatchingEditForm setTime={setTime} time={time} matchingRead={matchingRead} setUrl={setUrl} loading={loading} setLoading={setLoading}/>
          </div>
          <div>
            <button onClick={onClose}>취소</button>
            <input type="submit" value="수정"  onSubmit={onSubmit} disabled={loading}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModifyPopupContent;