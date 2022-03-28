import React, {useState} from 'react';
import MatchingAddForm from '../matching_add_form/matching_add_form';
import styles from './popupContent.module.css';

function PopupContent(props) {
  const {matchingRepository, addData, onClose} = props;
  const [time, setTime] = useState('')

  return(
    <div className={styles.dimmed_layer_wrapper}>
      <div className={styles.full_layer}>
        <div className={styles.common_alert}> 
          <h2>매칭 등록 신청</h2>
          <div>
            <MatchingAddForm matchingRepository={matchingRepository} setTime={setTime} time={time}/>
          </div>
          <div>
            <button type="button" onClick={onClose}>취소</button>
            <button type="submit" onClick={onClose}>등록하기</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupContent;