import React from 'react';
import Top_Header from "./Top_Header";

import NavHeader from "./Nav_Header";
import ResponsiveMenu from "./responsive_menu";


function Header() {


    return (
        <header style={{height:'150px'}}>
            <Top_Header/>
            <NavHeader/>
            <ResponsiveMenu/>
        </header>
    )
}

export default Header;