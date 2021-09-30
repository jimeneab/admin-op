import React from 'react'
import {ReactComponent as ReactLogo} from '../img/img-1.svg';

function NotFound(){

    return(
        <section className='grid-two-columns'>
            <div>
                <ReactLogo/>
            </div>
            <div className='center-content'>
                <h1>Error 404, page not found</h1>
            </div>
        </section>
    )
}

export  default NotFound