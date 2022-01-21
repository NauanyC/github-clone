import styled from 'styled-components';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { iconsCSS } from '../../assets/styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  > p {
    font-size: 16px;
  }
`;

export const BreadCrumb = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;

  font-size: 18px;

  > a {
    color: var(--link);
    text-decoration: none;

    &::hover,
    &:focus {
      text-decoration: underline;
    }
  }

  &.username {
    margin-left: 8px;
  }

  &.reponame {
    font-weight: 600;
  }

  > span {
    padding: 0 5px;
  }
`;

export const Stats = styled.div``;

export const LinkButton = styled.a``;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconsCSS}
`;

export const StarIcon = styled(RiStarLine)`
  ${iconsCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconsCSS}
`;

export const GithubIcon = styled(FaGithub)`
  ${iconsCSS}
`;
