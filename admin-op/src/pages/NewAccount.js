import React from 'react'


function NewAccount(){
    return(
        <section className='grid-three-columns main-content'>
            <div></div>
            <div className='center-content'>
                <form>
                    <fieldset  className='vertical-elements big-container'>
                        <legend className='text-left'>Datos de la cuenta</legend>
                        <label className='text-left'>Nombre:</label>
                        <input type='text' placeholder='Arkus Nexus' className='el-bg'></input>
                        <select className='el-bg'>
                            <option value={""} selected disabled >Seleccionar Cliente</option>
                            <option value={"614dea535eaa7adb0d9f8935"}>Option 1</option>
                            <option value={"614de743c73d768d62751582"}>Option 2</option>
                        </select>
                        <select className='el-bg'>
                            <option value={""} selected disabled >Seleccionar Lìder</option>
                            <option value={"614dea535eaa7adb0d9f8935"}>Option 1</option>
                            <option value={"614de743c73d768d62751582"}>Option 2</option>
                        </select>
                        <select className='el-bg'>
                            <option value={""} selected disabled >Seleccionar Equipo</option>
                            <option value={"614dea535eaa7adb0d9f8935"}>Option 1</option>
                            <option value={"614de743c73d768d62751582"}>Option 2</option>
                        </select>
                        <button className='btn-main'>Crear cuenta</button>
                    </fieldset>
                </form>
            </div>
            <div></div>
        </section>
    )
}

export  default NewAccount