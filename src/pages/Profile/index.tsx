import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  extractRepositoriesFromApiResponse,
  extractUserFromApiResponse,
} from '../../utils/helpers';
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
import { Repository } from '../../interfaces/repository';
import { User } from '../../interfaces/user';

interface Data {
  user?: User;
  repositories?: Array<Repository>;
  error?: string;
}

const Profile: React.FC = () => {
  const { username = 'NauanyC' } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      axios.get<APIUser>(`https://api.github.com/users/${username}`),
      axios.get<Array<APIRepository>>(
        `https://api.github.com/users/${username}/repos`
      ),
    ]).then(async (responses) => {
      const [userResponse, repositoriesResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: 'User not found...' });
        return;
      }

      const user = extractUserFromApiResponse(userResponse.data);

      const repositories = extractRepositoriesFromApiResponse(
        repositoriesResponse.data
      );

      setData({ user, repositories, error: '' });
    });
  }, [setData, username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.user || !data?.repositories) {
    return <h1>Loading...</h1>;
  }

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">{data?.user?.repositoriesCount}</span>
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
              {data?.repositories.map((repository) => (
                <RepositoryCard
                  key={`${repository.username}/${repository.reponame}`}
                  repository={repository}
                />
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
