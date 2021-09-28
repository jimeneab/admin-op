import React from 'react'


function NewTeam(){
    return(
        <section className='grid-three-columns main-content'>
            <div></div>
            <div className='center-content'>
                <form>
                    <fieldset  className='vertical-elements big-container'>
                        <legend className='text-left'>Datos del equipo</legend>
                        <label className='text-left'>Nombre:</label>
                        <input type='text' placeholder='Los rezagados' className='el-bg'></input>
                        <select className='el-bg'>
                            <option value={""} selected disabled >Seleccionar integrantes</option>
                            <option value={"614dea535eaa7adb0d9f8935"}>Option 1</option>
                            <option value={"614de743c73d768d62751582"}>Option 2</option>
                        </select>
                        <button className='btn-main'>Crear equipo</button>
                    </fieldset>
                </form>
            </div>
            <div></div>
        </section>
    )
}

export  default NewTeam