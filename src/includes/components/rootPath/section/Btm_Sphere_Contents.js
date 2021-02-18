import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGem,faAddressBook,faCalendar} from '@fortawesome/free-regular-svg-icons'
import {faVenusMars} from "@fortawesome/free-solid-svg-icons";

function BtmSphereContents() {
    return (
        <div id='media_container' className="flex_container wht_clr">
            <div className='media_container_child'>
                <div className='fll_wdth' style={{height:'100%',backgroundColor:'#000e2e'}}>
                    <FontAwesomeIcon icon={faGem} className='sample_icon'/>
                    <h3>لورم اپسیوم</h3><br/>
                    <p>این یک متن ساختگی می باشد.</p>
                </div>
            </div>
            <div className='media_container_child'>
                <div className='fll_wdth' style={{height:'100%',backgroundColor:'#000e2e'}}>
                    <FontAwesomeIcon icon={faAddressBook} className='sample_icon'/>
                    <h3>لورم اپسیوم</h3><br/>
                    <p>این یک متن ساختگی می باشد.</p>
                </div>
            </div>
            <div className='media_container_child'>
                <div className='fll_wdth' style={{height:'100%',backgroundColor:'#000e2e'}}>
                    <FontAwesomeIcon icon={faCalendar} className='sample_icon'/>
                    <h3>لورم اپسیوم</h3><br/>
                    <p>این یک متن ساختگی می باشد.</p>
                </div>
            </div>
            <div className='media_container_child'>
                <div className='fll_wdth' style={{height:'100%',backgroundColor:'#000e2e'}}>
                    <FontAwesomeIcon icon={faVenusMars} className='sample_icon'/>
                    <h3>لورم اپسیوم</h3><br/>
                    <p>این یک متن ساختگی می باشد.</p>
                </div>
            </div>
        </div>
    );
}

export default BtmSphereContents;