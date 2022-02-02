import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
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
import { APIRepository, APIUser } from '../../@types';

interface Data {
  user?: APIUser;
  repositories?: APIRepository[];
  error?: string;
}

const Profile: React.FC = () => {
  const { username = 'NauanyC' } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      axios.get(`https://api.github.com/users/${username}`),
      axios.get(`https://api.github.com/users/${username}/repos`),
    ]).then(async (responses) => {
      const [userResponse, repositoriesResponse] = responses;
      if (userResponse.status === 404) {
        setData({ error: 'User not found...' });
        return;
      }

      const user = await userResponse.data.json();
      const repositories = await repositoriesResponse.data.json();
      setData({ user, repositories, error: '' });
    });
  }, [setData, username]);

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
          <ProfileData user={data?.user} />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>
          <Repos>
            <h2>Random repos</h2>
            <div>
              {[data?.repositories.map((repo) => (
                <RepositoryCard key={repo.name} repository={repo} />
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
