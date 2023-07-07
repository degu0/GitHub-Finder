import React from "react";

type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}


import { useState, KeyboardEvent } from "react";
import {BsSearch} from 'react-icons/bs'



const Search = ({loadUser}:SearchProps) => {
    const [userName, setUserName] = useState("")

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === 'Enter') {
            loadUser(userName);
        }
    }

    return(
        <div>
            <h2>Busque por um usuario:</h2>
            <p>Conheca seus melhores repositorios</p>
            <div>
                <input 
                type="text" 
                placeholder="Digite o nome do usuario"
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={handleKeyDown}
                 />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
};

export default Search