import React from 'react'
import {ReactComponent as ReactLogo} from '../img/img-1.svg';

function Home(){

    return(
        <section className='grid-two-columns'>
            <div>
                <ReactLogo/>
            </div>
            <div className='center-content'>
                <h1>Bienvenido!!!</h1>
            </div>
        </section>
    )
}

export  default Home