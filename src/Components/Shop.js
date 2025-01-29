import React from 'react';

import Asian from './Asian';
import Computers from './Computers';
import History from './History';
import Genealogy from './Genealogy';
import African from './African';




function Shop () {

    
        
    return (
        <>
            <h2>Shop</h2>
            <section className='African'>
                <African/>

            </section>

            <section className='Asian'>
                <Asian/>
                
            </section>

            <section className='History'>
                <History/>
                
            </section>

            <section className='Genealogy'>
                <Genealogy/>
                
            </section>

            <section className='Computers'>
                <Computers/>
                
            </section>
        
        </>
    )
}

export default Shop;