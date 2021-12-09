import React from 'react'
import { Link } from 'react-router-dom'
import AddPlayer from './AddPlayer'

export default function PlayerList({players}) {

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

            <AddPlayer />
        </div>
    )
}
