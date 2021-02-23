import React, {useEffect} from 'react'
import $ from 'jquery'
import rocket from '../../../statics/images/rocket.jpg'

function ArticleEnd() {
    useEffect(() => {
        $('#article_end_1 h2').click(() => {
            $('#article_end_1_wrapper').slideToggle("slow")
        })
        $('#article_end_2 h2').click(() => {
            $('#article_end_2_wrapper').slideToggle("slow")
        })
        $('#article_end_3 h2').click(() => {
            $('#article_end_3_wrapper').slideToggle("slow")
        })
    })
    return (
        <div id='article_end_cntnr' className='flex_container wht_clr' style={{alignItems:"center"}}>
            <div id='article_end' className='flex_container' style={{overflow:'hidden'}}>
                <h3 style={{color: '#fece42'}}>لورم ایپسوم</h3>
                <br/>
                <h1>سوالات متداول</h1>
                <br/>
                <div className='fll_wdth'>
                    <div id='article_end_1' className='flex_container article_end_wrapper'>
                        <h2 style={{color: '#0c51ac'}}>
                            لورم ایپسوم متن ساختگی با تولید سادگی
                        </h2>
                    </div>
                    <div id="article_end_1_wrapper" className='article_end_wrapper wht_clr flex_container' style={{
                        height: '100px',
                        display: 'none'
                    }}>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                        </p>
                    </div>
                </div>
                <div className='fll_wdth'>
                    <div id='article_end_2' className='flex_container article_end_wrapper'>
                        <h2 style={{color: '#0c51ac'}}>
                            لورم ایپسوم متن ساختگی با تولید سادگی
                        </h2>
                    </div>
                    <div id="article_end_2_wrapper" className='article_end_wrapper wht_clr flex_container' style={{
                        height: '100px',
                        display: 'none'
                    }}>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                        </p>
                    </div>
                </div>
                <div className='fll_wdth'>
                    <div id='article_end_3' className='flex_container article_end_wrapper'>
                        <h2 style={{color: '#0c51ac'}}>
                            لورم ایپسوم متن ساختگی با تولید سادگی
                        </h2>
                    </div>
                    <div id="article_end_3_wrapper" className='article_end_wrapper wht_clr flex_container' style={{
                        height: '100px',
                        display: 'none'
                    }}>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                        </p>
                    </div>
                </div>
            </div>
            <div style={{width:'50%'}}>
                <img src={rocket} style={{width:'100%',height:'auto'}} alt='rocket'/>
            </div>
        </div>
    );
}

export default ArticleEnd;