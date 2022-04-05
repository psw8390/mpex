import React, { useState, useEffect } from "react";
import styles from './matching_preview.module.css';
import PopupMain from '../popupMain/popupMain';
import Calendar from '../datepicker/datepicker';
import Matching from '../matching/matching';
import { db } from "../../service/firebase";
import { collection, getDocs } from "firebase/firestore/lite";


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
      {/* 매칭등록,캘린더 */}
      <div className={styles.matchingUiBox}>
        <div className={styles.matchingRegisterBox}>
          <div className={styles.tagSectionContainer}>
              <PopupMain getList={getList}/>
          </div>
          <div className={styles.tagSectionContainer}>
            <div className={styles.tagSectionItem}>
              <Calendar />
            </div>
          </div>
        </div>
      </div>
      
      <ul>
        {matchingRead.length === 0 
        ? null 
        : matchingRead.map(matching => {
          return <Matching matchingRead={matching} setMatchingRead={setMatchingRead} list={matchingRead} getList={getList} key="uniqueId1"/>
        } 
        )}
      </ul>

    </div>
  )
}


export default MatchingPreview;