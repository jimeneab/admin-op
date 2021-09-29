import React, { useState } from 'react'
import {ReactComponent as ReactLogo} from '../img/img-1.svg';

const axios = require('axios')

function Login(){
    let [accessData, setAccessData] = useState({
        email:'',
        password:''
    })

    function getToken(e){
        e.preventDefault()
        axios.post('http://localhost:3001/auth/singin', accessData )
        .then(res => {
            let token = res.data.data.token
            console.log(token)
            window.localStorage.setItem('access_token', token)
        })
    }

    console.log(accessData)

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
                        <input type='email' placeholder='Nombre@correo.com' className='el-mg' onChange={handleEmailInput}></input>
                        <label className='text-left'>Contraseña:</label>
                        <input type='password' placeholder='Contraseña' className='el-bg' onChange={handlePasswordInput}></input>
                        <button className='btn-main' onClick={getToken}>Entrar!</button>
                    </fieldset>
                </form>
            </div>
        </section>
    )

    function handleEmailInput(e){
        let value = e.target.value
        setAccessData({ ...accessData,['email']: value })
    }

    function handlePasswordInput(e){
        let value = e.target.value
        setAccessData({ ...accessData,['password']: value })        
    }
}

export  default Login