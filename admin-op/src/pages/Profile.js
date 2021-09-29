import React, { useEffect, useState } from 'react'

const axios = require('axios')

export default function Profile(){
    let [user, setUser] = useState({})
    let [role, setRole] = useState({})
    let [userUpdated, setUserUpdated] = useState({
        name: '',
        english: '',
        technoligies:'',
        cv:''
    })
    let [showForm, setShowForm] = useState(false)
    let id = "61522cad8d69ebc89410462e"

    useEffect(() => {
        getUser()
    }, [])

    function getUser(){
        axios.get(`http://localhost:3001/users/${id}`)
        .then(res => {
            setUser(res.data)
            axios.get(`http://localhost:3001/roles/${res.data.role}`)
            .then(res => {
                setRole(res.data)
            })
        })
    }

    function updateUser(){
        axios.put(`http://localhost:3001/users/${user._id}`, userUpdated)
        .then(res => {
            alert(`El usuario ${res.data.name} ha sido actualizado`)
            setUserUpdated({
                name: '',
                english: '',
                technoligies:'',
                cv:''
            })
        })
    }



    return(
        <section className='main-content text-left medium-container'>
            <div className='grid-three-columns' id='profile'>
                <div>
                    <h1>Perfìl del usuario</h1>
                    <div className='el-mg'>
                        <p>{user.name}</p>
                    </div>
                    <div className='el-mg'>
                        <p>{role.name}</p>
                    </div>
                    <div className='el-mg'>
                        <p>{user.email}</p>
                    </div>
                    <div className='el-mg'>
                        { user.english ? <p>{user.english}</p> : <p>No hay nivel registrado</p>}
                    </div>
                    <div className='el-mg'>
                        { user.technologies ? <p>{user.technologies}</p> : <p>No hay tecnologias registradas</p>}
                    </div>
                    <div className='el-mg'>
                        { user.cv ? <p>{user.cv}</p> : <p>No hay link registado</p>}
                    </div>
                    <button onClick={showFormHandler} className='btn-main'>Editar</button>
                </div>
                <div>
                    { showForm ? userDetailsForm() : null }
                </div>
                <div></div>  
            </div>
        </section>
    )

    function showFormHandler(){
        setShowForm(true)
    }

    function userDetailsForm(){
        return(
            <form>
                <fieldset  className='vertical-elements big-container'>
                    <legend className='text-left'>Datos del usuario</legend>
                    <label className='text-left'>Nombre:</label>
                    <input type='text' placeholder='Pedrito...' className='el-bg' onChange={handleNameInput}></input>
                    <select className='el-mg' onClick={handleEnglishLevel}>
                        <option value='' selected disabled>Nivel de ingles</option>
                        <option value='begginer'>Principiante</option>
                        <option value='middle'>Intermedio</option>
                        <option value='advanced'>Aanzado</option>
                    </select>
                    <label className='text-left'>Tecnologìas:</label>
                    <textarea type='text' placeholder='Conociminetos tècnicos' className='el-mg' onChange={handleTechnologiesText}></textarea>
                    <label className='text-left'>Link CV:</label>
                    <input type='text' placeholder='http://.....' className='el-bg' onChange={handleCVInput}></input>
                    <button className='btn-main' onClick={updateUser}>Guardar cambios</button>
                </fieldset>
            </form>
        )

        function handleNameInput(e){
            let value = e.target.value
            setUserUpdated({...userUpdated, ['name']: value})
        }

        function handleEnglishLevel(e){
            let value = e.target.value
            setUserUpdated({...userUpdated, ['english']: value})
        }

        function handleTechnologiesText(e){
            let value = e.target.value
            setUserUpdated({...userUpdated, ['technologies']: value})
        }

        function handleCVInput(e){
            let value = e.target.value
            setUserUpdated({...userUpdated, ['cv']: value})
        }
    }
}