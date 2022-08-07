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

import { GetStaticPaths, GetStaticProps } from 'next';

import Page from '@components/page';
import { SponsorSection } from '@components/sponsors/sponsor-section';
import Layout from '@components/layout';

import { getAllSponsors } from '@lib/cms-api';
import { Sponsor } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';
import styles from '@components/sponsors/sponsor-section.module.css';
import Link from 'next/link';

type Props = {
  sponsor: Sponsor;
};

export default function SponsorPage({ sponsor }: Props) {
  const meta = {
    title: 'Demo - Virtual Event Starter Kit',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Link href='/expo'>
          <a className={styles.backlink}>
            <svg
              viewBox='0 0 24 24'
              width='24'
              height='24'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              fill='none'
              shapeRendering='geometricPrecision'
            >
              <path d='M15 18l-6-6 6-6' />
            </svg>
            Volver a sponsors
          </a>
        </Link>
        <SponsorSection sponsor={sponsor} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  const sponsors = await getAllSponsors();
  const sponsor = sponsors.find((s: Sponsor) => s.slug === slug) || null;

  if (!sponsor) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      sponsor
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const sponsors = await getAllSponsors();
  const slugs = sponsors.map((s: Sponsor) => ({ params: { slug: s.slug } }));

  return {
    paths: slugs,
    fallback: 'blocking'
  };
};
