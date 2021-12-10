import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import TeamList from '../../components/List/TeamList'
import { createTeam, getTeams } from '../../services/teams'

export default function Teams() {

    const [teams, setTeams] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await createTeam({name, city, state})
        history.push(`/team/${response[0].id}`)
    }

    useEffect(() => {
        async function getAllTeams() {
            const response = await getTeams()
            setTeams(response)
            setLoading(false)
        }
        getAllTeams()
    }, [])

    return (
        <div>
            {loading ? <h1>'loading'</h1>
                : <TeamList 
                teams={teams} 
                handleSubmit={handleSubmit}
                name={name}
                setName={setName}
                city={city}
                setCity={setCity}
                state={state}
                setState={setState}
                />
            }
        </div>
    )
}
