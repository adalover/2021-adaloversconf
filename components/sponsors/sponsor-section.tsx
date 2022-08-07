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

import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import { Sponsor } from '@lib/types';
import styles from './sponsor-section.module.css';
import styleUtils from '../utils.module.css';
import { SponsorSocialNetworks } from '@components/sponsors/SponsorSocialNetworks';
import { FC } from 'react';
import styled from '@emotion/styled';

type Props = {
  sponsor: Sponsor;
};

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

const CallToAction: FC<CallToActionProps> = ({ callToAction, link }) =>
  <Container>
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

export const SponsorSection = ({ sponsor }: Props) => (
  <>
    <Link href='/expo'>
      <a className={styles.backlink}>
        <svg
          viewBox='0 0 24 24'
          width='24'
          height='24'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
          fill='none'
          shapeRendering='geometricPrecision'
        >
          <path d='M15 18l-6-6 6-6' />
        </svg>
        Volver a sponsors
      </a>
    </Link>
    <div className={styles.layout}>
      <iframe
        className={cn(styles.video, styleUtils.appear, styleUtils['appear-first'])}
        allow='picture-in-picture'
        allowFullScreen
        frameBorder='0'
        height='100%'
        src={`https://youtube.com/embed/${sponsor.youtubeSlug}`}
        title={sponsor.name}
        width='100%'
      />
      <div className={styles.container}>
        <div className={styles['name-and-headerLogoWithName']}>
          <Image
            alt={sponsor.name}
            src={sponsor.logo.url}
            className={styles.image}
            loading='lazy'
            title={sponsor.name}
            height={64}
            width={64}
          />
          <h1 className={styles.name}>{sponsor.name}</h1>
        </div>
        <p className={styles.description}>{sponsor.description}</p>

        <CallToAction callToAction={sponsor.callToAction} link={sponsor.callToActionLink} />
        <SponsorSocialNetworks links={sponsor.links} />
      </div>
    </div>
  </>
);
