import React from 'react';
import ModifyPopupMain from '../modifyPopupMain/modifyPopupMain';

const ModifyBtn = ({matching, matchingRepository, addData}) => {
  return(
    <ModifyPopupMain matching={matching} matchingRepository={matchingRepository} addData={addData}/>);
}


export default ModifyBtn;