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

import Page from '@components/page';
import Layout from '@components/layout';
import ConfContainer from '@components/conf-container';
import { CALL_FOR_PAPER, DATE, DOSSIER } from '@lib/constants';
import { ButtonLinkPrimary } from '@components/buttons/buttonLinkPrimary';

export default function Conf() {
  const meta = {
    title: 'AdaLoversConf',
    description: 'Evento AdaLoversConf 2021',
    image: 'AdaLovelace.jpg'
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout hideNav={true}>
        <ConfContainer>
          <div className='homeInfo'>
            <img src='logowhite.png' />
            {DATE.toUpperCase()}
            <div className='callToActionContainer'>
              <ButtonLinkPrimary text="Call 4 paper" link={CALL_FOR_PAPER} />
              <ButtonLinkPrimary text="Dossier" isNewPage={true} link={DOSSIER} />
            </div>
          </div>
        </ConfContainer>
      </Layout>
    </Page>
  );
}
