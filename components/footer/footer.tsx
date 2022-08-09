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
import styles from './footer.module.css';
import { COPYRIGHT_HOLDER, SITE_NAME } from '@lib/constants';
import { FC } from 'react';
import { FooterLink } from '@components/footer/FooterLink';
import styled from '@emotion/styled';

const Separator = styled.div`
  margin-bottom: 15px;
  
  @media screen and (min-width: 960px) {
    margin: 0 10px;
    height: var(--space-4x);
    width: 1px;
    background: var(--tertiary-color);
    display: block;
  }
`;

const Legal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-4x);

  @media screen and (min-width: 960px) {
    flex-direction: row;
  }
`;

const Copyrigth = styled.div`
  text-align: center;
  margin-bottom: 15px;
  user-select: none;

  @media screen and (min-width: 960px) {
    margin-bottom: 0;
  }
`;

const CenterGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 960px) {
    flex-direction: row;
  }
`;

export const Footer: FC = () => (
  <footer className={cn(styles.footer)}>
    <Legal>
      <Copyrigth>
        Copyright © {`${new Date().getFullYear()} `} {COPYRIGHT_HOLDER || `${SITE_NAME}.`} All
        rights reserved.
      </Copyrigth>
      <CenterGroup>
        <FooterLink scr='https://adalovedev.notion.site/C-digo-de-conducta-d99cf9bc2b294b088856d8125821f1b6'
                    name='Código de conducta' />
        <Separator />

        <FooterLink scr='./01_Clausula_Aviso_legal.pdf' name='Aviso legal' />
        <Separator />

        <FooterLink scr='https://github.com/adalover/2021-adaloversconf' name='Source Code' />
        <Separator />

        <FooterLink scr='https://vercel.com' name='Created by Vercel' />
      </CenterGroup>
    </Legal>
  </footer>
);
