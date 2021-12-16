import React from 'react'
import { Link } from 'react-router-dom'
import AddPlayer from '../Adds/AddPlayer'

export default function PlayerList({
    players, 
    name, 
    setName, 
    handleSubmit, 
    position, 
    setPosition, 
    teamId, 
    setTeamId
}) {

    return (
        <div>
            Playas
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

            <AddPlayer
                name={name}
                setName={setName}
                handleSubmit={handleSubmit}
                position={position}
                setPosition={setPosition}
                teamId={teamId}
                setTeamId={setTeamId}
             />
        </div>
    )
}
