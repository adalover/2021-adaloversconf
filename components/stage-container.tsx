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

import useSWR from 'swr';
import cn from 'classnames';
import { Stage } from '@lib/types';
import styles from './stage-container.module.css';
import styleUtils from './utils.module.css';
import ScheduleSidebar from './schedule/schedule-sidebar';
import { URL_STREAM } from '@lib/constants';

type Props = {
  stage: Stage;
  allStages: Stage[];
};

export default function StageContainer({ stage, allStages }: Props) {
  const response = useSWR('/api/stages', {
    initialData: allStages,
    refreshInterval: 5000
  });

  const updatedStages = response.data || [];
  const stream = URL_STREAM;
  const name = 'AdaLoversConf 2021';

  console.log(12345, stream);
  return (
    <div className={styles.container}>
      <div className={styles.streamContainer}>
        <div className={cn(styles.stream, styleUtils.appear, styleUtils['appear-first'])}>
          <iframe
            allow='autoplay; picture-in-picture'
            allowFullScreen
            frameBorder='0'
            src={`${stream}?autoplay=1&mute=1`}
            title={name}
            width='100%'
          />
        </div>
      </div>
      <ScheduleSidebar allStages={updatedStages} />
    </div>
  );
}
