import { Avatar } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useDataLayerValue } from './DataLayer'
import React from 'react'
import './Header.css';

function Header() {

    const [{ user }, dispatch] = useDataLayerValue()

    console.log('user', user);

    return (
        <div className='header'>
            <div className="header_left">
                <Search />
                <input 
                placeholder='Album artist, song'
                type="text"/>

            </div>
            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
