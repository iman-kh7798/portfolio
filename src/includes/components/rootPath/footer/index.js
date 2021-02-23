import React from 'react';
import LeftSideFooter from "./left_side_footer";
import RightSideFooter from "./right_side_footer";
import RighterSideFooter from "./righter_side_footer";
import {RingBufferGeometry} from "three";
import RightestSideFooter from "./rightest_side_footer";

function Index() {
    return (
        <footer className='wht_clr'>
            <div className='flex_container wht_clr' style={{flexWrap:'wrap',justifyContent:'space-around'}}>
                <RightestSideFooter/>
                <RighterSideFooter/>
                <RightSideFooter/>
                <LeftSideFooter/>
            </div>
            <hr style={{marginTop:'50px'}}/>
            <p style={{marginTop:'20px'}}>کپی رایت @ 2020 تمامی حقوق مادی و معنوی مطعلق به ایمان خسروی می باشد.</p>
        </footer>
    );
}

export default Index;