import React from 'react'

export default function Footer(){
    return(
        <footer className='grid-three-columns footer'>
            <div className='padding-container'>
                <img src='https://w7.pngwing.com/pngs/925/348/png-transparent-logo-online-and-offline-e-online-design-text-logo-online-and-offline.png'></img>
                <strong className='padding-container'>Admin Ops</strong>
            </div>
            <div className='padding-container'>
                <ul>
                    <li className='el-mg'>Sobre nosostros</li>
                    <li className='el-mg'>FAQs</li>
                    <li className='el-mg'>Contactanos</li>
                </ul>
            </div>
            <div className='padding-container center-content'>
                <strong>Todos los derecho reservados</strong>
            </div>
        </footer>
    )
}
