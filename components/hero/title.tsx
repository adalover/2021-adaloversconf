import { FC } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

interface TitleProps {
  text: string;
}

const appear = keyframes`
  to {
    opacity: 1;
  }
`;

const Container = styled.h1`
  opacity: 0;
  animation: ${appear} 0.8s cubic-bezier(0.1, 0, 0.175, 1) forwards;
  animation-delay: 1.6s;
  font-size: 52px;
  line-height: 1.15;
  letter-spacing: -0.05em;
  font-weight: 700;
  text-align: center;
  margin: 0 0 25px;

  @media (min-width: 768px) {
    font-size: 100px;
    line-height: 1;
    font-weight: 800;
    margin: 0 0 40px;
  }
`;

export const Title: FC<TitleProps> = ({ text }) => <Container>
  {text}
</Container>;
