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

import cn from 'classnames';
import commonStyles from '../sponsors/sponsor-section.module.css';
import styleUtils from '../utils.module.css';
import styled from '@emotion/styled';
import { SocialNetworks } from '../social-networks/social-networks';
import { ButtonSecondary } from '../buttons/buttonSecondary';
import { HeaderLogoWithName } from '@components/headerLogoWithName/HeaderLogoWithName';
import React from 'react';

const ButtonList = styled.li`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;

  @media (min-width: 960px) {
    flex-direction: row;
    align-items: center;
  }
`;

const DescriptionContainer = styled.div`
  width: 100%;
`;

const VideoContainer = styled.div`
  width: 100%;
  max-height: 450px;
  height: 450px;
`;

export default function AllianceSection() {
  return <Container>
    <DescriptionContainer>
      <HeaderLogoWithName src='/GIT_Spain_Black.png' name='Girls in Tech España' alt='Girls in Tech España' />
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
    </DescriptionContainer>
    <VideoContainer>
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
    </VideoContainer>
  </Container>;
}
