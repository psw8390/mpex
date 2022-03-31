import ReactDom from 'react-dom';

const ModifyPopupDom = ({ children }) => {
    const el = document.getElementById('popupDom');
    return ReactDom.createPortal(children, el);
};

export default ModifyPopupDom;