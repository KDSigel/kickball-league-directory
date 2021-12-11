import React, { useEffect, useState } from 'react'
import TeamList from '../../components/List/TeamList'
import { getTeams } from '../../services/teams'

export default function Teams() {

    const [teams, setTeams] = useState([])
    const [loading, setLoading] = useState(true)

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
                : <TeamList teams={teams}/>
            }
        </div>
    )
}
