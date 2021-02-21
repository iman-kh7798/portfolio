import React from 'react';
import {Doughnut} from "react-chartjs-2";
function Charts() {

    return (
        <div className='flex_container flx_cntr_itm' style={{width:"100%"}}>
            <div>
                <Doughnut data={state}/>
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    );
}

export default Charts;