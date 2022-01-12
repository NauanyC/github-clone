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
  width: 16%;
  border-radius: 50%;
`;

export const Row = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;

  > li {
    display: flex;
    align-items: center;

    > span {
      font-size: 14px;
      color: var(--grey);
    }

    > * {
      margin-right: 5px;
    }

    b {
      margin-bottom: -1.5px;
    }
  }
`;

export const Column = styled.ul``;

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
