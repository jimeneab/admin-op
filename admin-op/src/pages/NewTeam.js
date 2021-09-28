import React, { useState, useEffect } from 'react'

const axios = require('axios')

function NewTeam(){
    let [newTeam, setNewTeam] = useState({ name : '', users: [] })
    let [users, setUsers] = useState([])
    let [selectedUsers, setSelectedUsers] = useState([])

    useEffect(() =>{
        getusers()
    },[])

    function getusers(){
        axios.get('http://localhost:3001/users')
        .then(res => {
            setUsers(res.data)
        })
    }

    console.log(newTeam)
    console.log(selectedUsers)

    return(
        <section className='grid-three-columns main-content'>
            <div></div>
            <div className='center-content'>
                <form>
                    <fieldset  className='vertical-elements big-container'>
                        <legend className='text-left'>Datos del equipo</legend>
                        <label className='text-left'>Nombre:</label>
                        <input type='text' placeholder='Los rezagados' className='el-bg' onChange={handleNaeInput}></input>
                        <select className='el-bg' onClick={handleSelectValues}>
                            <option value={""} key={ 0 } disabled selected>Integrantes</option>
                            { users.map((item, index) => {
                                return(
                                    <option value={item._id} key={ index + 1}>{item.name}</option>
                                )
                            })}
                        </select>
                        <button className='btn-main'>Crear equipo</button>
                    </fieldset>
                </form>
            </div>
            <div></div>
        </section>
    )

    function handleNaeInput(e){
        let value = e.target.value
        setNewTeam({ ...newTeam, ['name']: value })
    }

     function handleSelectValues(e){
        let value = e.target.value
        if(value == '') return
        if(value in selectedUsers) return
        selectedUsers.push(value)
        setNewTeam({...newTeam, ['users']: selectedUsers })
    }
}

export  default NewTeam