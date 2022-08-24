import styled from '@emotion/styled';
import React, { FC } from 'react';

interface StageNameProps {
  name: string;
}

const Container = styled.h3`
  text-align: center;
  font-size: 22px;
  line-height: 1.15;
  letter-spacing: -0.05em;
  font-weight: 800;
  min-width: 220px;
  padding-bottom: var(--space-2x);
  left: initial;
  color: var(--brand);
  
  @media (min-width: 700px) {
    font-size: var(--space-8x);
    left: 0;
    z-index: 1;
  }
`;

export const StageName: FC<StageNameProps> = ({ name }) => <Container>
  <span>{name}</span>
</Container>;
