import { Speaker } from '@lib/types';
import styled from '@emotion/styled';
import React, { FC } from 'react';

interface SpeakerAvatarsProps {
  speakers: Speaker[];
}

const AvatarGroup = styled.div`
  display: flex;
`;

const Avatar = styled.div`
  margin-right: var(--space-2x);

  &:nth-child(n + 2) {
    margin-left: -15px;
  }
`;

const Img = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2);
`;

export const SpeakerAvatars: FC<SpeakerAvatarsProps> = ({ speakers }) => <AvatarGroup>
  {speakers.map(speaker => (
    <Avatar key={speaker.name}>
      <Img
        loading='lazy'
        alt={speaker.name}
        src={speaker.image.url}
        title={speaker.name}
        width={24}
        height={24}
      />
    </Avatar>
  ))}
</AvatarGroup>;
