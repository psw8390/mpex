import React, { useState } from "react";
import styles from './matching_edit_form.module.css';
import FileInputModified from '../FileInput_modified/FileInputModified';

function MatchingEditForm({matchingRead, setUrl, loading, setLoading}) {
  const [time, setTime] = useState(matchingRead.time);
  const [place, setPlace] = useState(matchingRead.place);
  const [process, setProcess] = useState(matchingRead.process);
  const [ask, setAsk] = useState(matchingRead.ask);
  const [nstr, setNstr] = useState(matchingRead.nstr);
  const [maxPeople, setMaxPeople] = useState(matchingRead.maxPeople);


  const onChangeT = (e) => {
    setTime(e.target.value);
  };

  const onChangeP = (e) => {
    setPlace(e.target.value);
  }

  const onChangePr = (e) => {
    setProcess(e.target.value);

  }
  const onChangeA = (e) => {
    setAsk(e.target.value);
  }
  const onChangeS = (e) => {
    setNstr(e.target.value);
  }
  const onChangeM = (e) => {
    setMaxPeople(e.target.value);
  }




  return(
    <div className={styles.matchingAddFormBox}>
      <div className={styles.matchigBox} >
        <div className={styles.filebox}> 
          <label htmlFor="ex_file" className='fileboxlabel'>체육관 이미지 업로드</label> 
          <FileInputModified setUrl={setUrl} matchingRead={matchingRead} loading={loading}setLoading={setLoading} />
        </div>

        <div className={styles.matchingInfo}>
          <input name='time' onChange={onChangeT} value={time}></input>
          <input name='place' onChange={onChangeP} value={place}></input>
          <input name='process' onChange={onChangePr} value={process}></input>
          <input name='ask' onChange={onChangeA} value={ask}></input>
          <input name='nstr' onChange={onChangeS} value={nstr}></input>
          <input name='maxPeople' onChange={onChangeM} value={maxPeople}></input>
        </div>
      </div>
    </div>
      
  )
}

export default MatchingEditForm;