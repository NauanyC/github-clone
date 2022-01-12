import React from 'react';
import { Link } from 'react-router-dom';
import { Repository } from '../../interfaces/repository';

import {
  BottomSide,
  Container,
  ForkIcon,
  RepoIcon,
  StarIcon,
  TopSide,
} from './styles';

interface RepositoryCardProps {
  repository: Repository;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository }) => {
  const { username, reponame, description, language, stars, forks } =
    repository;

  const languageClass = language ? language.toLowerCase() : 'other';

  return (
    <Container>
      <TopSide>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>

        <p>{description}</p>
      </TopSide>
      <BottomSide>
        <ul>
          <li>
            <div className={`language ${languageClass}`}></div>
            <span>{language}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </BottomSide>
    </Container>
  );
};

export default RepositoryCard;
