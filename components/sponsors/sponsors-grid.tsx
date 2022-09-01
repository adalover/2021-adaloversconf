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

import { Sponsor } from '@lib/types';
import styles from './sponsors-grid.module.css';
import { SponsorCard } from '@components/sponsors/sponsor-card';
import styled from '@emotion/styled';
import { SPONSOR_CATEGORIES } from '@lib/constants';


type Props = {
  sponsors: Sponsor[];
};

const Container = styled.h3`
  text-align: left;
  font-size: 22px;
  line-height: 1.15;
  letter-spacing: -0.05em;
  font-weight: 800;
  min-width: 220px;
  padding-bottom: var(--space-2x);
  left: initial;
  color: var(--brand);
  margin: var(--space-16x) var(--space-8x) var(--space-4x);
  
  @media (min-width: 700px) {
    font-size: var(--space-8x);
    left: 0;
    z-index: 1;
  }
`;

export default function SponsorsGrid({ sponsors }: Props) {

  // it is ugly but it works (for now)
  return (
      <>
          {[1, 2, 3, 4].map(i => (
              <div>
                  <Container><span>{SPONSOR_CATEGORIES[i]}</span></Container>
                  <div key={i} className={styles.grid}>
                      {sponsors.filter(s => s.tierRank === i).map(sponsor => (
                      <SponsorCard key={sponsor.name} sponsor={sponsor} />))}
                  </div>
              </div>
          ))}
      </>
  )
}
