import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <div>
            <NavLink to=''>Home</NavLink>
            <NavLink to='/teams'>Teams</NavLink>
            <NavLink to='/players'>Players</NavLink>
        </div>
    )
}
