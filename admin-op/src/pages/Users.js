import React, { useState, useEffect } from 'react'

const axios = require('axios')

export default function Users(){
    let [users,setUsers] = useState([])

    useEffect(()=>{
        getUsers()
    }, [])

    function getUsers(){
        axios.get('http://localhost:3001/users')
        .then(res => {
            setUsers(res.data)
        })
    }

    return(
        <div className='content main--content'>
            <div className='subtitle-section'>
                <h1>Usuarios</h1>
            </div>
            <div className='center-horizontal-container'>
                <div className='card-container'>
                    {users.map((item,index) => {

                        function deleteUser(){
                            axios.delete(`http://localhost:3001/users/${item._id}`)
                            .then(res => {
                                alert(`El usuario ${res.data.name} ha sido eliminado`)
                                getUsers()
                            })
                        }

                        return(
                            <div className='simple-card' key={index}>
                                <p>Usuario:</p>
                                <p>{item.name}</p>
                                <p>{item.email}</p>
                                <button className='btn-delete' onClick={deleteUser}>Eliminar</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
