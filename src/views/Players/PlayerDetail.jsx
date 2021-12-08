import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPlayerById } from '../../services/players'

export default function PlayerDetail() {

    const [player, setPlayer] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

useEffect(() => {
    async function getPlayerDeets() {
        const response = await getPlayerById(id)
        setPlayer(response)
        setLoading(false)
    }
    getPlayerDeets()
}, []
)

    return (
    
        <div>
            {loading ? <h1>'loading'</h1>
                    : <>
                    <h2>{player.name}</h2>
                    <p>{player.position} for the {player.teams.name}</p>
                    </>
            }
        </div>
    )
}
