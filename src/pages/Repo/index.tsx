import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  BreadCrumb,
  Stats,
  RepoIcon,
  Container,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <BreadCrumb>
        <RepoIcon />
        <Link className={'username'} to="/NauanyC">
          NauanyC
        </Link>
        <span>/</span>
        <Link className={'reponame'} to="/NauanyC/github-clone">
          github-clone
        </Link>
      </BreadCrumb>
      <p>Contains a github clone.</p>
      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>12</b>
          <span>forks</span>
        </li>
      </Stats>
      <LinkButton href="https://github.com/NauanyC/github-clone">
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
