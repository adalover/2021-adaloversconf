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

import styled from '@emotion/styled';
import { Job } from '@lib/types';
import { Card } from './card/card';
import styles from './jobs-grid.module.css';

type Props = {
  jobs: Job[];
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  gap: 1rem;
`

const Title = styled.h2`
  color: var(--primary-color);
  font-size: 32px;
  border-bottom: 1px solid var(--primary-color);
`

const JobList = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`

export default function JobsGrid({ jobs }: Props) {
  const companies = jobs.reduce((allCompanies: any, job) => {
    allCompanies[job.companyName] = [...(allCompanies[job.companyName] || []), job];
    return allCompanies;
  }, {});

  return (
    <>
      {Object.keys(companies).map((companyName: string) => (
        <Container key={companyName}>
          <Title>{companyName}</Title>
          <JobList className={styles.grid}>
            {companies[companyName].map((job: Job) =>
              <Card key={job.id} title={job.title} subtitle={job.companyName} description={job.description} link={job.link} />)}
          </JobList>
        </Container>
      ))}
    </>
  );
}
