import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone, faPencilAlt} from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'


function TopHeader() {
    useEffect(() => {
        console.log('salam')
        $("#mvmnt").hover(() => {
            $("#moving_bar,#moving_bar_2").css({'animation-play-state': 'running'})
        }, () => {
            setTimeout(() => {
                $("#moving_bar,#moving_bar_2").css({'animation-play-state': 'paused'})
            }, 1000)
        })

    }, [])
    useEffect(() => {
        const btn = document.getElementById('responsive_header')
        const menu = document.getElementById('tp_hdr')
        btn.addEventListener('click', () => {
            const attrib = menu.getAttribute("class")
            if (attrib === 'show_header') {
                menu.removeAttribute('class')
            } else {
                menu.setAttribute('class', 'show_header')
            }
        })
        return () => {
            removeEventListener('click', () => {
            })
        }
    },[])
    return (
        <div className='flex_container' style={{justifyContent: 'center'}}>
            <div className='flex_container' style={{position: "relative", width: '100%'}}>
                <div id="tp_hdr" style={{overflow: 'hidden'}} className='flex_container'>
                    <div id='tp_hdr_cntct_inf_blk' className='flex_container wht_clr flx_cntr_itm spcf_spc_tp_hdr_elm'
                         style={{flexWrap: 'wrap'}}>
                        <a href="#" style={{color: 'white'}}><h5 className='en_text' dir='ltr'
                                                                 id='sss'>@iman.kh7798@gmail.com</h5><FontAwesomeIcon
                            icon={faEnvelope}/></a>
                        <a href='#' style={{color: 'white'}}><h5>تماس با ما</h5><FontAwesomeIcon
                            icon={faPencilAlt}/></a>
                        <a href='#' style={{color: 'white'}}><h5 className='en_text'>09120000+</h5><FontAwesomeIcon
                            icon={faPhone}
                            style={{transform: "rotate(136deg)"}}/></a>
                    </div>
                    <div id='mvmnt' className='flex_container spcf_wdth_tp_hdr_elm'
                         style={{width: '45%', overflow: 'hidden'}}>
                        <div id='moving_bar_2' className='flex_container wht_clr flx_cntr_itm'
                             style={{justifyContent: 'flex-end'}}>
                            <div><p className="gld_clr">دلار:</p>3</div>
                            <div><p className="gld_clr">تومان:</p>3</div>
                            <div><p className="gld_clr">یورو:</p>3</div>
                            <div><p className="gld_clr">درهم:</p>3</div>
                            <div><p className="gld_clr">فرانک:</p>3</div>
                            <div><p className="gld_clr">یوان:</p>3</div>
                        </div>
                        <div id='moving_bar' className='flex_container wht_clr flx_cntr_itm'
                             style={{justifyContent: 'flex-end'}}>
                            <div><p className="gld_clr">دلار:</p>3</div>
                            <div><p className="gld_clr">تومان:</p>3</div>
                            <div><p className="gld_clr">یورو:</p>3</div>
                            <div><p className="gld_clr">درهم:</p>3</div>
                            <div><p className="gld_clr">فرانک:</p>3</div>
                            <div><p className="gld_clr">یوان:</p>3</div>
                        </div>
                    </div>
                </div>
                <div id='responsive_header'/>
            </div>

        </div>
    );
}

export default TopHeader;