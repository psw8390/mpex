import React, {Component} from 'react';
import PopupDom from '../popupDom/popupDom';
import PopupContent from '../popupContent/popupContent';

class PopupMain extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            isOpenPopup: false,
        }
 
        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }
 
    openPopup(){
        this.setState({
            isOpenPopup: true,
        })
    }
 
    closePopup(){
        this.setState({
            isOpenPopup: false,
        })
    }
 
    render(){
        return(
            <div>
                <div>
                    <button type="button"
                            id="popupDom"
                            onClick={this.openPopup}
                    >
                        매칭등록
                    </button>
                    {this.state.isOpenPopup &&
                        <PopupDom>
                            <PopupContent onClose={this.closePopup}/>
                        </PopupDom>
                    }
                </div>
            </div>
        );
    }
}
 
export default PopupMain;