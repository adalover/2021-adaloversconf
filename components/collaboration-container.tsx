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
import { COLLABORATION_DESCRIPTION } from '@lib/staticsText';

export default function CollaborationSection() {
  const collaborator = {
    name: 'Amate',
    youtube: `https://www.youtube.com/embed/MIH5UFsl6Hg`,
    logo: { url: '/logo_amate_15_años-01_color.png' },
    description: COLLABORATION_DESCRIPTION,
    callToActionLink: 'https://www.ecoentradas.com/elegirsesion/611',
    callToAction: '¡Dona!',
    links: [{
      url: 'https://amate-tenerife.com/',
      text: 'Web'
    }, {
      url: 'https://www.instagram.com/amate_asociacion/',
      text: 'Instagram'
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
          src={collaborator.youtube}
          title={collaborator.name}
          width='100%'
        />
        <div className={styles.container}>
          <div className={commonStyles['name-and-logo']}>
            <Image
              alt={collaborator.name}
              src={collaborator.logo.url}
              className={commonStyles.image}
              loading='lazy'
              title={collaborator.name}
              height={64}
              width={64}
              objectFit='scale-down'
            />
            <h1 className={commonStyles.name}>{collaborator.name}</h1>
          </div>
          <p className={commonStyles.description}>{collaborator.description}</p>
          <div className={commonStyles['sponsor-details']}>
            <a
              href={collaborator.callToActionLink}
              target='_blank'
              rel='noopener noreferrer'
              type='button'
              className={commonStyles.button}
            >
              {collaborator.callToAction}
            </a>
          </div>
          <div className={commonStyles.resources}>
            <h2 className={commonStyles.heading}>Resources</h2>
            {collaborator.links.map(link => (
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
