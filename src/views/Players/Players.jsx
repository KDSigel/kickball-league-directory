import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import PlayerList from '../../components/List/PlayerList'
import { createPlayer, getPlayers } from '../../services/players'

export default function Players() {

    const [players, setPlayers] = useState([])
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [teamId, setTeamId] = useState('')
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await createPlayer({name, position, teamId})
        history.push(`/player/${response[0].id}`)
    }

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
                : <PlayerList 
                players={players}
                name={name}
                setName={setName}
                handleSubmit={handleSubmit}
                position={position}
                setPosition={setPosition}
                teamId={teamId}
                setTeamId={setTeamId}
                />
            }
        </div>
    )
}
