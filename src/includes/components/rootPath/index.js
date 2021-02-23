import React from 'react';
import Header from "./header";
import Section from './section'
import Article from './article'
import Footer from './footer'
function Index() {
        return (
            <div>
                <Header/>
                <Section/>
                <Article/>
                <Footer/>
            </div>
        );
}

export default {
    component:Index
}