import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getTeams } from '../../services/teams'

export default function TeamList() {

    const [teams, setTeams] = useState([])

    useEffect(() => {
        async function getAllTeams() {
            const response = await getTeams()
            setTeams(response)
        }
        getAllTeams()
    }, [])

    return (
        <div>
            <ul>
            {teams.map((team) => {
                return (
                    <li key={team.id}>
                    <Link to={`/team/${team.id}`}>
                    <div>{team.name}</div>
                    </Link>
                    </li>
                    )
            }
            )}
            </ul>
        </div>
    )
}
