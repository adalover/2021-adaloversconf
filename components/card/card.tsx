import styled from '@emotion/styled';
import Link from 'next/link';

interface CardProps {
  title: string;
  link: string;
  subtitle?: string;
  description?: string;
}

const Container = styled.div`
  background: var(--tertiary-color-alpha);
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: var(--space-2x);
  border: 1px solid #ccc;
  cursor: pointer;
`

const Title = styled.h2`
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const Subtitle = styled.p`
  margin: .1rem 0;
  font-size: 12px;
`

const Header = styled.div`
  height: 28%;
  margin-bottom: 1.5rem;
`

const Description = styled.p`
  color: var(--tertiary-color);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`

export const Card = ({ title, subtitle, description, link }: CardProps) => (
  <Link key={title} href={link}>
    <a
      role='button'
      tabIndex={0}
    >
      <Container>
        <Header>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Header>
        <Description>{description ?? ''}</Description>
      </Container>
    </a>
  </Link>
);