import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { deletePlayerById } from '../../services/players'
import { deleteTeamById, getTeamById } from '../../services/teams'

export default function TeamDetail() {

    const [team, setTeam] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const history = useHistory()

    useEffect(() => {
        async function getTeamDeets() {
            const response = await getTeamById(id)
            setTeam(response)
            setLoading(false)
        }
        getTeamDeets()
    }, [id]
    )

    const handleEdit = () => {
    history.push(`/team/edit/${id}`)
    }

    const handleDelete = async () => {
        await team.players.map((player) => deletePlayerById(player.id))
        await deleteTeamById(id);
        await history.push('/teams/')
    }

    return (
        <div>
            {loading ? <h1>'loading'</h1>
                    : <>
                    <h2>{team.name}</h2>
                    <p>{team.city}, {team.state}</p>
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
                    <button 
                        type='button' 
                        onClick={handleEdit}
                        >
                            Edit team
                    </button>
                    <button
                        type="button"
                        aria-label='delete team'
                        onClick={handleDelete}
                        >
                            Delete
                    </button>
                    </>
            }
        </div>
    )
}
