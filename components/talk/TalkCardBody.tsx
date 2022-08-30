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
  speaker: Speaker[];
}

const Speakers = styled.div`
  display: flex;
  margin-top: var(--space-2x);
`;

export const TalkCardBody: FC<CardBodyProps> = ({ title, speaker }) => <Container>
  <TalkTitle title={title} />
  <Speakers>
    <SpeakerAvatars speakers={speaker} />
    <SpeakerNames speakers={speaker} />
  </Speakers>
</Container>;
