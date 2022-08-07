import React, { FC } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--space-2x);

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
  alt?: string;
}

export const HeaderLogoWithName: FC<LogoWithNameProps> = ({ src, name, alt }) => {
  return <Container>
    <Image
      alt={alt}
      src={src}
      loading='lazy'
      title={alt}
      height={64}
      width={64}
      objectFit='contain'
    />
    <h1>{name}</h1>
  </Container>;
};
