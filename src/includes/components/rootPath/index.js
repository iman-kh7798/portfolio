import React from 'react';
import Header from "./header";
import Section from './section'
import Article from './article'
function Index() {
        return (
            <div>
                <Header/>
                <Section/>
                <Article/>
            </div>
        );
}

export default {
    component:Index
}