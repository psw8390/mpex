import React, { useState } from 'react';
import PopupDom from '../popupDom/popupDom';
import PopupContent from '../popupContent/popupContent';

function PopupMain(props) {
  const { getList } = props;
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
          매칭 등록
        </div>
          {isOpenPopup &&
            <PopupDom>
              <PopupContent  
                      onClose={() => closePopup()} 
                      getList={getList}
              />
            </PopupDom>
          }
      </div>
    </div>
);
}

export default PopupMain;