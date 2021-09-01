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

import Layout from './layout';
import ConfContainer from './conf-container';
import styles from '@components/conf-container.module.css';

export default function Conf() {
  return (
    <Layout>
      <ConfContainer>
        <div className={styles.video}>
          <iframe
            className='embed-responsive-item'
            src='https://www.youtube.com/embed/h-bS0NuYYfA?autoplay=1&mute=1&loop=1&controls=0&playlist=h-bS0NuYYfA'
            title='AdaLoversConf 2021'
            frameBorder='0'
            allowFullScreen
          />
        </div>
        {/*<Hero />*/}
      </ConfContainer>
    </Layout>
  );
}
