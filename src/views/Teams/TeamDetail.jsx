import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getTeamById } from '../../services/teams'

export default function TeamDetail() {

    const [team, setTeam] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        async function getTeamDeets() {
            const response = await getTeamById(id)
            setTeam(response)
            setLoading(false)
        }
        getTeamDeets()
    }, [id]
    )

    return (
        <div>
            {loading ? <h1>'loading'</h1>
                    : <>
                    <h2>{team.name}</h2>
                    <p>{team.city}</p>
                    <ul>
                        {team.players.map((player) => {
                            return (
                            <li key={player.id}>
                                <Link to={`/player/${player.id}`}>
                                {player.position}: {player.name}
                                </Link>
                            </li>
                            );
                        })}
                    </ul>
                    </>
            }
        </div>
    )
}
