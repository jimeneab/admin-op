import React, { useState, useEffect } from 'react'

const axios = require('axios')

function NewAccount(){
    let [newAccount, setNewAccount] = useState({})
    let [users, setUsers] = useState([])
    let [customers, setCustomers] = useState([])
    let [teams, setTeams] = useState([])

    useEffect(() => {
        getUsers()
        getCustomers()
        getTeams()
    }, [])

    function getUsers(){
        axios.get('http://localhost:3001/users')
        .then(res => {
            setUsers(res.data)
        })
    }
    function getCustomers(){
        axios.get('http://localhost:3001/customers')
        .then(res => {
            setCustomers(res.data)
        })
    }
    function getTeams(){
        axios.get('http://localhost:3001/teams/')
        .then(res => {
            setTeams(res.data)
        })
    }

    function createNewAccount(e){
        e.preventDefault()
        axios.post('http://localhost:3001/accounts', newAccount)
        .then(res => {
            alert(`La cuenta ${res.data.name}se creò con èxito`)
            setNewAccount({})
        })
    }

    return(
        <section className='grid-three-columns main-content'>
            <div></div>
            <div className='center-content'>
                <form>
                    <fieldset  className='vertical-elements big-container'>
                        <legend className='text-left'>Datos de la cuenta</legend>
                        <label className='text-left'>Nombre:</label>
                        <input type='text' placeholder='Arkus Nexus' className='el-bg' onChange={ handleNameInput }></input>
                       <select onClick={ handleCustomerSelect } className='el-bg'>
                           <option value='' selected disabled key={0}>Seleccionar Cliente</option>
                           {customers.map((item,index) => {
                               return(
                                   <option value={item._id} key={ index+1 }>{item.name}</option>
                               )
                           })}
                       </select>
                       <select onClick={ handleUserSelect } className='el-bg'>
                           <option value='' selected disabled key={0}>Seleccionar Cliente</option>
                           {users.map((item,index) => {
                               return(
                                   <option value={item._id} key={ index+1 }>{item.name}</option>
                               )
                           })}
                       </select>
                       <select onClick={ handleTeamSelect } className='el-bg'>
                           <option value='' selected disabled key={0}>Seleccionar Cliente</option>
                           {teams.map((item,index) => {
                               return(
                                   <option value={item._id} key={ index+1 }>{item.name}</option>
                               )
                           })}
                       </select>
                        <button className='btn-main' onClick={createNewAccount}>Crear cuenta</button>
                    </fieldset>
                </form>
            </div>
            <div></div>
        </section>
    )

    function handleNameInput(e){
        let value = e.target.value
        setNewAccount({...newAccount, ['name']: value})
    }

    function handleCustomerSelect(e){
        let value = e.target.value
        if(value == '') return
        setNewAccount({ ...newAccount, ['customerId']: value })
    }

    function handleUserSelect(e){
        let value = e.target.value
        if(value == '') return
        setNewAccount({ ...newAccount, ['leaderId']: value })
    }

    function handleTeamSelect(e){
        let value = e.target.value
        if(value == '') return
        setNewAccount({ ...newAccount, ['teamId']: value })
    }
}

export  default NewAccount