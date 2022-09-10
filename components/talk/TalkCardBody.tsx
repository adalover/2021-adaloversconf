import styled from '@emotion/styled';
import { Speaker } from '@lib/types';
import React, { FC } from 'react';
import { TalkTitle } from './TaklTitle';
import { SpeakerAvatars } from './SpeakerAvatars';
import { SpeakerNames } from './SpeakerNames';

const Container = styled.div`
  padding: var(--space-4x);
`;

interface CardBodyProps {
  title: string;
  speakers: Speaker[];
}

const Speakers = styled.div`
  display: flex;
  margin-top: var(--space-2x);
`;

export const TalkCardBody: FC<CardBodyProps> = ({ title, speakers }) => <Container>
  <TalkTitle title={title} />
  <Speakers>
    <SpeakerAvatars speakers={speakers} />
    <SpeakerNames speakers={speakers} />
  </Speakers>
</Container>;
