import React, { useState } from 'react'

const axios = require('axios')

function NewCustomer(){
    let [newCustomer, setNewCustomer] = useState({name: ''})

    function createNewCustomer(e){
        e.preventDefault()
        axios.post('http://localhost:3001/customers', newCustomer)
        .then(res => {
            if(!res.error){
                setNewCustomer({name: ''})
                alert(`Cliente ${res.data.name} creado`)
            }
        })
    }

    console.log(newCustomer)
    return(
        <section className='grid-three-columns main-content'>
            <div></div>
            <div className='center-content'>
                <form>
                    <fieldset  className='vertical-elements big-container'>
                        <legend className='text-left'>Datos del cliente</legend>
                        <label className='text-left'>Nombre:</label>
                        <input type='text' placeholder='Arkus Nexus' className='el-bg' onChange={ handlenameInput }></input>
                        <button className='btn-main' onClick={createNewCustomer}>Crear cliente</button>
                    </fieldset>
                </form>
            </div>
            <div></div>
        </section>
    )

    function handlenameInput(e){
        let value = e.target. value
        setNewCustomer({...newCustomer, ['name']: value})
    }
}

export  default NewCustomer