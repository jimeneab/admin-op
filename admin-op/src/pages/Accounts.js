import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const axios = require('axios')

export default function Accounts(){
    let [accounts,setAccounts] = useState([])

    useEffect(() => {
        getAccounts()
    },[])

    function getAccounts(){
        axios.get('http://localhost:3001/accounts')
        .then(res => {
            setAccounts(res.data)
        })
    }

    return(
        <div className='content main--content'>
            <div className='subtitle-section'>
                <h1>Cuentas</h1>
            </div>
            <div className='center-horizontal-container'>
                <div className='card-container'>
                    {accounts.map((item,index) => {

                        function deleteAccount(){
                            axios.delete(`http://localhost:3001/accounts/${item._id}`)
                            .then(res => {
                                alert(`La cuenta ${res.data.name} ha sido eliminada`)
                                getAccounts()
                            })
                        }

                        return(
                            <div className='simple-card' key={index}>
                                <p>Cuenta:</p>
                                <p>{item.name}</p>
                                <button className='btn-delete' onClick={deleteAccount}>Eliminar</button>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='subtitle-section'>
                <Link to='/new-account'>
                    <button className='btn-main'>+ Crear nueva cuenta</button>
                </Link>
            </div>
        </div>
    )
}
