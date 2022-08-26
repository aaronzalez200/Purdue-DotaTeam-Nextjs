import React from "react"
import Image from 'next/image'
import Logo2 from '../public/PurdueLogo.png'
import Audio from '../public/Audio.png'
import Mute from '../public/Muted.png'
import styles from '../styles/Body.module.css'

export default function Body() {

    const [toggleMute, setToggleMute] = React.useState(true);
    // initially start muted
    function handleClick() {
        setToggleMute(prevState => !prevState)
    }
    function enterAudio(event) {
        if (event.key === 'Enter') {
          setToggleMute(prevState => !prevState)
        }
      }

    return (
    <div className={styles.Body}>
        <h1>Purdue Dota 2 Club</h1>
        <div className={styles.Summary}>
            <Image src={Logo2} />
            <p className={styles.clubinfo}>
                The Dota 2 Club is the hub for all Purdue Dota players. Play and learn the game through online matchmaking, inhouses, and LAN events.
            </p>
        </div>
        <br></br>
        <h1>Teamwork and Bonding</h1>
        <div className={styles.VideoInfo}>
            <p className={styles.Matchup}>Purdue vs Michigan</p>
            <br></br>
            <Image className={styles.VideoSound} src={toggleMute ? Mute : Audio} width="100px" height="100px" onClick={handleClick} onKeyDown={enterAudio}/>
        </div>
        <video className={styles.Video} loop muted={toggleMute} autoPlay="autoPlay" width="100%">
            <source src="/AvoRP.mp4" type="video/mp4"></source>
        </video>
        <br></br>
        <br></br>
    </div>
    )
}