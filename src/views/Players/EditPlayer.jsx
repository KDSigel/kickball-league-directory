import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { getPlayerById, updatePlayerById } from '../../services/players'

export default function EditPlayer() {

    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const history = useHistory()
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')

    const handleEdit = async (e) => {
        e.preventDefault()
        const response = await updatePlayerById(id, { name, position })
        history.push(`/player/${response[0].id}`)
    }

    useEffect(() => {
        async function getPlayerDetails() {
            const response = await getPlayerById(id)
            setName(response.name)
            setPosition(response.position)
            setLoading(false)
        }
        getPlayerDetails()
    }, [id]
    )

    return (
        <div>
            {loading ? <h1>'loading'</h1>
                    : <>
                <fieldset>
                    <legend>Edit Player</legend>
                    <form onSubmit={handleEdit}>

                        <label htmlFor='playerName'>Player Name</label>
                        <input 
                        aria-label='player name'
                        type='text' 
                        id='teamName' 
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />

                        <label htmlFor='position'>Position</label>
                        <input 
                        aria-label='position'
                        type='text' 
                        id='position' 
                        name='position'
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        />

                        <button
                        aria-label='Update Player'
                        type='submit'>Update Player
                        </button>
                    </form>
                </fieldset>
            </>
            }
        </div>
    )
}
