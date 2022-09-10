/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { FC, useEffect, useState } from 'react';
import { format, isAfter, isBefore, parseISO } from 'date-fns';
import { Talk } from '@lib/types';
import styled from '@emotion/styled';
import { TalkCard } from '@components/talk/TalkCard';

type Props = {
  key: string;
  talk: Talk;
  showTime: boolean;
};

// https://github.com/date-fns/date-fns/issues/946
const formatDate = (date: string) =>
  format(parseISO(date), 'h:mmaaaaa\'m\'');

const Container = styled.div`
  margin-bottom: 24px;
`;

const Time = styled.p`
  color: var(--tertiary-color);
  margin: 0 0 var(--space-2x);
`;

export const TalkInfo: FC<Props> = ({ talk, showTime }) => {
  const [isTalkLive, setIsTalkLive] = useState(false);
  const [startAndEndTime, setStartAndEndTime] = useState('');
  const { title, speaker, start, end } = talk;

  useEffect(() => {
    const now = Date.now();
    setIsTalkLive(isAfter(now, parseISO(start)) && isBefore(now, parseISO(end)));
    setStartAndEndTime(`${formatDate(start)} – ${formatDate(end)}`);
  }, [end, start]);

  const speakerSlug = speaker?.[0]?.slug;
  return (
    <Container key={title}>
      {showTime && <Time>{startAndEndTime || <>&nbsp;</>}</Time>}
      {speakerSlug &&
        <a href={`/speakers/${speakerSlug}`}>
          <TalkCard isTalkLive={isTalkLive} title={title} speakers={speaker} />
        </a>
      }
      {!speakerSlug &&
        <TalkCard isTalkLive={isTalkLive} title={title} speakers={speaker} />
      }
    </Container>
  );
};
