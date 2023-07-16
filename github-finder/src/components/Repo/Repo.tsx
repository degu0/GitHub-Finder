import { RepoProps } from "../../types/repo";

import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";

import styles from "./Repo.module.css";

const Repo = ({
  name,
  html_url,
  visibility,
  language,
  forks_count,
  stargazers_count,
}: RepoProps) => {
  return (
    <div className={styles.repo}>
      <hr />
      <div className={styles.repo_container}>
        <div className={styles.title}>
          <a href={html_url} target="_blank" className={styles.link_repo}>{name}</a>
          <div className={styles.circle}>
            <p className={styles.visibility}>{visibility}</p>
          </div>
        </div>
        <div className={styles.stats}>
          <div>
            <p>
              <BsCodeSlash /> {language}
            </p>
          </div>
          <div className={styles.star}>
            <AiOutlineStar />
            <span>{stargazers_count}</span>
          </div>
          <div>
            <AiOutlineFork />
            <span>{forks_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repo;