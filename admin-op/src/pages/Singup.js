import React, { useState } from 'react'
import {ReactComponent as ReactLogo} from '../img/img-2.svg';

const axios = require('axios')

function Singup(){
    let newUserUrl = 'http://localhost:3001/auth/singup'
    let [newUser, setNewUser] = useState({
        email:'',
        password:'',
        name:'',
        role:''
    })

    function createNewUser(e){
        e.preventDefault()
        axios.post(newUserUrl, newUser )
        .then( res => {
            if(!res.error){
                alert(`Usuario ${res.data.name} creado con èxito`)
                setNewUser({
                    email:'',
                    password:'',
                    name:'',
                    role:''
                })
            }
        })
    }

    return(
        <section className='grid-two-columns'>
            <div className='center-content'>
                <form>
                    <fieldset  className='vertical-elements big-container'>
                        <legend className='text-left'>Datos del usuario</legend>
                        <label className='text-left'>Correo:</label>
                        <input type='email' placeholder='Nombre@correo.com' className='el-mg' onChange={handleEmailInput}></input>
                        <label className='text-left'>Contraseña:</label>
                        <input type='password' placeholder='Contraseña' className='el-mg' onChange={handlePasswordInput}></input>
                        <label className='text-left'>Nombre:</label>
                        <input type='password' placeholder='Usuario' className='el-bg' onChange={handleNameInput}></input>
                        <select className='el-bg' onClick={handleRoleSelect}>
                            <option selected disabled>Seleccionar rol</option>
                            <option value={"614dea535eaa7adb0d9f8935"}>Administrador</option>
                            <option value={"614de743c73d768d62751582"}>Usuario</option>
                        </select>
                        <button className='btn-main' onClick={createNewUser}>Crear Usuario</button>
                    </fieldset>
                </form>
            </div>
            <div>
                <ReactLogo/>
            </div>
        </section>
    )

    function handleEmailInput(e){
        let value = e.target.value
        setNewUser({...newUser, ['email']: value})
    }

    function handlePasswordInput(e){
        let value = e.target.value
        setNewUser({...newUser, ['password']: value})
    }

    function handleNameInput(e){
        let value = e.target.value
        setNewUser({...newUser, ['name']: value})
    }

    function handleRoleSelect(e){
        let value = e.target.value
        setNewUser({...newUser,['role']: value})
    }
}

export  default Singup