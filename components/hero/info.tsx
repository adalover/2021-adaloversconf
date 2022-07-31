import { FC } from 'react';
import { Pipe } from '@components/hero/pipe';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

interface InfoProps {
  date: string;
  place: string;
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
  font-size: 20px;
  line-height: 1.4;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 var(--space-8x) 0;
  color: var(--brand);

  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 80px;
  }
`;

export const Info: FC<InfoProps> = ({ date, place }) => <Container>
  <p>{date}</p>
  <Pipe />
  <p><strong>{place}</strong></p>
</Container>;
