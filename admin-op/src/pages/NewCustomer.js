import React from 'react'


function NewCustomer(){
    return(
        <section className='grid-three-columns main-content'>
            <div></div>
            <div className='center-content'>
                <form>
                    <fieldset  className='vertical-elements big-container'>
                        <legend className='text-left'>Datos del cliente</legend>
                        <label className='text-left'>Nombre:</label>
                        <input type='text' placeholder='Arkus Nexus' className='el-bg'></input>
                        <button className='btn-main'>Crear cliente</button>
                    </fieldset>
                </form>
            </div>
            <div></div>
        </section>
    )
}

export  default NewCustomer