import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGem, faAddressBook, faAddressCard, faNewspaper, faBell, faUser} from "@fortawesome/free-regular-svg-icons";
import firsticon from '../../../statics/images/002-laptop.svg'
import secondicon from '../../../statics/images/003-cpu.svg'
import thirdicon from '../../../statics/images/001-calendar.svg'
import forthicon from '../../../statics/images/save-money.svg'

function CircleContent() {
    return (
        <div id='circle-area' className='flex_container fll_wdth'
             style={{marginTop: "50px", backgroundColor: '#052260'}}>
            <div id='circle-area-shape' className='flex_container' style={{width: "50%", height: "auto"}}>
                <div id='circle_wrapper' >
                    <div className='circles' style={{top: '-10%', right: '40%'}}>
                        <FontAwesomeIcon icon={faGem}/>
                    </div>
                    <div className='circles' style={{top: '45px', left: '0%'}}>
                        <FontAwesomeIcon icon={faAddressBook}/>
                    </div>
                    <div className='circles' style={{bottom: '45px', left: '0%'}}>
                        <FontAwesomeIcon icon={faAddressCard}/>
                    </div>
                    <div className='circles' style={{bottom: '-10%', right: '40%'}}>
                        <FontAwesomeIcon icon={faNewspaper}/>
                    </div>
                    <div className='circles' style={{bottom: '45px', right: '0%'}}>
                        <FontAwesomeIcon icon={faBell}/>
                    </div>
                    <div className='circles' style={{top: '45px', right: '0%'}}>
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                </div>
            </div>
            <div className='flex_container wht_clr' id='circle_content' style={{margin:'20px 0px'}}>
                <h3 style={{color: '#fece42'}}>لورم ایپسوم</h3>
                <br/>
                <h1>لورم ایپسوم متن ساختگی با تولید

                    سادگی نامفهوم از صنعت چاپ</h1>
                <br/>
                <hr style={{width: '65px', border: '1px solid #fece42'}}/>
                <br/>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با

                    <br/>
                    استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله

                    <br/>
                    در ستون و سطرآنچنان که لازم است
                </p>
                <br/>
                <div className='flex_container' style={{justifyContent: "space-around", marginTop: '20px',textAlign:"center"}}>
                    <div style={{width:"25%"}}><img src={firsticon} style={{width: "50%"}} alt='sample icon'/>
                    <h3 style={{marginTop:"10px"}}>لورم</h3>
                    </div>
                    <div style={{width:"25%"}}><img src={secondicon} style={{width: "50%"}} alt='sample icon'/>
                        <h3 style={{marginTop:"10px"}}>لورم</h3>
                    </div>
                    <div style={{width:"25%"}}><img src={thirdicon} style={{width: "50%"}} alt='sample icon'/>
                        <h3 style={{marginTop:"10px"}}>لورم</h3>
                    </div>
                    <div style={{width:"25%"}}><img src={forthicon} style={{width: "50%"}} alt='sample icon'/>
                        <h3 style={{marginTop:"10px"}}>لورم</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CircleContent;