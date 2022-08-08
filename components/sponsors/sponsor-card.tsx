import { Sponsor } from '@lib/types';
import Link from 'next/link';
import cn from 'classnames';
import styles from '@components/sponsors/sponsors-grid.module.css';
import Image from 'next/image';

const trim = (description: string): string =>
  description.length > 250
    ? `${description.slice(0, 250)}…`
    : description;

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
      <div className={styles.imageWrapper}>
        <Image
          alt={sponsor.name}
          src={sponsor.cardImage.url}
          className={cn(styles.image, {
            [styles.silver]: sponsor.tier === 'silver'
          })}
          loading='lazy'
          title={sponsor.name}
          width={900}
          height={500}
        />
      </div>
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
