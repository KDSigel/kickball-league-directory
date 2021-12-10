import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { getTeamById, updateTeamById } from '../../services/teams'

export default function EditTeam() {

    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const history = useHistory()

    const handleEdit = async (e) => {
        e.preventDefault()
        const response = await updateTeamById(id, { name, city, state })
        history.push(`/team/${response[0].id}`)
    }

    useEffect(() => {
        async function getTeamDeets() {
            const response = await getTeamById(id)
            setName(response.name)
            setCity(response.city)
            setState(response.state)
            setLoading(false)
        }
        getTeamDeets()
    }, [id]
    )

    return (
        <div>
            {loading ? <h1>'loading'</h1>
                    : <>
                <fieldset>
                    <legend>Edit Team</legend>
                    <form onSubmit={handleEdit}>

                        <label htmlFor='teamName'>Team Name</label>
                        <input 
                        aria-label='team name'
                        type='text' 
                        id='teamName' 
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />

                        <label htmlFor='city'>City</label>
                        <input 
                        aria-label='city'
                        type='text' 
                        id='city' 
                        name='city'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        />

                        <label htmlFor='state'>State</label>
                        <input 
                        aria-label='state'
                        type='text' 
                        id='state' 
                        name='state'
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        />
                        <button
                        aria-label='Update Team'
                        type='submit'>Update Team
                        </button>
                    </form>
                </fieldset>
            </>
            }
        </div>
    )
}
