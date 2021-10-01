import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const axios = require('axios')

export default function Customers(){
    let [customers,setCustomers] = useState([])

    useEffect(() => {
        getCustomers()
    },[])

    function getCustomers(){
        axios.get('http://localhost:3001/customers')
        .then(res => {
            setCustomers(res.data)
        })
    }

    return(
        <div className='content main--content'>
            <div className='subtitle-section'>
                <h1>Clientes</h1>
            </div>
            <div className='center-horizontal-container'>
                <div className='card-container'>
                    {customers.map((item,index) => {

                        function deleteCustomer(){
                            axios.delete(`http://localhost:3001/customers/${item._id}`)
                            .then(res => {
                                alert(`El cliente ${res.data.name} ha sido eliminada`)
                                getCustomers()
                            })
                        }

                        return(
                            <div className='simple-card' key={index}>
                                <p>Cliente:</p>
                                <p>{item.name}</p>
                                <button className='btn-delete' onClick={deleteCustomer}>Eliminar</button>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='subtitle-section'>
                <Link to='/new-account'>
                    <button className='btn-main'>+ Crear nuevo cliente</button>
                </Link>
            </div>
        </div>
    )
}
