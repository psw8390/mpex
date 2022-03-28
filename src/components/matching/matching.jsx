import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MatchingEditForm from '../matching_edit_form/matching_edit_form';
import gymImg from "./gymImg.jpeg";
import styles from './matching.module.css';


const DEFAULT_IMAGE = '/images/default_logo.png';

const Matching = ({ matching, matchingRepository, addData }) => {
  const {time, process, phone, significant,maxpeople,fileName,fileURL} = matching;
  const url = fileURL || DEFAULT_IMAGE;


  

  return(
  <>
    <li className={styles.matchingBox}>
    <img src={url} alt="gymImg" className={styles.gymImg} />
    <div className={styles.matchingInfo}>
      <div>시간: {time}</div>
      <div>진행방식: {process}</div>
      <div>문의: {phone}</div>
      <div>특이사항: {significant}</div>
      <div>최대인원:{maxpeople}</div>
    </div>

    <div className={styles.matchingUI}>
      <button className={styles.deleteUI}>
        <MatchingEditForm matching={matching} matchingRepository={matchingRepository} addData={addData}/>,
      </button>
    </div>
    </li>
  </>
  );
}

export default Matching;