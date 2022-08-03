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

import Image from 'next/image';
import cn from 'classnames';
import commonStyles from '../sponsor-section.module.css';
import styles from './alliance-section.module.css';
import styleUtils from '../utils.module.css';
import styled from '@emotion/styled';
import { SocialNetworks } from '../social-networks/social-networks';
import { EVENT_NAME } from '@lib/constants';
import { ButtonSecondary } from '../buttons/buttonSecondary';

const ButtonList = styled.li`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function AllianceSection() {
  return (
    <>
      <div className={commonStyles.layout}>
        <iframe
          className={cn(commonStyles.video, styleUtils.appear, styleUtils['appear-first'])}
          allow='picture-in-picture'
          allowFullScreen
          frameBorder='0'
          height='100%'
          src='https://youtube.com/embed/bwee_WWaJ5w'
          title='Girls in Tech Spain'
          width='100%'
        />
        <div className={styles.container}>
          <div className={commonStyles['name-and-logo']}>
            <Image
              alt='Girls in Tech Spain'
              src='/GIT_Spain_Black.png'
              className={commonStyles.image}
              loading='lazy'
              title={EVENT_NAME}
              height={64}
              width={64}
              objectFit='scale-down'
            />
            <h1 className={commonStyles.name}>Girls in Tech España</h1>
          </div>
          <p className={commonStyles.description}>La tecnología nos necesita. Y nos necesitamos el uno al otro. </p>
          <p className={commonStyles.description}>Somos un grupo de personas en España, desde novatos hasta expertos,
            que están comprometidos a apoyar a las mujeres en la tecnología aquí mismo, donde vivimos.</p>
          <ButtonList>
            <ButtonSecondary text='¡Más información!'
                             action={() => window.open('https://spain.girlsintech.org/', '_blank')} />
          </ButtonList>
          <SocialNetworks twitter='https://twitter.com/GirlsinTechES'
                          instagram='https://www.instagram.com/girlsintech.global/'
                          youtube='https://www.youtube.com/channel/UCIHdXlugHZMHpd8qRDPKvGQ/' />
        </div>
      </div>
    </>
  );
}
