import React,{useEffect} from 'react';
import image from '../../../statics/images/logo_big_00cf002a1_1679.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faShoppingCart,faChevronDown} from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery'




function NavHeader() {
    useEffect(() =>
    {
        // $("#nav ul li a").hover(()=>{
        //     $('.second_nav_icon').css({'animation-play-state': 'running'})
        // },()=>{
        //     $('.second_nav_icon').css({'animation-direction': 'reverse','animation-iteration-count': '2'})
        // })
    },[])
    return (
        <nav className='flex_container'>
            <div id='logo' className='flex_container flx_cntr_itm'>
                <img width='207px' height='42px' style={{width: '207px', height: '42px'}}
                     src={image} alt='logo'/>
            </div>
            <div id='nav' className='flex_container flx_cntr_itm'>
                <ul>
                    <li>
                        <a href='#'>
                            <FontAwesomeIcon icon={faChevronDown} style={{fontSize: '12px'}}/>
                            <h4 className='nav_prop'>صفحه اصلی</h4>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <FontAwesomeIcon icon={faChevronDown} style={{fontSize: '12px'}}/>
                            <h4 className='nav_prop'>صفحه ها</h4>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <FontAwesomeIcon icon={faChevronDown} style={{fontSize: '12px'}}/>
                            <h4 className='nav_prop'>نمونه ها</h4>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <FontAwesomeIcon icon={faChevronDown} style={{fontSize: '12px'}}/>
                            <h4 className='nav_prop'>وبلاگ</h4>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <FontAwesomeIcon icon={faChevronDown} style={{fontSize: '12px'}}/>
                            <h4 className='nav_prop'>فروشگاه</h4>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <FontAwesomeIcon icon={faChevronDown} style={{fontSize: '12px'}}/>
                            {/*<FontAwesomeIcon icon={faChevronDown} style={{fontSize: '12px'}} className='second_nav_icon'/>*/}
                            <h4 className='nav_prop'>ارتباط با ما</h4>
                        </a>
                    </li>
                </ul>
            </div>
            <div id='search' className='flex_container'>
                <FontAwesomeIcon icon={faShoppingCart} className='wht_clr'
                                 style={{fontSize: '25px', marginLeft: '15px'}}/>
                <FontAwesomeIcon icon={faSearch} className='wht_clr' style={{fontSize: '25px'}}/>
            </div>
        </nav>
    );

}

export default NavHeader;