import React from "react";
import { UserProps } from "../../types/user";

import {MdLocationPin} from 'react-icons/md'

import {Link} from 'react-router-dom'

import styles from './User.module.css'

const User = ({
    avatar_url,
    login,
    location, 
    followers,
    following,
}: UserProps) => {
    return (
        <div className={styles.user}>
            <img src={avatar_url} alt={login} className={styles.imagem} />
            <h2 className={styles.login}>{login}</h2>
            <div>
                <MdLocationPin/>
                <span>{location}</span>
                <div className={styles.seguidores}>
                    <div>
                        <p>Seguidores: {followers}</p>
                    </div>
                    <div>
                        <p>Seguindo: {following}</p>
                    </div>
                </div>
            </div>
            <Link to={`/repos/${login}`} className={styles.button}>Ver melhores projetos</Link>
        </div>
    )
}

export default User