import React from 'react'
import { Link } from 'react-router-dom'

export default function TeamList({teams}) {

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
