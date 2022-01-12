import styled, { css } from 'styled-components';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 6px;
`;
export const TopSide = styled.div`
  > header {
    display: flex;
    align-items: center;
    > a {
      margin-left: 8px;
      font-size: 14px;
      font-weight: 600;
      color: var(--link);
      text-decoration: none;

      &::focus,
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
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
