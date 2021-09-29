import React, { useState, useEffect } from 'react'

const axios = require('axios')

function NewTeam(){
    let [newTeam, setNewTeam] = useState({ name : '', users: [] })
    let [users, setUsers] = useState([])
    let [selectedUsers, setSelectedUsers] = useState([])

    useEffect(() =>{
        getusers()
    },[])

    function getusers(e){
        axios.get('http://localhost:3001/users')
        .then(res => {
            setUsers(res.data)
        })
    }

    function createNewTeam(e){
        e.preventDefault()
        axios.post('http://localhost:3001/teams/', newTeam)
        .then(res => {
            if(!res.error){
                alert(`Equipo ${res.data.name} creado!`)
                setSelectedUsers([])
                setNewTeam({ name : '', users: [] })
            }
        })
    }

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
                        <button className='btn-main' onClick={createNewTeam}>Crear equipo</button>
                    </fieldset>
                </form>
            </div>
            <div className='center-content vertical-elements'>
                {selectedUsers.map(item=>{
                    return(
                        <div className='grid-two-columns'>
                            <p className='el-mg'>{item}</p>
                            <p> X </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )

    function handleNaeInput(e){
        let value = e.target.value
        setNewTeam({ ...newTeam, ['name']: value })
    }

     function handleSelectValues(e){
        let value = e.target.value
        if(value == '') return
        let repeateValue = selectedUsers.includes(value)
        if( repeateValue ) return
        selectedUsers.push(value)
        setNewTeam({...newTeam, ['users']: selectedUsers })
    }
}

export  default NewTeam