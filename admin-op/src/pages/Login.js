import React from 'react'
import {ReactComponent as ReactLogo} from '../img/img-1.svg';

function Login(){
    return(
        <section className='grid-two-columns'>
            <div>
                <ReactLogo/>
            </div>
            <div className='center-content'>
                <form>
                    <fieldset  className='vertical-elements big-container'>
                        <legend className='text-left'>Ingresa tus datos</legend>
                        <label className='text-left'>Correo:</label>
                        <input type='email' placeholder='Nombre@correo.com' className='el-mg'></input>
                        <label className='text-left'>Contraseña:</label>
                        <input type='password' placeholder='Contraseña' className='el-bg'></input>
                        <button className='btn-main'>Entrar!</button>
                    </fieldset>
                </form>
            </div>
        </section>
    )
}

export  default Login