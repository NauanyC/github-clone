import * as React from 'react';
import ProfileData from '../../components/ProfileData';
import RandomCalendar from '../../components/RandomCalendar';
import RepositoryCard from '../../components/RepositoryCard';
import {
  Container,
  LeftSide,
  Main,
  RightSide,
  Repos,
  CalendarHeading,
  Tab,
  RepoIcon,
} from './styles';

const Profile: React.FC = () => {
  const user = {
    username: 'Nau',
    name: 'Nauany Costa',
    avatarUrl:
      'https://www.upwork.com/catalog-images-resized/fced3f99b8f9a11ef0ba0ab6166eff97/large',
    followers: 3156,
    following: 1,
    company: 'Microsoft',
    location: 'Minas Gerais, Brazil',
    email: 'nauanycc@outlook.com.br',
    blog: 'https://www.linkedin.com/in/nauany-costa/',
  };

  const repository = {
    username: 'Nau',
    reponame: 'CatMania',
    description: 'Blog about cute cats',
    language: 'Typescript',
    stars: 156,
    forks: 12,
  };

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">35</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        <span className="line" />
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData user={user} />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>
          <Repos>
            <h2>Random repos</h2>
            <div>
              {[0, 1, 2, 3, 4, 5].map((repo) => (
                <RepositoryCard key={repo} repository={repository} />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random Calendar (do not represent actual data)
          </CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
