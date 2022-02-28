import React, { useCallback, useContext } from 'react'
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

import { List } from '../types'
import styles from '../styles/DropZone-styles.module.css'

const ContainerZone = () => {
    const navigate = useNavigate();

    const onDrop = useCallback(acceptedFiles => {
        const formData = new FormData();
        formData.append("arq", acceptedFiles[0]);

        axios.post<List[]>(
            'http://localhost:8080/', 
            formData, 
            {
                headers: {'Content-Type': 'multipart/form-data'}
            },
        ).then( 
            ({data}) => {
                return navigate("/chat", {state: data});
            }
        )
        
    }, [])

    const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({onDrop});

    return(
        <div className={styles.uploadAreaBackground}>
            <div className={styles.uploadArea}>
                <div {...getRootProps()} className={styles.uploadMessage}>
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                        <p>Arraste o arquivo aqui</p>:
                        <p>Clique aqui parar subir arquivo</p>
                    }
                </div>
            </div>
        </div>
        
    )
}

export default ContainerZone