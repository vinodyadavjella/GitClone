import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface HeaderProps {
    to: any,
    activeClassName: any,
    inactiveClassName: any,
    className: any
}


const NavLink: React.FC<HeaderProps> = ({ to, className, activeClassName, inactiveClassName, ...rest }) => {
    let location = useLocation();

    let isActive = location.pathname === to;

    let allClassName = className + " " + (isActive ? `${activeClassName}` : `${inactiveClassName}`)

    return (
        <Link className={allClassName} to={to} {...rest} />
    )
}

export default NavLink

