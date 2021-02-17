import React from 'react';
import Top_Header from "./Top_Header";

import NavHeader from "./Nav_Header";


function Header() {


    return (
        <header style={{height:'150px'}}>
            <Top_Header/>
            <NavHeader/>
        </header>
    )
}

export default Header;