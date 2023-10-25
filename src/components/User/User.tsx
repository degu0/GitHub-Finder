import { UserProps } from "../../types/user";

import { GoPeople } from 'react-icons/go'

import { Link } from 'react-router-dom'

import styles from './User.module.css'

const User = ({
    avatar_url,
    login,
    name,
    followers,
    following,
}: UserProps) => {
    return (
        <div className={styles.user}>
            <img src={avatar_url} alt={login} className={styles.imagem} />
            <h2 className={styles.name}>{name}</h2>
            <h4 className={styles.login}>{login}</h4>
            <div>
                <div className={styles.seguidores}>
                    <div className={styles.followers}>
                    < GoPeople />
                        <p>Seguidores: {followers}</p>
                    </div>
                    <div className={styles.following}>
                        <p>Seguindo: {following}</p>
                    </div>
                </div>
            </div>
            <Link to={`/repos/${login}`} className={styles.button}>Ver melhores projetos</Link>
        </div>
    )
}

export default User