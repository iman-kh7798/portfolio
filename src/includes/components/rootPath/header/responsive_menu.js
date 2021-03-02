import React,{useEffect} from 'react';
import image from '../../../statics/images/logo_black_blue_00d1002a1_1700.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faEnvelope} from "@fortawesome/free-solid-svg-icons";



function ResponsiveMenu() {
    useEffect(() => {
       const btn=document.getElementById('responsive_nav_wrapper')
        const menu=document.getElementById('responsive_menu')
        btn.addEventListener('click',()=>
        {
            const attrib=menu.getAttribute("class")
            if(attrib==='active')
            {
                menu.removeAttribute('class')
            }
            else
                {
                    menu.setAttribute('class','active')
                }
        })
        return()=>
        {
            removeEventListener("click", () => {})
        }
    },[])
    return (
        <div id='responsive_menu'>
            <img src={image} alt='logo' style={{margin: '20px auto'}}/>
            <hr style={{width: '100%', marginBottom: '30px'}}/>
            <div className='flex_container' style={{width: "100%", padding: '0px 20px'}}>
                <ul style={{width: '100%'}}>
                    <li>
                        <a href='#' style={{color: "black"}}>
                            <FontAwesomeIcon icon={faChevronDown} style={{fontSize: '12px'}}/>
                            <h4 className='nav_prop'>صفحه اصلی</h4>
                        </a>
                    </li>
                    <hr style={{width: '100%', borderBottom: 'none', borderColor: '#00000029', margin: "5px 0"}}/>
                    <li>
                        <a href='#' style={{color: "black"}}>
                            <FontAwesomeIcon icon={faChevronDown} style={{fontSize: '12px'}}/>
                            <h4 className='nav_prop'>صفحه ها</h4>
                        </a>
                    </li>
                    <hr style={{width: '100%', borderBottom: 'none', borderColor: '#00000029', margin: "5px 0"}}/>
                    <li>
                        <a href='#' style={{color: "black"}}>
                            <FontAwesomeIcon icon={faChevronDown} style={{fontSize: '12px'}}/>
                            <h4 className='nav_prop'>نمونه ها</h4>
                        </a>
                    </li>
                    <hr style={{width: '100%', borderBottom: 'none', borderColor: '#00000029', margin: "5px 0"}}/>
                    <li>
                        <a href='#' style={{color: "black"}}>
                            <FontAwesomeIcon icon={faChevronDown} style={{fontSize: '12px'}}/>
                            <h4 className='nav_prop'>وبلاگ</h4>
                        </a>
                    </li>
                    <hr style={{width: '100%', borderBottom: 'none', borderColor: '#00000029', margin: "5px 0"}}/>
                    <li>
                        <a href='#' style={{color: "black"}}>
                            <FontAwesomeIcon icon={faChevronDown} style={{fontSize: '12px'}}/>
                            <h4 className='nav_prop'>فروشگاه</h4>
                        </a>
                    </li>
                    <hr style={{width: '100%', borderBottom: 'none', borderColor: '#00000029', margin: "5px 0"}}/>
                    <li>
                        <a href='#' style={{color: "black"}}>
                            <FontAwesomeIcon icon={faChevronDown} style={{fontSize: '12px'}}/>
                            {/*<FontAwesomeIcon icon={faChevronDown} style={{fontSize: '12px'}} className='second_nav_icon'/>*/}
                            <h4 className='nav_prop'>ارتباط با ما</h4>
                        </a>
                    </li>
                </ul>
            </div>
            <hr style={{width: '100%', borderBottom: 'none', borderColor: '#00000029', margin: "10px 0"}}/>
            <div className='flex_container' style={{width: '100%', justifyContent: 'center'}}>
                <input type='text' style={{height: '30px', margin: '30px 0px', padding: '10px'}}/>
                <span style={{position:'relative'}}>
                    <FontAwesomeIcon style={{position:'absolute',left:"12px",top:'37px'}} icon={faEnvelope}/>
                    <input type="button" style={{height: '30px', margin: '30px 0px',width:'40px',backgroundColor:'#0c51ac',borderRadius:'5px 0 0 5px',border:'none'}}/>
                </span>
            </div>
        </div>
    );
}

export default ResponsiveMenu;