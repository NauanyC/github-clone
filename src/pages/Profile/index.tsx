import * as React from 'react';
import ProfileData from '../../components/ProfileData';
import { Container, LeftSide, Main, RightSide } from './styles';

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

  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData user={user} />
        </LeftSide>
        <RightSide />
      </Main>
    </Container>
  );
};

export default Profile;
