type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

import { useState, KeyboardEvent } from "react";
import { BsSearch, BsGithub } from 'react-icons/bs'

import styles from './Search.module.css'

const Search = ({ loadUser }: SearchProps) => {
    const [userName, setUserName] = useState("")

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            loadUser(userName);
        }
    }

    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <BsGithub size={45} />
                <h4 className={styles.logoName}>GitHub</h4>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Digite o nome do usuario"
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className={styles.input}
                />
                <button onClick={() => loadUser(userName)} className={styles.button}>
                    <BsSearch size={16} />
                </button>
            </div>
        </div>
    )
};

export default Search