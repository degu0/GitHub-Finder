import { RepoProps } from "../types/repo";

import Repo from "../components/Repo/Repo";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./Repos.module.css";
import BackBtn from "../components/BackButton/BackBtn";


const Repos = () => {
    const { username } = useParams();

    const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);

    useEffect(() => {
        const loadrepos = async function (username: string) {
            const res = await fetch(`https://api.github.com/users/${username}/repos`);
            const data = await res.json();

            let orderedRepos = data.sort(
                (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
            );

            orderedRepos = orderedRepos.slice(0, 5);

            setRepos(orderedRepos);
        };

        if (username) {
            loadrepos(username);
        }
    }, []);


    return (
        <div className={styles.repos}>
            <BackBtn/>
            <h2>Explore os repositórios do usuário: {username}</h2>
            {repos && repos.length === 0 && <p>Não há repositórios.</p>}
            {repos && repos.length > 0 && (
                <div className={styles.repos_container}>
                    {repos.map((repo: RepoProps) => (
                        <Repo key={repo.name} {...repo} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Repos;