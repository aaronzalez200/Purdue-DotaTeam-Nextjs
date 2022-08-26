import styles from '../styles/Teams.module.css'
import Data from '../public/PlayerData.json'
import Logo from '../public/PULogo.png'
import React from 'react'

const Teams = () => {
    const [md2lRoster, setMd2lRoster] = React.useState(1); 
    const [div1CSL, setDiv1CSL] = React.useState(1); 

    function handleClick1(e) {
        setMd2lRoster(1);
    }
    function handleClick2(e) {
        setMd2lRoster(2);
    }
    function handleClick3(e) {
        setMd2lRoster(3);
    }
    function handleClick4(e) {
        setMd2lRoster(4);
    }
    function handleClick5(e) {
        setMd2lRoster(5);
    }
    function handleClick6(e) {
        setDiv1CSL(1);
    }
    function handleClick7(e) {
        setDiv1CSL(8);
    }
    function handleClick8(e) {
        setDiv1CSL(7);
    }
    function handleClick9(e) {
        setDiv1CSL(9);
    }
    function handleClick10(e) {
        setDiv1CSL(6);
    }

    return (
        <div className={styles.Body}>
            <h1>CSL Fall 2022 Rosters</h1>
            <br></br>
            <div className={styles.Box}>
                <div className={styles.Content}>
                    <div className={styles.Title}>MD2L Roster</div>
                    <div className={styles.Left}>
                        <div className={styles.Carry} onClick={handleClick1}>Carry</div>
                        <div className={styles.Mid} onClick={handleClick2}>Mid</div>
                        <div className={styles.Offlane} onClick={handleClick3}>Offlane</div>
                        <div className={styles.Support} onClick={handleClick4}>Support</div>
                        <div className={styles.HardSupport} onClick={handleClick5}>Hard Support</div>
                    </div>
                    <div className={styles.Right}>
                        <div className={styles.PlayerImage}>
                            <img src="/PULogo.png" className={styles.Image} />
                        </div>
                        <div className={styles.PlayerStats}>
                            <p className={styles.Name}>{(Data[md2lRoster].name)}</p>
                            <br></br>
                            <p className={styles.School}>Major: {Data[md2lRoster].major}</p>
                            <p className={styles.School}>Year: {Data[md2lRoster].year}</p>
                            <p className={styles.SignatureHeroes}>
                                Signature Heroes:
                                <br></br>
                                {Data[md2lRoster].heroes}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className={styles.Box}>
                <div className={styles.Content}>
                    <div className={styles.Title}>CSL Main Roster</div>
                    <div className={styles.Left}>
                        <div className={styles.Carry} onClick={handleClick6}>Carry</div>
                        <div className={styles.Mid} onClick={handleClick7}>Mid</div>
                        <div className={styles.Offlane} onClick={handleClick8}>Offlane</div>
                        <div className={styles.Support} onClick={handleClick9}>Support</div>
                        <div className={styles.HardSupport} onClick={handleClick10}>Hard Support</div>
                    </div>
                    <div className={styles.Right}>
                        <div className={styles.PlayerImage}>
                            <img src="/PULogo.png" className={styles.Image} />
                        </div>
                        <div className={styles.PlayerStats}>
                            <p className={styles.Name}>{(Data[div1CSL].name)}</p>
                            <br></br>
                            <p className={styles.School}>Major: {Data[div1CSL].major}</p>
                            <p className={styles.School}>Year: {Data[div1CSL].year}</p>
                            <p className={styles.SignatureHeroes}>
                                Signature Heroes:
                                <br></br>
                                {Data[div1CSL].heroes}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default Teams