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
import { Speaker, Talk } from '@lib/types';
import styles from './speaker-section.module.css';
import { FC } from 'react';
import { SocialNetworks } from '@components/social-networks/social-networks';
import styled from '@emotion/styled';
import { BackLink } from '@components/backLink/BackLink';

type Props = {
  speaker: Speaker;
};

interface TalkInfoProps {
  info: Talk;
}

const TalkInfo: FC<TalkInfoProps> = ({ info }) => <div className={styles['talk-details']}>
  <h3 className={styles['socials-header']}>{info.title}</h3>
  <p>{info.description}</p>
</div>;

interface BioProps {
  bio: string;
}

const Bio: FC<BioProps> = ({ bio }) => <>
  <h2 className={styles['bio-header']}>Bio</h2>
  <p className={styles.bio}>{bio}</p>
</>;

const Oneliner = styled.p`
  color: var(--accents-2);
  max-width: 800px;
  font-weight: bold;
`;

interface SpeakerImageProps {
  title: string;
  src: string;
}

const SpeakerImage: FC<SpeakerImageProps> = ({ title, src }) => <div style={{ minWidth: '300px' }}>
  <Image
    alt={title}
    title={title}
    src={src}
    className={styles.image}
    loading='lazy'
    height={400}
    width={300}
  />
</div>;


export default function SpeakerSection({ speaker }: Props) {
  return (
    <>
      <BackLink text='Volver a ponentes' url='/speakers' />
      <div key={speaker.name} className={styles.container}>
        <SpeakerImage title={speaker.name} src={speaker.image.url} />
        <div className={styles['speaker-details']}>
          <div>
            <h1 className={styles.name}>{speaker.name}</h1>
            <p className={styles.title}>
              {`${speaker.title} @ `}
              <span className={styles.company}>{speaker.company}</span>
            </p>
            <Oneliner>{speaker.oneliner}</Oneliner>
            <Bio bio={speaker.bio} />
            <SocialNetworks twitter={speaker.twitter} github={speaker.github} linkedin={speaker.linkedin}
                            web={speaker.webBlog} />
          </div>
        </div>
      </div>
      {speaker.talk && <TalkInfo info={speaker.talk} />}
    </>
  );
}
