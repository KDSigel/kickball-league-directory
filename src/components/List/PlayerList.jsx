import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPlayers } from '../../services/players'

export default function PlayerList() {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        async function getAllPlayers() {
            const response = await getPlayers()
            setPlayers(response)
        }
        getAllPlayers()
    }, [])

    return (
        <div>
            Players
            <ul>
            {players.map((player) => {
                return (
                    <li key={player.id}>
                    <Link to={`/player/${player.id}`}>
                    <div>{player.name}</div>
                    </Link>
                    </li>
                    )
            }
            )}
            </ul>
        </div>
    )
}
