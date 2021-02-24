import React, {useEffect} from 'react';

function Banner1() {
    useEffect(() => {
        const elm = document.getElementById("first_banner_text")
        const elm2 = document.getElementById('media_container')
        const position = elm2.offsetTop
        document.addEventListener('scroll', () => {
            if (window.scrollY > position) {

                elm.setAttribute('class', 'movement_class_right')
            }
            removeEventListener('scroll', ev => {
            })
        })

    })
    return (
        <div id="first_banner" className='fll_wdth flex_container wht_clr'>
            <div id='first_banner_text'>
                <div id='first_banner_text_wrapper' style={{width: "100%", height: '100%'}}>
                    <h3 style={{color: "#fece42"}}>درباره ما</h3>
                    <br/>
                    <h1>طراحی قالب وردپرس</h1>
                    <br/>
                    <hr style={{width: '65px', border: '1px solid #fece42'}}/>
                    <br/>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ

                        و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه

                        روزنامه و مجله در ستون و سطرآنچنان که لازم است و ...</p>
                    <br/>
                    <br/>
                    <a href='#' className='top_btn'
                       style={{backgroundColor: '#0c51ace6', width: '50%', color: 'white'}}>بیشتر بدانید</a>
                </div>
            </div>
            <div id="banner_one_image" style={{width: '50%', height: "inherit"}}/>
        </div>
    );
}


export default Banner1;