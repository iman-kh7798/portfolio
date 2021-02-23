import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook} from "@fortawesome/free-solid-svg-icons";

function RightestSideFooter() {
    return (
        <div className='ftr_cntnrs' style={{padding:'0px 10px'}}>
            <h2>12344444-889</h2>
            <br/>
            <p style={{color:'#fece42'}}>iman.kh7798@gmail.com</p>
            <h5 style={{margin:'10px 0px'}}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </h5>
            <div className="flex_container" style={{justifyContent:'space-around',marginTop:'40px'}}>
                <div className='icon_wrapper_parent'>
                    <FontAwesomeIcon icon={faAddressBook} className="icon_wrapper"/>
                </div>
                <div className='icon_wrapper_parent'>
                    <FontAwesomeIcon icon={faAddressBook} className="icon_wrapper"/>
                </div>
                <div className='icon_wrapper_parent'>
                    <FontAwesomeIcon icon={faAddressBook} className="icon_wrapper"/>
                </div>
                <div className='icon_wrapper_parent'>
                    <FontAwesomeIcon icon={faAddressBook} className="icon_wrapper"/>
                </div>

            </div>
        </div>
    );
}

export default RightestSideFooter;