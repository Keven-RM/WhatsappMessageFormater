import React from "react"
import styles from '../styles/Home-styles.module.css'

import ContainerZone from "../components/DropZone"

const Home = () => {
    return (
        <>
        <main className={styles.main}>
            <div className={styles.title}> 
                <h1>Bem vindo <br></br>ao <br></br> Message formater</h1>
            </div>
            <div>
                <p className={styles.description}>Aqui você pode vizualizar a sua conversa do whatsapp exportada como no app, tambem exportala em pdf e salva-la.</p>
            </div>
            <ContainerZone />
        </main>


        <footer className={styles.footer}>
            <p>Encontrou algum problema ? Entre em contato clicando  
                <a 
                href="mailto:keven.rm2004@gmail.com?subject=Problema%20com%20o%20funcionamento" 
                >
                 Aqui
                </a>
            </p>
        </footer>
        </>
    )
}

export default Home
