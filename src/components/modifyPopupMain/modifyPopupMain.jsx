import React, { useState } from 'react';
import ModifyPopupDom from '../modifyPopupDom/modifyPopupDom';
import ModifyPopupContent from '../modifyPopupContent/modifyPopupContent';

function ModifyPopupMain(props) {
  const {getList} = props;
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
        <button 
          type="button"
          id="popupDom"
          onClick={() => openPopup()}
        >
          매칭 수정
        </button>
          {isOpenPopup &&
            <ModifyPopupDom>
              <ModifyPopupContent  
                      onClose={() => closePopup()} 
                      getList={getList}
              />
            </ModifyPopupDom>
          }
      </div>
    </div>
);
}

export default ModifyPopupMain;