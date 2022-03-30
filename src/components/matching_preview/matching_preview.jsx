import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './matching_preview.module.css';
import PopupMain from '../popupMain/popupMain';
import Calendar from '../datepicker/datepicker';
import Matching from '../matching/matching';
import { db } from "../../service/firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc} from "firebase/firestore/lite";


const MatchingPreview = ({matchingRepository, addData}) => {
  const navigateState = useNavigate().state;
  const [userId, setUserId] = useState(navigateState && navigateState.id);

  // const createOrUpdateMatching = matching => {
  //   setMatchings(matchings => {
  //     const updated = { ...matchings };
  //     updated[ matching.id] = matching;
  //     return updated;
  //   });
  // matchingRepository.saveMatching(userId, matching);
  // }

{/* 데이터 읽기 */}
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
              <PopupMain matchingRepository={matchingRepository}
              addData={addData} getList={getList}/>
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
          return <Matching matchingRead={matching} setMatchingRead={setMatchingRead} list={matchingRead}/>
        } 
        )}
      </ul>

    </div>
  )
}


export default MatchingPreview;