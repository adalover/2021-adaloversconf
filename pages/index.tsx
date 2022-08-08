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
import { ConfContent } from '@components/confContent/ConfContent';
import { SITE_NAME, YEAR } from '@lib/constants';
import { SkipNavContent } from '@reach/skip-nav';

const Conf = () => {
  const meta = {
    title: SITE_NAME,
    description: `Evento ${SITE_NAME} ${YEAR}`,
    image: 'AdaLovelace.jpg'
  };

  return (
    <Page meta={meta} fullViewport>
      <SkipNavContent />
      <ConfContent />
    </Page>
  );
};

export default Conf;
