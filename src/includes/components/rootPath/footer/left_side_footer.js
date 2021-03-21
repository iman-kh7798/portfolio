import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

function LeftSideFooter(){
        return (
            <div className='wht_clr flex_container ftr_cntnrs' >
                <h3>ما را دنبال کنید</h3>
                <br/>
                <p style={{fontSize:'15px'}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                <br/><br/>
                <div style={{width:'100%',height:'50px',position:'relative'}}>
                    <input id='input_text_box' placeholder='متن پیام' type='text' style={{backgroundColor: '#ffffff1a',borderColor: '#ffffff1a',height:'inherit',
                    width:'80%',borderRadius:'0px 2px 2px 0px',borderLeft:'none'}}/>
                    <FontAwesomeIcon id='input_box_svg' icon={faEnvelope} style={{position:'absolute',width:'28px',height:'28px'}}/>
                    <input value=' ' id='input_box' type='submit'/>
                </div>
            </div>
        );
}

export default LeftSideFooter;
