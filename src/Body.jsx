import React from 'react'
import './Body.css'
import Header from './Header'
import SongRow from './SongRow'
import { useDataLayerValue } from './DataLayer'
import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';

function Body({ spotify }) {

    const[{discover_weekly}, dispatch] = useDataLayerValue();
    console.log('discover -> ', discover_weekly);

    return (
        <div className="body">
            <Header spotify={ spotify }/>
            <div className="body_info">
                <img src={discover_weekly?.images[0]?.url} alt={discover_weekly?.name}/>
                
                <div className="body_info_text">
                    <strong>PLAYLIST</strong>
                    <h2>Discover weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>               
            </div>

            <div className="body_song">
                <div className="body_icon">
                    <PlayCircleFilled className='body_shuffle'/>
                    <Favorite fontSize='large'/>
                    <MoreHoriz />
                </div>
                
                {discover_weekly?.tracks?.items?.map((item) => 
                        <SongRow track={item.track} />
                    )}
            </div>
        </div>
    )
}

export default Body
