import React from 'react';
import ModifyPopupMain from '../modifyPopupMain/modifyPopupMain';

const ModifyBtn = ({id, getList, modifyMatching, matchingRead}) => {
  return(
    <ModifyPopupMain id={id} getList={getList} modifyMatching={modifyMatching} matchingRead={matchingRead}/>);
}




export default ModifyBtn;