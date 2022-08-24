import styled from '@emotion/styled';
import { Stage, Talk } from '@lib/types';
import { StageName } from '@components/schedule/StageName';
import TalkCard from '@components/talk-card';
import React, { FC } from 'react';

const Container = styled.div`
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 0 24px;
  border-bottom: 1px solid var(--accents-7);

  @media (min-width: 700px) {
    flex-direction: column;
  }
`;

const Talks = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  margin-top: 40px;
`;

interface StageColumnProps {
 stage: Stage;
}

export const StageColumn: FC<StageColumnProps> = ({ stage }) => {
  // Group talks by the time block
  const timeBlocks = stage.schedule.reduce((allBlocks: any, talk) => {
    allBlocks[talk.start] = [...(allBlocks[talk.start] || []), talk];
    return allBlocks;
  }, {});

  return (
    <Container key={stage.name}>
      <StageName name={stage.name} />
      <Talks>
        {Object.keys(timeBlocks).map((startTime: string) => (
          <div key={startTime}>
            {timeBlocks && timeBlocks[startTime].map((talk: Talk, index: number) => (
              <TalkCard key={talk.title} talk={talk} showTime={index === 0} />
            ))}
          </div>
        ))}
      </Talks>
    </Container>
  );
};
