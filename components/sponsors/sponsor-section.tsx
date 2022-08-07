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
import styles from './sponsor-section.module.css';
import { SponsorSocialNetworks } from '@components/sponsors/SponsorSocialNetworks';
import { FC } from 'react';
import styled from '@emotion/styled';
import { HeaderLogoWithName } from '@components/headerLogoWithName/HeaderLogoWithName';
import { VideoSection } from '@components/videoSection/VideoSection';

interface CallToActionProps {
  callToAction: string;
  link: string;
}

const Container = styled.div`
  padding: var(--space-4x) 0 24px 0;
  display: flex;
  flex-direction: column;
  color: var(--accents-2);
`;

const ContainerDescription = styled.div`
  width: 100%;
  max-height: 450px;
  height: 450px;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;

  @media (min-width: 960px) {
    flex-direction: row;
    align-items: center;
  }
`;

const CallToAction: FC<CallToActionProps> = ({ callToAction, link }) => {
  console.log({ callToAction, link });
  return <Container>
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      type='button'
      className={styles.button}
    >
      {callToAction}
    </a>
  </Container>;
};

type Props = {
  sponsor: Sponsor;
};

export const SponsorSection: FC<Props> = ({ sponsor }) => {
  return <BodyContainer>
    <ContainerDescription>
      <HeaderLogoWithName src={sponsor.logo.url} name={sponsor.name} />
      <p className={styles.description}>{sponsor.description}</p>
      <CallToAction callToAction={sponsor.callToAction} link={sponsor.callToActionLink} />
      <SponsorSocialNetworks links={sponsor.links} />
    </ContainerDescription>
    {sponsor.youtubeSlug && <VideoSection title={sponsor.name} slug={sponsor.youtubeSlug} />}
  </BodyContainer>;
};
