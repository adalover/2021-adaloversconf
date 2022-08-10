import { Sponsor } from '@lib/types';
import Link from 'next/link';
import cn from 'classnames';
import styles from '@components/sponsors/sponsors-grid.module.css';
import Image  from 'next/image';
import React, { FC } from 'react';
import styled from '@emotion/styled';

const trim = (description: string): string =>
  description.length > 250
    ? `${description.slice(0, 250)}…`
    : description;

interface ImageSponsorProps {
  name: string;
  url: string;
  tier: string;
  slug: string;
}
const Container = styled.div<any>`
  //background: var(--white);
  background: ${props => (props.slug === 'theagilemonkeys' ? '#000' : '#fff')};
  border-radius: var(--space-2x) var(--space-2x) 0 0;
  width: 100%;
  position: relative;
  display: flex;
  padding: 10px;
`;

const ImageSponsor: FC<ImageSponsorProps> = ({name, url, tier, slug}) => <Container slug={slug}>
  <Image
    alt={name}
    src={url}
    className={cn(styles.image, {
      [styles.silver]: tier === 'silver'
    })}
    loading='lazy'
    title={name}
    width={900}
    height={500}
  />
</Container>;

export const SponsorCard = ({ sponsor }: { sponsor: Sponsor }) => (
  <Link key={sponsor.name} href={`/expo/${sponsor.slug}`}>
    <a
      role='button'
      tabIndex={0}
      className={cn(styles.card, {
        [styles.diamond]: sponsor.tier === 'diamond',
        [styles.gold]: sponsor.tier === 'gold'
      })}
    >
      <ImageSponsor name={sponsor.name} url={sponsor.cardImage.url} tier={sponsor.tier} slug={sponsor.slug} />
      {sponsor.tier !== 'silver' && (
        <div className={styles.cardBody}>
          <div>
            <h2 className={styles.name}>{sponsor.name}</h2>
            <p className={styles.description}>{trim(sponsor.description)}</p>
          </div>
        </div>
      )}
    </a>
  </Link>
);
