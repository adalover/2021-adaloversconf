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
import commonStyles from './sponsor-section.module.css';
import styles from './collaboration-section.module.css';
import styleUtils from './utils.module.css';

export default function CollaborationSection() {
  const rrss = {
    links: [{
      url: 'https://twitter.com/adalovedev',
      text: 'Twitter'
    }, {
      url: 'https://www.instagram.com/adalovedev/',
      text: 'Instagram'
    }, {
      url: 'https://www.youtube.com/channel/UCiUgaJGlunCT7jwwbliAiPw/videos',
      text: 'YouTube'
    }, {
      url: '/ES_Dossier_AdaLoversConf_2022',
      text: 'Dossier'
    }]
  };

  return (
    <>
      <div className={commonStyles.layout}>
        <iframe
          className={cn(commonStyles.video, styleUtils.appear, styleUtils['appear-first'])}
          allow='picture-in-picture'
          allowFullScreen
          frameBorder='0'
          height='100%'
          src="https://youtube.com/embed/Fz2RdjA8-Uc"
          title="AdaLoversConf 22"
          width='100%'
        />
        <div className={styles.container}>
          <div className={commonStyles['name-and-logo']}>
            <Image
              alt="AdaLoversConf 22"
              src="/soloLogo.png"
              className={commonStyles.image}
              loading='lazy'
              title="AdaLoversConf 22"
              height={64}
              width={64}
              objectFit='scale-down'
            />
            <h1 className={commonStyles.name}>AdaLoversConf 22</h1>
          </div>
          <p className={commonStyles.description}>¡Volvemos a vernos en presencial! 🙌</p>
          <p className={commonStyles.description}>La comunidad AdaLoveDev organizamos este evento cada año con el objetivo de visibilizar a la mujer en el sector tecnológico. Nuestra comunidad de desarrolladoras, entre sus múltiples propósitos, tiene el de dar a conocer el talento tecnológico  femenino que existe en las Islas Canarias.👩‍💻</p>
          <p className={commonStyles.description}>AdaLoversConf es un evento abierto a todo el público y, en él, podrás compartir conocimiento, hacer networking, e incluso venir con tu familia. Además, este año hemos apostado por hacerlo lo más eco friendly posible.🪴</p>
          <p className={commonStyles.description}>¿Te lo vas a perder?</p>
          <div className={commonStyles['sponsor-details']}>
            <a
              href="https://www.tomaticket.es/es-es/entradas-adaloversconf"
              target='_blank'
              rel='noopener noreferrer'
              type='button'
              className={commonStyles.button}
            >
              ¡Compra tu entrada!
            </a>
          </div>
          <div className={commonStyles.resources}>
            <h2 className={commonStyles.heading}>Links</h2>
            {rrss.links.map(link => (
              <a
                key={link.url}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className={cn(commonStyles.button, commonStyles['button-resource'])}
              >
                <span className={commonStyles.truncate}>{link.text}</span>
                <svg
                  viewBox='0 0 24 24'
                  width='16'
                  height='16'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fill='none'
                  shapeRendering='geometricPrecision'
                >
                  <path d='M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6' />
                  <path d='M15 3h6v6' />
                  <path d='M10 14L21 3' />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
