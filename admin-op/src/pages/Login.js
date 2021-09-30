import React, { useState } from 'react'
import {ReactComponent as ReactLogo} from '../img/img-1.svg';
import useAuth from '../Auth/useAuth'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const axios = require('axios')

function Login(){
    const history = useHistory()
    let [accessData, setAccessData] = useState({
        email:'',
        password:''
    })
    const auth = useAuth()

    function getToken(e){
        e.preventDefault()
        axios.post('http://localhost:3001/auth/singin', accessData )
        .then(res => {
            let token = res.data.data.token
            window.localStorage.setItem('access_token', token)
            auth.setUser(token)
            history.push("/")
        })
    }

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