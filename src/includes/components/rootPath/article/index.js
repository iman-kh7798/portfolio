import React  from 'react';
import Banner1 from "./Banner_1";
import Banner2 from "./Banner_2";
import LiningArea from "./Lining_area";
import Charts from "./Charts";
import CircleContent from "./Circle_Content";
function Index (){
        return (
            <div className='fll_wdth'>
                <Banner1/>
                <Banner2/>
                <LiningArea/>
                <CircleContent/>
            </div>
        );
}

export default Index;