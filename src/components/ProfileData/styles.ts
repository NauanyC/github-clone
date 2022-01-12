import styled, { css } from 'styled-components';
import {
  RiGroupLine,
  RiBuilding4Line,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine,
} from 'react-icons/ri';

export const Container = styled.div``;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-left: 24px;

    > h1 {
      font-size: 26px;
      line-height: 1.25;
      color: var(--grayDark);
      font-weight: 600;
    }

    > h2 {
      font-size: 20px;
      color: var(--username);
      font-weight: 300;
    }
  }
`;

export const Avatar = styled.img`
  width: 100%;
`;

export const Row = styled.div``;

export const Column = styled.div``;

export const iconsCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const PeopleIcon = styled(RiGroupLine)``;

export const CompanyIcon = styled(RiBuilding4Line)``;

export const LocationIcon = styled(RiMapPin2Line)``;

export const EmailIcon = styled(RiMailLine)``;

export const BlogIcon = styled(RiLinksLine)``;
