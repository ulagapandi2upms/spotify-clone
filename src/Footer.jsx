import { Grid, Slider } from '@material-ui/core'
import { PlayCircleOutline, PlaylistPlay, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown, VolumeUp } from '@material-ui/icons'
import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img className="footer_alubum_logo" src="https://th.bing.com/th/id/OIP.SwW3wyDN3JuSl_KSaB2-kwHaHa?pid=Api&rs=1" alt=""/>
                <div className="footersong_info">
                    <h4>Yeah</h4>
                    <p>Sont info</p>
                </div>
            </div>
            
            <div className="footer_center">
                <Shuffle className="footer_green" />
                <SkipPrevious className="footer_icon" />
                <PlayCircleOutline fontSize="large" className="" />
                <SkipNext className="footer_icon" />
                <Repeat className="footer_green" />
            </div>
            
            <div className="footer_right">
                <Grid container spacing= {2} >

                    <Grid item>
                        <PlaylistPlay />
                    </Grid>

                    <Grid item>
                        <VolumeDown />
                    </Grid>

                    <Grid item xs>
                        <Slider />
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default Footer
