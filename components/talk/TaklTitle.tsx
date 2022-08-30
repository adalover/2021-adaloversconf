import React, { FC } from 'react';
import styled from '@emotion/styled';

interface TalkTitleProps {
  title: string;
}

const Title = styled.h4`
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.4;
  width: 100%;
`;

export const TalkTitle: FC<TalkTitleProps> = ({ title }) => <Title title={title}>
  {title}
</Title>;
