import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './matching_preview.module.css';
import PopupMain from '../popupMain/popupMain';
import Calendar from '../datepicker/datepicker';
import Matching from '../matching/matching';
import { db } from "../../service/firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc} from "firebase/firestore/lite";


const MatchingPreview = ({matchingRepository, addData}) => {
  const [matchings, setMatchings] = useState([
    {
      id: '1',
      time: '09:00~10:00',
      process: '5:5 풀코트',
      phone: '010-0000-0000',
      significant: '게스트비:5000원',
      maxpeople: '15명',
      fileName: 'gym123',
      fileURL: 'gymimg'
    },
    
  ])

  const navigateState = useNavigate().state;
  const [userId, setUserId] = useState(navigateState && navigateState.id);

  const createOrUpdateMatching = matching => {
    setMatchings(matchings => {
      const updated = { ...matchings };
      updated[ matching.id] = matching;
      return updated;
    });
  matchingRepository.saveMatching(userId, matching);
  }




  {/*
  

  useEffect(async() => {
    const docRef = doc(db, "users", "1zyHYn63yjtLvfjv9hKi");
    await updateDoc(docRef, {
      fileName: 'true',
    });
  }, []);

  useEffect(async() => {
    const docRef = doc(db, "users", "tIPAllLXj4Y7hs4b7Z5z");
    await deleteDoc(docRef);
  }, []);
*/}


  return (
<div className={styles.matchingPreviewBox}>
  {/* 매칭등록,캘린더 */}
  <div className={styles.matchingUiBox}>
    <div className={styles.matchingRegisterBox}>
      <div className={styles.tagSectionContainer}>
          <PopupMain matchings={matchings} matchingRepository={matchingRepository}
          addData={addData} />
      </div>
      <div className={styles.tagSectionContainer}>
        <div className={styles.tagSectionItem}>
          <Calendar />
        </div>
      </div>
    </div>
  </div>
  
  <ul>
    {
      matchings.map(matching => (
        <Matching matching={matching} matchingRepository={matchingRepository} addData={addData}/>
      ))}
  </ul>

</div>
  )
}


export default MatchingPreview;