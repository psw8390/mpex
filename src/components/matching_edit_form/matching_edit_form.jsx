import React from 'react';
import PopupMain from '../popupMain/popupMain';

const MatchingEditForm = ({matching, matchingRepository, addData}) => {
  return(
    <PopupMain matching={matching} matchingRepository={matchingRepository} addData={addData}/>);
}


export default MatchingEditForm;