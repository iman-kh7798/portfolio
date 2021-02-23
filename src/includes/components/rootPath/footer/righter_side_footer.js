import React from 'react';
import bitnews from '../../../statics/images/8_004600461_2408.jpg'
import bitnews1 from '../../../statics/images/1000x1000_02_004600461_52.jpg'

function RighterSideFooter() {
    return (
        <div id='righter_side_footer_container' className='ftr_cntnrs wht_clr' style={{padding:'0px 10px'}}>
            <h3>اخرین اخبار</h3>
            <br/>
            <div className='flex_container'>
                <a href='#'><img src={bitnews} alt='bitnews'/></a>
                <div style={{marginRight:'10px'}}>
                    <a href='#'><h5>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h5></a>

                    <div className='flex_container' style={{alignItems:'center',marginTop:'5px'}}>
                        <hr className='news_hr'/>
                        <h6>تاریخ</h6>
                    </div>
                </div>
            </div>
            <div className='flex_container' style={{marginTop:'10px'}}>
                <a href='#'><img src={bitnews1} alt='bitnews'/></a>
                <div style={{marginRight:'10px'}}>
                    <a href='#'><h5>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h5></a>

                    <div className='flex_container' style={{alignItems:'center',marginTop:'5px'}}>
                        <hr className='news_hr'/>
                        <h6>تاریخ</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RighterSideFooter;