import React, { useState, useEffect, useRef, useCallback }  from 'react'
import { Link, useLocation } from 'react-router-dom'
import { toPng } from 'html-to-image';
import styles from '../styles/Chat-styles.module.css'
import { BsArrowLeft, BsDownload } from 'react-icons/bs';

import { List } from '../types'

interface ChatContent {
    chat: List[];
    FileName: String;
}

const Chat = () => {
    const ref = useRef<HTMLDivElement>(null)
    const location = useLocation();
    const chatContent = location.state as ChatContent;
    
    const [list, setList] = useState<List[]>([]);
    const [sender, setSender] = useState<String>('');
    const [chatName, setChatName] = useState<String>(chatContent.FileName);
    
    const findSender = () => {
       if(chatContent.chat[1].name !== ''){
           setSender(String(chatContent.chat[0].name))
       }

        for (let i = 0; i < list.length; i++) {
            if (chatContent.chat[i].name != '') {
                setSender(String(chatContent.chat[i].name))
                break; 
            }
        }
    }

    const saveToPDF = useCallback(() => {
        if (ref.current === null) {
        return
        }

        toPng(ref.current, { cacheBust: true, })
        .then((dataUrl) => {
            const link = document.createElement('a')
            link.download = `${chatName}.png`
            link.href = dataUrl
            link.click()
        })
        .catch((err) => {
            console.log(err)
        })
    }, [ref])

    useEffect( () => {
        return setList(chatContent.chat), findSender()
    },[])
    
    return(
        <>
        <header className={styles.header}>
            <Link to="/" className={styles.link} >
                <BsArrowLeft size={40} />
                <span>Voltar</span>
            </Link>
            <p>{chatName}</p>

            <BsDownload size={30} style={{cursor: "pointer"}} onClick={() => saveToPDF()}/>
        </header>

        <section className={styles.section} ref={ref}>
            <ul>
                {list != [] || null
                ?
                list?.map( ({ date, hour, name, message}, i) => (
                    <li className={sender == name ? styles.sender : styles.reciever} key={i}>
                        <div className={sender == name ? styles.main_content_sender : styles.main_content_reciever}>
                            <div className={sender == name ? styles.name_sender : styles.name_reciever}>
                                {name}
                            </div>
                            <div className={styles.content}>
                                <div className={styles.message}>
                                    {
                                      message.indexOf('\n')
                                    ? message.split("\n").map( value => ( <><p>{value}</p></>) )
                                    : <p>{message}</p>
                                    }
                                </div>
                                <div className={styles.hour}>
                                    <i>{hour}</i>
                                </div>
                            </div>
                        </div>
                    </li>
                    ) 
                )
                :
                <p>Aguarde o carregamento...</p>
                }
            </ul>
        </section>
        </>
    )
}

export default Chat;