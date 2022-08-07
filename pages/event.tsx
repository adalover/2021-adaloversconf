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
import { EventDescription } from '@components/event/EventDescription';
import { EventVideo } from '@components/event/EventVideo';
import styled from '@emotion/styled';

const meta = {
  title: 'AdaLoversConf 22',
  description: '¡Volvemos a vernos en presencial! 🙌\n' +
    '\n' +
    'La comunidad AdaLoveDev organizamos este evento cada año con el objetivo de visibilizar a la mujer en el sector tecnológico. Nuestra comunidad de desarrolladoras, entre sus múltiples propósitos, tiene el de dar a conocer el talento tecnológico  femenino que existe en las Islas Canarias.👩‍💻\n' +
    '\n' +
    'AdaLoversConf es un evento abierto a todo el público y, en él, podrás compartir conocimiento, hacer networking, e incluso venir con tu familia. Además, este año hemos apostado por hacerlo lo más eco friendly posible.🪴\n' +
    '\n' +
    '¿Te lo vas a perder?'
};

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

export default function EventPage() {
  return <Page meta={meta} fullViewport>
    <Layout>
      <Container>
        <EventDescription />
        <EventVideo />
      </Container>
    </Layout>
  </Page>;
};
