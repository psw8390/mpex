import React, { useState, useEffect } from "react";
import styles from './matching_preview.module.css';
import PopupMain from '../popupMain/popupMain';
// import Calendar from '../datepicker/datepicker';
import Matching from '../matching/matching';
import { db } from "../../service/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import NumOfMatching from '../numOfMatching/numOfMatching';


const MatchingPreview = () => {
  const [matchingRead, setMatchingRead] = useState([]);

  useEffect(() => {
      getList()
    }, []);

  const getList = async() => {
    const query = await getDocs(collection(db, 'users'));
    const arr = []
    query.forEach((doc) => {
      arr.push({...doc.data().matching, id: doc.id})
    });
    setMatchingRead(arr)
  }




  return (
    <div className={styles.matchingPreviewBox}>
      <div className={styles.matchingUiBox}>
        <div className={styles.matchingRegisterBox}>
          <div className={styles.registerBtn}>
              <PopupMain getList={getList} />
          </div>
          <NumOfMatching></NumOfMatching>
        </div>
      </div>
      
      <ul className={styles.matchingUl}>
        {matchingRead.length === 0 
        ? null 
        : matchingRead.map(matching => {
          return <Matching matchingRead={matching} setMatchingRead={setMatchingRead} list={matchingRead} getList={getList} />
        } 
        )}
      </ul>
    </div>
  )
}


export default MatchingPreview;