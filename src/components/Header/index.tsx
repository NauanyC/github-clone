import * as React from 'react';
import { Container, GithubLogo, SearchForm } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <GithubLogo />
      <SearchForm>
        <input placeholder="Enter your Username or Repository..."></input>
      </SearchForm>
    </Container>
  );
};

export default Header;
