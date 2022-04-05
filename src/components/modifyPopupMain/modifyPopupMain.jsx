import React, { useState } from 'react';
import ModifyPopupDom from '../modifyPopupDom/modifyPopupDom';
import ModifyPopupContent from '../modifyPopupContent/modifyPopupContent';

function ModifyPopupMain(props) {
  const {getList, id, modifyMatching, matchingRead} = props;
  const [isOpenPopup, setIsOpenPopup] = useState(false)

  const openPopup = () => {
    setIsOpenPopup(true)
  }

  const closePopup = () => {
    setIsOpenPopup(false)
  }


  return(
    <div>
      <div>
        <div 
          id="popupDom"
          onClick={() => openPopup()}
        >
          매칭 수정
        </div>
          {isOpenPopup &&
            <ModifyPopupDom>
              <ModifyPopupContent  
                      onClose={() => closePopup()} 
                      getList={getList}
                      id={id}
                      modifyMatching={modifyMatching}
                      matchingRead={matchingRead}
              />
            </ModifyPopupDom>
          }
      </div>
    </div>
);
}

export default ModifyPopupMain;