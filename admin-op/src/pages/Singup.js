import React from 'react'
import {ReactComponent as ReactLogo} from '../img/img-2.svg';

function Singup(){
    return(
        <section className='grid-two-columns'>
            <div className='center-content'>
                <form>
                    <fieldset  className='vertical-elements big-container'>
                        <legend className='text-left'>Datos del usuario</legend>
                        <label className='text-left'>Correo:</label>
                        <input type='email' placeholder='Nombre@correo.com' className='el-mg'></input>
                        <label className='text-left'>Contraseña:</label>
                        <input type='password' placeholder='Contraseña' className='el-mg'></input>
                        <label className='text-left'>Usuario:</label>
                        <input type='password' placeholder='Usuario' className='el-bg'></input>
                        <select className='el-bg'>
                            <option value={""} selected disabled >Seleccionar rol</option>
                            <option value={"614dea535eaa7adb0d9f8935"}>Administrador</option>
                            <option value={"614de743c73d768d62751582"}>Usuario</option>
                        </select>
                        <button className='btn-main'>Crear Usuario</button>
                    </fieldset>
                </form>
            </div>
            <div>
                <ReactLogo/>
            </div>
        </section>
    )
}

export  default Singup