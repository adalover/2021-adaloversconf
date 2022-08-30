import { Speaker } from '@lib/types';
import styled from '@emotion/styled';
import React, { FC } from 'react';

interface SpeakerNamesProps {
  speakers: Speaker[];
}

const Container = styled.h5`
  font-size: 14px;
  font-weight: normal;
  margin: 0;
  color: var(--tertiary-color);
`;

export const SpeakerNames: FC<SpeakerNamesProps> = ({ speakers }) => <Container>
  {speakers.length === 1 ? speakers[0].name : `${speakers.length} speakers`}
</Container>;
