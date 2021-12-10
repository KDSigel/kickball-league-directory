import React from 'react'

export default function AddPlayer({
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
            <fieldset>
                <legend>Add New Player</legend>
                <form onSubmit={handleSubmit}>

                    <label htmlFor='playerName'>Player Name</label>
                    <input 
                        aria-label='player name'
                        type='text' 
                        id='playerName' 
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor='position'>Player position</label>
                    <input 
                        aria-label='position'
                        type='text' 
                        id='position' 
                        name='position'
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    />

                    <label htmlFor='teamId'>Team ID</label>
                    <input 
                        aria-label='team id number'
                        type='text' 
                        id='teamId' 
                        name='teamId'
                        value={teamId}
                        onChange={(e) => setTeamId(e.target.value)}
                    />

                    <button
                        aria-label='Add New Player'
                        type='submit'>Add New Player
                    </button>
                </form>
            </fieldset>
        </div>
    )
}
