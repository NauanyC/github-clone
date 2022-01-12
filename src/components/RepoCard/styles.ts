import styled, { css } from 'styled-components';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';

export const Container = styled.div``;
export const TopSide = styled.div``;
export const BottomSide = styled.div``;

export const iconsCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconsCSS}
`;
export const StarIcon = styled(RiStarLine)`
  ${iconsCSS}
`;
export const ForkIcon = styled(AiOutlineFork)`
  ${iconsCSS}
`;
