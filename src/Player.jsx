import React from 'react'
import './Player.css'
import Body from './Body.jsx'
import SideBar from './SideBar'
import Footer from './Footer.jsx'

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player_body">
                <SideBar />
                <Body spotify={spotify}/>
            </div>
            <Footer />
        </div>
    )
}

export default Player
