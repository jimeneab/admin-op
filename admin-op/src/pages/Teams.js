import React, { useState, useEffect } from 'react'

const axios = require('axios')

export default function Teams(){
    let [teams,setTeams] = useState([])

    useEffect(() => {
        getTeams()
    },[])

    function getTeams(){
        axios.get('http://localhost:3001/teams')
        .then(res => {
            setTeams(res.data)
        })
    }

    console.log(teams)

    return(
        <div className='content main--content'>
            <div className='subtitle-section'>
                <h1>Equipos</h1>
            </div>
            <div className='center-horizontal-container'>
                <div className='card-container'>
                    {teams.map((item,index) => {

                        function deleteTeam(){
                            axios.delete(`http://localhost:3001/teams/${item._id}`)
                            .then(res => {
                                alert(`La cuenta ${res.data.name} ha sido eliminada`)
                                getTeams()
                            })
                        }

                        return(
                            <div className='simple-card' key={index}>
                                <p>Equipo:</p>
                                <p>{item.name}</p>
                                <button className='btn-delete' onClick={deleteTeam}>Eliminar</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
