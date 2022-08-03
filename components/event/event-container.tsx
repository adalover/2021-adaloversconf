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
import styles from './event-section.module.css';
import styleUtils from '../utils.module.css';
import styled from '@emotion/styled';
import { SocialNetworks } from '../social-networks/social-networks';
import { DOSSIER, EVENT_NAME } from '@lib/constants';
import { ButtonSecondary } from '../buttons/buttonSecondary';
import { ButtonTertiary } from '../buttons/buttonTertiary';

const ButtonList = styled.li`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function EventSection() {
  return (
    <>
      <div className={commonStyles.layout}>
        <iframe
          className={cn(commonStyles.video, styleUtils.appear, styleUtils['appear-first'])}
          allow='picture-in-picture'
          allowFullScreen
          frameBorder='0'
          height='100%'
          src='https://youtube.com/embed/Fz2RdjA8-Uc'
          title={EVENT_NAME}
          width='100%'
        />
        <div className={styles.container}>
          <div className={commonStyles['name-and-logo']}>
            <Image
              alt={EVENT_NAME}
              src='/soloLogo.png'
              className={commonStyles.image}
              loading='lazy'
              title={EVENT_NAME}
              height={64}
              width={64}
              objectFit='scale-down'
            />
            <h1 className={commonStyles.name}>AdaLoversConf 22</h1>
          </div>
          <p className={commonStyles.description}>¡Volvemos a vernos en presencial! 🙌</p>
          <p className={commonStyles.description}>La comunidad AdaLoveDev organizamos este evento cada año con el
            objetivo de visibilizar a la mujer en el sector tecnológico. Nuestra comunidad de desarrolladoras, entre sus
            múltiples propósitos, tiene el de dar a conocer el talento tecnológico femenino que existe en las Islas
            Canarias.👩‍💻</p>
          <p className={commonStyles.description}>AdaLoversConf es un evento abierto a todo el público y, en él, podrás
            compartir conocimiento, hacer networking, e incluso venir con tu familia. Además, este año hemos apostado
            por hacerlo lo más eco friendly posible.🪴</p>
          <p className={commonStyles.description}>¿Te lo vas a perder?</p>
          <ButtonList>
            <ButtonSecondary text='¡Compra tu entrada!'
              action={() => window.open('https://www.tomaticket.es/es-es/entradas-adaloversconf', '_blank')} />
            <ButtonTertiary text='Dossier' action={() => window.open(DOSSIER, '_blank')} />
          </ButtonList>
          <SocialNetworks twitter='https://twitter.com/adalovedev'
            instagram='https://www.instagram.com/adalovedev/'
            youtube='https://www.youtube.com/channel/UCiUgaJGlunCT7jwwbliAiPw/videos' />
        </div>
      </div>
    </>
  );
}
