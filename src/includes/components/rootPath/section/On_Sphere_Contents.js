import React, {useEffect} from 'react';


function OnSphereContents() {
    useEffect(() => {
        function startTime() {
            let today = new Date();
            let h = today.getHours();
            let m = today.getMinutes();
            let s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('timmer').innerHTML =
                h + ":" + m + ":" + s;
            setTimeout(startTime, 500);
        }

        function checkTime(i) {
            if (i < 10) {
                i = "0" + i
            }
            // add zero in front of numbers < 10
            return i;
        }

        startTime();

    })
    return (
        <React.Fragment>
            <div id='section_title' className=' flex_container wht_clr'>
                <h4 style={{color: '#fece42'}}>به قالب آزمایشی خوش آمدید</h4>
                <br/>
                <h1>این قالب یک نمونه کار کد نویسی شده می باشد</h1>
                <br/>
                <p>این قالب با استفاده از فریم ورک react و سرور node js ساخته شده</p>

                <p> و از تکنولوژی های گرافیکی Three js در آن استفاده شده.</p>

                <p>قالب اصلی در Themeforest موجود می باشد و این نسخه راست چین شده</p>
                <p>
                    و از ابتدا توسط ایمان خسروی کد نویسی شده.
                </p>
                <a className='top_btn' href='#'>
                    درباره ما
                </a>
            </div>
            <div id='section_timmer'>
                <div id='up_price' className='wht_clr flex_container'>
                    <h3>ساعت استاندارد</h3>
                    <br/>
                    <h2 id='timmer'/>
                    <br/>
                    <div  className='flex_container wht_clr flx_cntr_itm' style={{width:'100%',height:'100px',flexDirection:'row'}}>
                        <div className='flex_container' style={{width:'50%',flexDirection:'column',alignItems:'center'}}>
                            <h4>12345</h4>
                            <h5>قیمت روز دلار</h5>
                        </div>
                        <div className='flex_container' style={{width:'50%',flexDirection:'column',alignItems:'center'}}>
                            <h4>123456</h4>
                            <h5>قیمت روز تومان</h5>
                        </div>
                    </div>
                    <hr style={{width:'90%',border:'1px solid #01264A'}} />
                    <div className='flex_container' style={{width:'100%',justifyContent:'center'}}>
                        <div className='flex_container'
                             style={{flexDirection:'row',justifyContent:'space-between',width:'80%',marginTop:'40px'}}>
                            <h4 >
                                $10
                            </h4>
                            <h4>
                                $50
                            </h4>
                        </div>
                    </div>
                    <div id='nemoodar'>
                        <div/>
                    </div>
                    <div className='flex_container'
                         style={{flexDirection:'row',justifyContent:'space-between',width:'80%',marginTop:'40px'}}>
                        <h5>
                            نمودار قیمت دلار
                        </h5>
                        <h5>
                            یه تومان
                        </h5>
                    </div>
                    <div style={{width:"80%"}}>
                        <a className='top_btn' href='#' style={{width:"35%"}}>
                            درباره ما
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default OnSphereContents;