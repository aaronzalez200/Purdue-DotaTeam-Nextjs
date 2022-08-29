import styles from '../styles/Contact.module.css'

const Contact = () => {
    return (
        <div className={styles.Body}>
            <h1>Primary Contact: </h1>
            <p className={styles.email}>kliendo@purdue.edu</p>
            <br></br>
            <h2>Get Invovled</h2>
            <div className={styles.Box}>
                <div className={styles.socialsImages}>
                    <a href="https://discord.gg/AjEMaJ2">
                        <img src="/discord.png" />
                    </a>
                    <a href="https://www.instagram.com/purduedota2/">
                        <img src="/instagram.png" />
                    </a>
                </div>
            </div>
            <div className={styles.Box}>
                <div className={styles.socials}>
                    <p>Discord</p>
                    <p>Instagram</p>
                </div>
            </div>
           
        </div>
    )
}

export default Contact