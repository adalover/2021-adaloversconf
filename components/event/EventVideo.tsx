import React, { FC } from 'react';
import { EVENT_NAME } from '@lib/constants';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  max-height: 450px;
  height: 450px;
`;

export const EventVideo: FC = () => {
  return <Container>
    <iframe allow='picture-in-picture'
            allowFullScreen
            frameBorder='0'
            src='https://youtube.com/embed/Fz2RdjA8-Uc'
            title={EVENT_NAME} />
  </Container>;
};
