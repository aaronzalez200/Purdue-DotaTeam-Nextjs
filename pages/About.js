import styles from '../styles/About.module.css'

const About = () => {
    return (
        <div className={styles.Body}>
            <h1>"Boiler Up Hammer Down"</h1>
            <br></br>
            <div className={styles.Paragraph}>
                <p className={styles.Text}>
                    The Dota 2 Club 
                    <br></br>
                    is the hub for all Purdue Dota players. 
                    Play and learn the game through online matchmaking, 
                    inhouses, and LAN events.
                    <br></br>
                    <br></br>
                    <span>
                    The club had its start in Purdue University as early as 2014.
                    One of our most notable alumni is William Lee
                    <a href="https://liquipedia.net/dota2/Blitz" className={styles.Blitz}> (Blitz) </a>
                    who currently coaches the professional Dota 2 team, Team Liquid.
                    </span>
                    <br></br>
                </p>
            </div>
        </div>
    )
}

export default About