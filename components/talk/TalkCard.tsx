import React, { FC } from 'react';
import { Speaker } from '@lib/types';
import styled from '@emotion/styled';
import { TalkCardBody } from '@components/talk/TalkCardBody';

interface TalkCardProps {
  isTalkLive: boolean;
  title: string;
  speakers: Speaker[];
}

const TalkLive = styled.div`
  color: inherit;
  display: block;
  border-radius: var(--space-2x);
  min-width: var(--talk-card-width, 270px);
  max-width: var(--talk-card-width, 270px);
  min-height: 130px;
  height: 140px;
  padding: 1px;

  background-clip: content-box, border-box;
  background-image: linear-gradient(var(--white), var(--white)),
  linear-gradient(to right, var(--primary-color), var(--primary-color));

  &:hover {
    background-image: linear-gradient(#eee, #eee), linear-gradient(to right, #555, #555);
  }
`;

const TalkNotLive = styled.div`
  color: inherit;
  display: block;
  border-radius: var(--space-2x);
  min-width: var(--talk-card-width, 270px);
  max-width: var(--talk-card-width, 270px);
  min-height: 130px;
  height: 140px;
  padding: 1px;
  align-content: space-between;
  background-clip: content-box, border-box;
  background-image: linear-gradient(#eee, #eee), linear-gradient(to right, #ccc, #ccc);

  &:hover {
    background-image: linear-gradient(#eee, #eee), linear-gradient(to right, var(--primary-color), var(--primary-color));
  }
`;

export const TalkCard: FC<TalkCardProps> = ({ isTalkLive, title, speakers }) => {

  if (isTalkLive) {
    return <TalkLive>
      <TalkCardBody title={title} speakers={speakers} />
    </TalkLive>;
  }

  return <TalkNotLive>
    <TalkCardBody title={title} speakers={speakers} />
  </TalkNotLive>;
};
