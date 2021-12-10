import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { deletePlayerById, getPlayerById } from '../../services/players'

export default function PlayerDetail() {

    const [player, setPlayer] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const history = useHistory()

useEffect(() => {
    async function getPlayerDeets() {
        const response = await getPlayerById(id)
        setPlayer(response)
        setLoading(false)
    }
    getPlayerDeets()
}, [id]
)

    const handleEdit = () => {
    history.push(`/player/edit/${id}`)
    }

    const handleDelete = async () => {
        await deletePlayerById(id);
        await history.push('/players/')
    }

    return (
    
        <div>
            {loading ? <h1>'loading'</h1>
                    : <>
                    <h2>{player.name}</h2>
                    <p>{player.position} for the {player.teams.name}</p>
                    </>
            }
                                <button 
                        type='button' 
                        onClick={handleEdit}
                        >
                            Edit player
                    </button>
                    <button
                        type="button"
                        aria-label='delete player'
                        onClick={handleDelete}
                        >
                            Delete
                    </button>
        </div>
    )
}
