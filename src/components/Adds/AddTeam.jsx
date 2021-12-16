import React from 'react'

export default function AddTeam({
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
            <fieldset>
                <legend>Add New Team</legend>
                <form onSubmit={handleSubmit}>

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
                        aria-label='Add New Team'
                        type='submit'>Add New Team
                    </button>
                </form>
            </fieldset>
        </div>
    )
}
