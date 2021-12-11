import React, { useEffect, useState } from 'react'
import PlayerList from '../../components/List/PlayerList'
import { getPlayers } from '../../services/players'

export default function Players() {

    const [players, setPlayers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getAllPlayers() {
            const response = await getPlayers()
            setPlayers(response)
            setLoading(false)
        }
        getAllPlayers()
    }, [])

    return (
        <div>
            {loading ? <h1>'loading'</h1>
                : <PlayerList players={players}/>
            }
        </div>
    )
}
