import React, { FC } from 'react';
import Image from 'next/image';
import { EVENT_NAME } from '@lib/constants';
import commonStyles from '@components/sponsors/sponsor-section.module.css';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > h1 {
    font-weight: 800;
    color: #000;
    font-size: 30px;
    line-height: 1.4;
    letter-spacing: -0.05em;

    @media (min-width: 500px) {
      font-size: 48px;
    }
  }
`;

interface LogoWithNameProps {
  src: string;
  name: string;
}

export const HeaderLogoWithName: FC<LogoWithNameProps> = ({ src, name }) => {
  return <Container>
    <Image
      alt={EVENT_NAME}
      src={src}
      className={commonStyles.image}
      loading='lazy'
      title={EVENT_NAME}
      height={64}
      width={64}
      objectFit='scale-down'
    />
    <h1>{name}</h1>
  </Container>;
};
