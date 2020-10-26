import React from 'react'
import './SideBar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from './DataLayer';

function SideBar() {

    const [{playlists}, dispatch] = useDataLayerValue()

    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="spotify-logo"/>
            
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

            <br/>
            <strong className="sidebar_title">PLAYLIST</strong>
            <hr />
            {playlists?.items?.map((item) => <SidebarOption title={item.name} />)}
        </div>
    )
}

export default SideBar
