import styled, { css } from 'styled-components';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { iconsCSS } from '../../assets/styles/icons';

export const Container = styled.div``;

export const BreadCrumb = styled.div``;

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
