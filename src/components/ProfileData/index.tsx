import * as React from 'react';
import { User } from '../../interfaces/user';
import {
  Avatar,
  BlogIcon,
  Column,
  CompanyIcon,
  Container,
  EmailIcon,
  Flex,
  LocationIcon,
  PeopleIcon,
  Row,
} from './styles';

interface ProfileProps {
  user: User;
}

const ProfileData: React.FC<ProfileProps> = ({ user }) => {
  const {
    username,
    name,
    avatarUrl,
    followers,
    following,
    company,
    location,
    email,
    blog,
  } = user;

  return (
    <Container>
      <Flex>
        <Avatar src={avatarUrl} alt={username} />
        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>
      </Flex>
      <Row>
        <li>
          <PeopleIcon />
          <b>{followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>
        <li>
          <b>{following}</b>
          <span>following</span>
        </li>
      </Row>
      <Column>
        {company && (
          <li>
            <CompanyIcon />
            <span>{company}</span>
          </li>
        )}
        {location && (
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>
        )}
        {email && (
          <li>
            <EmailIcon />
            <span>{email}</span>
          </li>
        )}
        {blog && (
          <li>
            <BlogIcon />
            <span>{blog}</span>
          </li>
        )}
      </Column>
    </Container>
  );
};

export default ProfileData;
