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

import { Stage } from '@lib/types';
import React, { FC } from 'react';
import styled from '@emotion/styled';
import { StageColumn } from '@components/schedule/StageColumn';

interface ScheduleProps {
  allStages: Stage[];
}

const Container = styled.div`
  overflow: auto;
  
  @media (min-width: 700px) {
    margin-top: var(--space-4x);
  }
`;

const ColumnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1407px;
  @media (min-width: 700px) {
    margin-left: 475px;
  }
`;

const hasSlug = (stage: Stage) => Boolean(stage.slug);

export const Schedule: FC<ScheduleProps> = ({ allStages }) => (
  <Container>
    <ColumnWrapper>
      {allStages.filter(hasSlug).map(stage => (
        <StageColumn key={stage.slug} stage={stage} />
      ))}
    </ColumnWrapper>
  </Container>
);
