import React, {Component} from 'react';
import MatchingAddForm from '../matching_add_form/matching_add_form';
import styles from './popupContent.module.css';

class PopupContent extends Component {
  render(){
    return(
  <div className={styles.dimmed_layer_wrapper}>
    <div className={styles.full_layer}>
      <div className={styles.common_alert}> 
        <h2>매칭 등록 신청</h2>
        <div>
          <MatchingAddForm />
        </div>
        <div>
          <button type="button" onClick={this.props.onClose}>취소</button>
          <button type="submit" onClick={this.props.onClose}>등록하기</button>
        </div>
      </div>
    </div>
  </div>
);
  }
}
 
export default PopupContent;