import React from 'react'
import { Link } from 'react-router-dom'
import AddTeam from '../Adds/AddTeam'

export default function TeamList({
    teams, 
    handleSubmit, 
    name, 
    setName, 
    city, 
    setCity, 
    state, 
    setState
}) {

    return (
        <div>
            Kicking Ball Teams
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

            <AddTeam 
                handleSubmit={handleSubmit}
                name={name}
                setName={setName}
                city={city}
                setCity={setCity}
                state={state}
                setState={setState}
                />

        </div>
    )
}
