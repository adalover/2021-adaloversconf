import { FC } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

interface DetailsProp {
  text: string;
}

const appear = keyframes`
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  opacity: 0;
  animation: ${appear} 0.8s cubic-bezier(0.1, 0, 0.175, 1) forwards;
  animation-delay: 1.6s;
  font-size: 16px;
  line-height: 1.4;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--space-8x);
  color: var(--brand);

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 80px;
  }
`;

export const Details: FC<DetailsProp> = ({ text }) => <Container>
  <p>{text}</p>
</Container>;
